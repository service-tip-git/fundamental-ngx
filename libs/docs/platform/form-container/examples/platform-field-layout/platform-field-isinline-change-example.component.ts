import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OptionItem, RESPONSIVE_BREAKPOINTS_CONFIG } from '@fundamental-ngx/platform/shared';
import { PlatformComboboxModule } from '@fundamental-ngx/platform/form';
import { PlatformRadioGroupModule } from '@fundamental-ngx/platform/form';
import { PlatformSelectModule } from '@fundamental-ngx/platform/form';
import { CheckboxGroupComponent } from '@fundamental-ngx/platform/form';
import { PlatformTextAreaModule } from '@fundamental-ngx/platform/form';
import { FdpFormGroupModule } from '@fundamental-ngx/platform/form';

const DEFAULT_NEW_BREAKPOINTS_CONFIG = {
    S: 800,
    M: 1224,
    L: 1540
};

export class Fruit {
    id: string;
    name: string;
    age: number;

    constructor(id: string, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

@Component({
    selector: 'fdp-platform-form-isinline-change-example',
    templateUrl: './platform-field-isinline-change-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: RESPONSIVE_BREAKPOINTS_CONFIG,
            useValue: DEFAULT_NEW_BREAKPOINTS_CONFIG
        }
    ],
    standalone: true,
    imports: [
        FdpFormGroupModule,
        FormsModule,
        ReactiveFormsModule,
        PlatformTextAreaModule,
        CheckboxGroupComponent,
        PlatformSelectModule,
        PlatformRadioGroupModule,
        PlatformComboboxModule
    ]
})
export class PlatformFieldIsInlineChangeExampleComponent {
    form: FormGroup = new FormGroup({});

    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    dataSource = ['Apple', 'Banana', 'Pineapple', 'Strawberry', 'Broccoli', 'Carrot', 'Jalapeño', 'Spinach'];

    userList = [
        new Fruit('A', 'Apple', 10),
        new Fruit('B', 'orange', 70),
        new Fruit('C', 'Plums', 10),
        new Fruit('D', 'pineapple', 11),
        new Fruit('E', 'watermelon', 10)
    ];
    option = this.userList.map<OptionItem>((item) => ({
        label: item.name + item.id,
        value: item,
        triggerValue: `(${item.id})`,
        disabled: item.id === 'B',
        icon: ''
    }));
}
