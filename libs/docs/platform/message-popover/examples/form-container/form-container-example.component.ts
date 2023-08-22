import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformButtonModule } from '@fundamental-ngx/platform/button';
import { MessagePopoverComponent } from '@fundamental-ngx/platform/message-popover';
import { BarModule } from '@fundamental-ngx/core/bar';
import { PlatformTextAreaModule } from '@fundamental-ngx/platform/form';
import { PlatformInputModule } from '@fundamental-ngx/platform/form';
import { FdpFormGroupModule } from '@fundamental-ngx/platform/form';
import { MessagePopoverFormWrapperComponent } from '@fundamental-ngx/platform/message-popover';

interface MaxErrorModel {
    max: number;
    actual: number;
}

interface MaxLengthErrorModel {
    actualLength: number;
    requiredLength: number;
}

@Component({
    selector: 'fdp-message-popover-form-container-example',
    templateUrl: './form-container-example.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MessagePopoverFormWrapperComponent,
        FdpFormGroupModule,
        FormsModule,
        ReactiveFormsModule,
        PlatformInputModule,
        PlatformTextAreaModule,
        BarModule,
        MessagePopoverComponent,
        PlatformButtonModule
    ]
})
export class FormContainerExampleComponent {
    personalInfoForm: FormGroup;
    businessInfoForm: FormGroup;
    submitted = false;
    validate = [Validators.requiredTrue];
    maxValidator = [Validators.max(40)];
    emailValidator = [Validators.email];
    maxLengthValidator = [Validators.maxLength(5)];
    minLengthValidator = [Validators.minLength(5)];

    maxErrorModel: MaxErrorModel;
    maxLengthErrorModel: MaxLengthErrorModel;

    @ViewChild('personal', { read: FormGroupDirective })
    personalForm: FormGroupDirective;

    @ViewChild('business', { read: FormGroupDirective })
    businessForm: FormGroupDirective;

    constructor(private readonly _cd: ChangeDetectorRef) {
        this.personalInfoForm = new FormGroup({});
        this.businessInfoForm = new FormGroup({});
    }

    onSubmit(event: Event): void {
        this.personalForm.form.get('emailInput')?.setValue('invalidEmailAddress.com');
        this.businessForm.form.get('weeklyHoursInput')?.setValue('400');
        this.businessForm.form.get('companyInput')?.setValue('SomeLongCompanyName');
        this.businessForm.form.get('basicInput3')?.setValue('Hi');

        setTimeout(() => {
            this.personalForm.onSubmit(event);
            this.businessForm.onSubmit(event);
            this._cd.detectChanges();
        });
    }
}
