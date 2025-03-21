import { Component } from '@angular/core';
import { ObjectNumberModule } from '@fundamental-ngx/core/object-number';

@Component({
    selector: 'fd-object-number-basic-example',
    templateUrl: './object-number-basic-example.component.html',
    styleUrls: ['./object-number-examples.component.scss'],
    imports: [ObjectNumberModule]
})
export class ObjectNumberBasicExampleComponent {}

@Component({
    selector: 'fd-object-number-bold-example',
    templateUrl: './object-number-bold-example.component.html',
    styleUrls: ['./object-number-examples.component.scss'],
    imports: [ObjectNumberModule]
})
export class ObjectNumberBoldExampleComponent {}

@Component({
    selector: 'fd-object-number-large-example',
    templateUrl: './object-number-large-example.component.html',
    styleUrls: ['./object-number-examples.component.scss'],
    imports: [ObjectNumberModule]
})
export class ObjectNumberLargeExampleComponent {}

@Component({
    selector: 'fd-object-number-units-example',
    templateUrl: './object-number-units-example.component.html',
    styleUrls: ['./object-number-examples.component.scss'],
    imports: [ObjectNumberModule]
})
export class ObjectNumberUnitsExampleComponent {}

@Component({
    selector: 'fd-object-number-status-example',
    templateUrl: './object-number-status-example.component.html',
    styleUrls: ['./object-number-examples.component.scss'],
    imports: [ObjectNumberModule]
})
export class ObjectNumberStatusExampleComponent {}

@Component({
    selector: 'fd-object-number-decimal-example',
    templateUrl: './object-number-decimal-example.component.html',
    styleUrls: ['./object-number-examples.component.scss'],
    imports: [ObjectNumberModule]
})
export class ObjectNumberDecimalExampleComponent {}

@Component({
    selector: 'fd-object-number-truncation-example',
    templateUrl: './object-number-truncation-example.component.html',
    styleUrls: ['./object-number-examples.component.scss'],
    imports: [ObjectNumberModule]
})
export class ObjectNumberTruncationExampleComponent {}
