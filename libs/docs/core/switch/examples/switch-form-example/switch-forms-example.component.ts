import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwitchModule } from '@fundamental-ngx/core/switch';
import { FormLabelModule } from '@fundamental-ngx/core/form';

@Component({
    selector: 'fd-switch-forms-example',
    templateUrl: './switch-forms-example.component.html',
    styleUrls: ['./switch-forms-example.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, FormLabelModule, SwitchModule]
})
export class SwitchFormsExampleComponent {
    customForm = new FormGroup({
        switch1: new FormControl({ value: false, disabled: false }),
        switch2: new FormControl({ value: true, disabled: false }),
        switch3: new FormControl({ value: false, disabled: true }),
        switch4: new FormControl({ value: true, disabled: true })
    });
}
