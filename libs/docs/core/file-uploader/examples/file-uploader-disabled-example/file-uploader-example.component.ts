import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploaderModule } from '@fundamental-ngx/core/file-uploader';

@Component({
    selector: 'fd-file-uploader-disabled-example',
    templateUrl: './file-uploader-disabled-example.component.html',
    styleUrls: ['./file-uploader-disabled-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FileUploaderModule, FormsModule, NgFor]
})
export class FileUploaderDisabledExampleComponent {
    filesDisabled: File[];

    handleFileSelection(files: File[]): void {
        alert(files.length + ' Files selected successfully!!!');
    }
}
