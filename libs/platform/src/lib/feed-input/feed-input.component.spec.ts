import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AvatarComponent } from '@fundamental-ngx/core/avatar';
import { FormControlComponent } from '@fundamental-ngx/core/form';

import { PlatformButtonModule } from '@fundamental-ngx/platform/button';
import { FeedInputComponent } from './feed-input.component';
import { PlatformFeedInputModule } from './feed-input.module';

describe('FeedInputComponent', () => {
    let component: FeedInputComponent;
    let fixture: ComponentFixture<FeedInputComponent>;
    let textareaEl;
    let buttonEl;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, PlatformButtonModule, AvatarComponent, FormControlComponent, PlatformFeedInputModule]
        })
            .overrideComponent(FeedInputComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedInputComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

        textareaEl = fixture.debugElement.query(By.css('textarea'));
        buttonEl = fixture.debugElement.query(By.css('button'));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disabled state', () => {
        component.disabled = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(textareaEl.nativeElement.disabled).toBeTruthy();
        });
        expect(buttonEl.nativeElement.disabled).toBeTruthy();
    });

    it('should button disabled when textarea has not a value', () => {
        textareaEl.nativeElement.value = '';
        textareaEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(buttonEl.nativeElement.disabled).toBeTruthy();
    });

    it('should button enable when textarea has a value', () => {
        textareaEl.nativeElement.value = 'test';
        textareaEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(buttonEl.nativeElement.disabled).toBeFalsy();
    });

    it('should textarea grow by default', () => {
        const defaultHeight = textareaEl.nativeElement.style.height || 0;
        textareaEl.nativeElement.value = '1 \n 2 \n 3 \n 4';
        component.resize();

        expect(parseInt(textareaEl.nativeElement.style.height, 10)).toBeGreaterThan(defaultHeight);
    });

    // TODO: flaky test  https://github.com/SAP/fundamental-ngx/issues/7534
    xit('should set max height', () => {
        component.maxHeight = 7;
        component.ngAfterViewInit();

        fixture.detectChanges();

        component.resize();
        expect(textareaEl.nativeElement.style.maxHeight).toEqual('133px');
    });

    it('should call onChange when textarea value changing', () => {
        jest.spyOn(component, 'onChange');
        textareaEl.nativeElement.value = 'test';
        textareaEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(component.onChange).toHaveBeenCalled();
    });

    it('should call resize when textarea value changing', () => {
        jest.spyOn(component, 'resize');
        textareaEl.nativeElement.value = 'test';
        textareaEl.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(component.resize).toHaveBeenCalled();
    });
});
