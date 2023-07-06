import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AvatarComponent } from '@fundamental-ngx/core/avatar';
import { AvatarGroupFocusableAvatarDirective } from './avatar-group-focusable-avatar.directive';

@Component({
    template: `<fd-avatar #directiveElement fd-avatar-group-focusable-avatar></fd-avatar>`,
    standalone: true,
    imports: [AvatarComponent, AvatarGroupFocusableAvatarDirective]
})
class TestComponent {
    @ViewChild('directiveElement', { read: ElementRef })
    ref: ElementRef;
}

describe('AvatarGroupFocusableAvatarDirective', () => {
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

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should assign class', () => {
        expect(component.ref.nativeElement).toHaveClass('fd-avatar-group__focusable-avatar');
    });
});
