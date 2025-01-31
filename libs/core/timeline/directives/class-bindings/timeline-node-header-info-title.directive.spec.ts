import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimelineModule } from '../../timeline.module';

describe('TimelineNodeHeaderInfoTitleDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(component.ref.nativeElement).toBeTruthy();
    });

    it('should assign class', () => {
        expect(component.ref.nativeElement.className.includes('fd-timeline__post-header-title')).toBe(true);
    });
});

@Component({
    template: `<span #directiveElement fdTimelineNodeHeaderInfoTitle>Notification Footer Content Test</span>`,
    standalone: true,
    imports: [TimelineModule]
})
class TestComponent {
    @ViewChild('directiveElement')
    ref: ElementRef;
}
