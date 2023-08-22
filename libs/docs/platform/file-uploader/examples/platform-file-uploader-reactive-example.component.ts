import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, ValidatorFn, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileUploaderInvalidChangeEvent, FileUploaderSelectionChangeEvent } from '@fundamental-ngx/platform/form';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { PlatformButtonModule } from '@fundamental-ngx/platform/button';
import { NgIf, NgFor } from '@angular/common';
import { PlatformFileUploaderModule } from '@fundamental-ngx/platform/form';
import { FdpFormGroupModule } from '@fundamental-ngx/platform/form';

@Component({
    selector: 'fdp-platform-file-uploader-reactive-example',
    templateUrl: './platform-file-uploader-reactive-example.component.html',
    styleUrls: ['platform-file-uploader-reactive-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FdpFormGroupModule,
        ReactiveFormsModule,
        PlatformFileUploaderModule,
        NgIf,
        PlatformButtonModule,
        ContentDensityDirective,
        NgFor
    ]
})
export class PlatformFileUploaderReactiveExampleComponent {
    files: File[];
    invalidFiles: File[];
    customForm: FormGroup = new FormGroup({});
    requiredDateValidator: ValidatorFn[] = [Validators.required];

    handleFileSelection(files: FileUploaderSelectionChangeEvent): void {
        this.files = files.payload;
        console.log(this.customForm);
        if (this.files.length > 0) {
            alert('file uploaded' + this.files.length);
        }
    }
    handleInvalidFileSelection(files: FileUploaderInvalidChangeEvent): void {
        this.invalidFiles = files.payload;
        if (this.invalidFiles.length > 0) {
            alert('file invalid uploaded' + this.invalidFiles.length);
        }
    }

    onSubmit(): void {
        if (this.customForm.valid) {
            alert('form file Uploaded successfully');
        }
    }
}
