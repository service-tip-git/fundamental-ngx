import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformListModule } from '../list.module';

@Component({
    selector: 'fdp-standard-list-item-test',
    template: `
        <fdp-list #componentElement>
            <li fdp-free-content-list-item>
                <span id="projected_span">Title</span>
            </li>
        </fdp-list>
    `,
    standalone: true,
    imports: [PlatformListModule]
})
class FreeContentListItemTestComponent {
    @ViewChild('StandardListItemComponent', { read: ElementRef, static: true })
    ref: ElementRef;
}

describe('FreeContentListItemComponent', () => {
    let component: FreeContentListItemTestComponent;
    let fixture: ComponentFixture<FreeContentListItemTestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FreeContentListItemTestComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FreeContentListItemTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a list item', () => {
        fixture.detectChanges();
        const listElement = fixture.debugElement.nativeElement.querySelector('.fd-list__item');
        expect(listElement.classList).toContain('fd-list__item');
    });

    it('list item should have tabindex', () => {
        fixture.detectChanges();
        const listElement = fixture.debugElement.nativeElement.querySelector('.fd-list__item');
        expect(listElement.getAttribute('tabindex')).toEqual('0');
    });

    it('list item should have id', () => {
        fixture.detectChanges();
        const listElement = fixture.debugElement.nativeElement.querySelector('.fd-list__item');
        expect(listElement.getAttribute('id')).toContain('fdp-list-item-');
    });

    it('list item should project content', () => {
        fixture.detectChanges();
        const projectedElement = fixture.debugElement.nativeElement.querySelector('#projected_span');
        expect(projectedElement).toBeTruthy();
    });
});
