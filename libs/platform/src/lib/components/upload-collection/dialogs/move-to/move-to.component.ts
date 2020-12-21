import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { DialogRef, DialogService, DialogConfig } from '@fundamental-ngx/core';
import { isObject } from '../../../../utils/lang';

import { UploadCollectionItem, UploadCollectionFolder } from '../../models/upload-collection.models';
import { NewFolderComponent } from '../new-folder';

@Component({
    templateUrl: './move-to.component.html',
    styles: [
        `
            .fd-list__item--title-background {
                background-color: #f2f2f2;
                background-color: var(--sapList_HeaderBackground);
            }

            .fd-dialog__body--no-horizontal-padding {
                padding-left: 0 !important;
                padding-right: 0 !important;
            }

            .fd-title--bold {
                font-weight: bold;
            }
        `
    ]
})
export class MoveToComponent implements OnInit {
    /** 
     * List of upload collection items
     */
    readonly items: UploadCollectionItem[] = this.dialogRef.data.items;
    /** 
     * The current folder in what need to create a new one
     */
    originalFolder?: UploadCollectionFolder = this.dialogRef.data.currentFolder;

    /** @hidden */
    _currentFolder?: UploadCollectionFolder = this.originalFolder ? { ...this.originalFolder } : null;
    /** @hidden */
    selectedFolder?: UploadCollectionFolder;

    /** @hidden */
    _foldersList: UploadCollectionFolder[] = [];

    constructor(
        private readonly dialogRef: DialogRef,
        private readonly _dialogService: DialogService,
        private readonly _cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this._init(this._currentFolder ? this._currentFolder.files : this.items);
    }

    /** @hidden */
    _goToParentFolder(): void {
        this.selectedFolder = null;
        this._currentFolder = this._getParentFolderByCurrentFolderId(this._currentFolder.documentId);
        this._init(this._currentFolder ? this._currentFolder.files : this.items);

        this._cd.detectChanges();
    }

    /** @hidden */
    _close(): void {
        this.dialogRef.dismiss();
    }

    /** @hidden */
    _confirm(): void {
        this.dialogRef.close({
            selectedFolder: this.selectedFolder || this._currentFolder
        });
    }

    /** @hidden */
    _openFolder(folder: UploadCollectionFolder): void {
        this.selectedFolder = null;
        this._currentFolder = folder;
        this._init(folder.files);

        this._cd.detectChanges();
    }

    /** @hidden */
    _selectFolder(folder: UploadCollectionFolder): void {
        this.selectedFolder = folder;
    }

    /** @hidden */
    _hasFolders(items: UploadCollectionItem[]): boolean {
        return items.some((item) => item.type === 'folder');
    }

    /** @hidden */
    _newFolder(): void {
        const dialogRef = this._dialogService.open(NewFolderComponent, {
            responsivePadding: true,
            backdropClickCloseable: false,
            height: '350px',
            backdropClass: 'fdp-upload-collection-dialig-no-bg',
            data: {
                currentFolder: this._currentFolder
            }
        } as DialogConfig);

        dialogRef.afterClosed.pipe(take(1)).subscribe((folderName) => {
            const folder: UploadCollectionFolder = {
                documentId: null,
                type: 'folder',
                name: folderName,
                uploadedBy: {
                    id: Date.now(),
                    name: 'You'
                },
                uploadedOn: new Date(),
                files: []
            };

            this.dialogRef.close({
                selectedFolder: folder
            });
        });
    }

    /** @hidden */
    private _init(items: UploadCollectionItem[]): void {
        this._foldersList = items.filter((item) => item.type === 'folder') as UploadCollectionFolder[];
    }

    /** @hidden */
    private _getParentFolderByCurrentFolderId(documentId: string | number): UploadCollectionFolder | undefined {
        let foundObj: UploadCollectionFolder;

        JSON.stringify(this.items, (_, nestedValue) => {
            if (!isObject(nestedValue) || nestedValue.type === 'file' || !nestedValue.files) {
                return nestedValue;
            }

            if (nestedValue.files.some((item) => item.documentId === documentId)) {
                foundObj = nestedValue;
            }

            return nestedValue;
        });

        return foundObj;
    }
}
