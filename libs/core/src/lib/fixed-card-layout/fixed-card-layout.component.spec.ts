import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardModule } from '@fundamental-ngx/core/card';
import { FixedCardLayoutComponent, FixedCardLayoutModule } from '@fundamental-ngx/core/fixed-card-layout';
import { whenStable } from '@fundamental-ngx/core/tests';
import { RtlService } from '@fundamental-ngx/core/utils';

@Component({
    template: `
        <div>
            <fd-fixed-card-layout>
                <fd-card *fdCardDef="1">1</fd-card>
                <fd-card *fdCardDef="2">2</fd-card>
                <fd-card *fdCardDef="3">3</fd-card>
                <fd-card *fdCardDef="4">4</fd-card>
                <fd-card *fdCardDef="5">5</fd-card>
            </fd-fixed-card-layout>
        </div>
    `
})
class TestFixedCardLayoutComponent {
    @ViewChild(FixedCardLayoutComponent)
    fixedCardLayout: FixedCardLayoutComponent;
}

describe('FixedCardLayoutComponent', () => {
    let component: TestFixedCardLayoutComponent;
    let fixture: ComponentFixture<TestFixedCardLayoutComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [CardModule, FixedCardLayoutModule],
                declarations: [TestFixedCardLayoutComponent],
                providers: [RtlService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestFixedCardLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have 5 cards on screen', async () => {
        await whenStable(fixture);

        expect(component.fixedCardLayout._cards.length).toEqual(5);
    });

    describe('Columns calculation', () => {
        const sizes = [1664, 1600, 992, 656, 500, 300, 0];
        const columns = [5, 4, 3, 2, 1, 1, 1];

        for (let i = 0; i < sizes.length; i++) {
            it(`should have ${columns[i]} columns on Laptop width size value of ${sizes[i]}px`, async () => {
                await whenStable(fixture);

                spyOnProperty(component.fixedCardLayout, '_availableWidth', 'get').and.returnValue(sizes[i]);

                component.fixedCardLayout.updateLayout();
                await whenStable(fixture);

                expect(component.fixedCardLayout._cardColumns.length).toEqual(columns[i]);
            });
        }
    });

    describe('Drag & drop', () => {
        it('should process drag & drop', () => {
            const spy = spyOn(component.fixedCardLayout.cardDraggedDropped, 'emit').and.callThrough();

            const event = {
                container: {
                    data: 0,
                    getSortedItems: () => [{ data: { fdCardDef: 1 } }]
                },
                previousContainer: {
                    data: 1,
                    getSortedItems: () => [{ data: { fdCardDef: 2 } }]
                }
            } as any;

            component.fixedCardLayout._onDragDropped(event);
            fixture.detectChanges();

            expect(spy).toHaveBeenCalledWith({
                previousIndex: event.previousContainer.data,
                currentIndex: event.container.data,
                // About the rest we don't care at the moment
                layoutColumns: component.fixedCardLayout._numberOfColumns,
                items: component.fixedCardLayout._cards.toArray()
            });
        });
    });
});