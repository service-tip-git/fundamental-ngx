import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule } from '../dialog.module';
import { DialogService } from './dialog.service';

@Component({
    template: ``,
    standalone: true,
    imports: [CommonModule, DialogModule]
})
class DialogServiceTestComponent {
    constructor(public dialogService: DialogService) {}
}

@Component({
    template: `
        <ng-template let-dialogRef let-dialogConfig="dialogConfig" #testTemplate>
            <fd-dialog [dialogRef]="dialogRef" [dialogConfig]="dialogConfig"></fd-dialog>
        </ng-template>
    `,
    standalone: true,
    imports: [CommonModule, DialogModule]
})
class TemplateTestComponent {
    @ViewChild('testTemplate') templateRef: TemplateRef<any>;
}

describe('DialogService', () => {
    let service: DialogService;
    let component: TemplateTestComponent;
    let rootComponent: DialogServiceTestComponent;
    let fixture: ComponentFixture<DialogServiceTestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CommonModule,
                OverlayModule,
                NoopAnimationsModule,
                TemplateTestComponent,
                DialogServiceTestComponent
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DialogServiceTestComponent);
        rootComponent = fixture.componentInstance;
        component = TestBed.createComponent(TemplateTestComponent).componentInstance;
        service = rootComponent.dialogService;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(service).toBeDefined();
        expect(service.hasOpenDialogs()).toBe(false);
    });

    it('should open dialog from template', fakeAsync(async () => {
        const destroyDialogSpy = jest.spyOn(service as any, '_destroyDialog');
        const templateRef = component.templateRef;
        const dialogRef = service.open(templateRef);

        fixture.detectChanges();
        await fixture.whenRenderingDone();
        expect(service.hasOpenDialogs()).toBe(true);

        dialogRef.dismiss();
        fixture.detectChanges();
        tick(200);
        expect(destroyDialogSpy).toHaveBeenCalled();
        expect(service.hasOpenDialogs()).toBe(false);
    }));

    it('should open dialog from component', fakeAsync(async () => {
        const destroyDialogSpy = jest.spyOn(service as any, '_destroyDialog');
        const dialogRef = service.open(TemplateTestComponent);

        fixture.detectChanges();
        await fixture.whenRenderingDone();
        expect(service.hasOpenDialogs()).toBe(true);

        dialogRef.dismiss();
        fixture.detectChanges();
        tick(200);
        expect(destroyDialogSpy).toHaveBeenCalled();
        expect(service.hasOpenDialogs()).toBe(false);
    }));

    it('should dismiss all dialogs', () => {
        service.open(TemplateTestComponent);
        service.open(TemplateTestComponent);
        service.open(TemplateTestComponent);

        expect(service.hasOpenDialogs()).toBe(true);
        service.dismissAll();
        expect(service.hasOpenDialogs()).toBe(false);
    });
});
