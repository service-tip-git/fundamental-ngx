import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
    AbstractDataProvider,
    BaseDataSource,
    DataProvider,
    DataSourceDirective,
    DataSourceParser,
    FD_DATA_SOURCE_TRANSFORMER,
    isDataSource
} from '@fundamental-ngx/cdk/data-source';
import { SelectModule } from '@fundamental-ngx/core/select';
import { Observable, delay, isObservable, of } from 'rxjs';

export class ExampleDataSource<T> extends BaseDataSource<T> {
    constructor(public dataProvider: AbstractDataProvider<T>) {
        super(dataProvider);
        // Search for items instantly.
        this.match('*');
    }
}

export class ArrayExampleDataSource<T> extends ExampleDataSource<T> {
    constructor(data: T[]) {
        super(new DataProvider(data));
    }
}

export class ObservableExampleDataSource<T> extends ExampleDataSource<T> {
    constructor(data: Observable<T[]>) {
        super(new DataProvider(data));
    }
}

/**
 * Type of acceptable objects as a datasource for the Multi-Combo Box component.
 */
export type ExampleAcceptableDataSource<T> = ExampleDataSource<T> | Observable<T[]> | T[];

export class ExampleDataSourceParser<T> implements DataSourceParser<T, ExampleDataSource<T>> {
    parse(source: ExampleAcceptableDataSource<T>): ExampleDataSource<T> | undefined {
        if (isDataSource(source)) {
            return source as ExampleDataSource<T>;
        }

        if (Array.isArray(source)) {
            return new ArrayExampleDataSource<T>(source);
        }

        if (isObservable(source)) {
            return new ObservableExampleDataSource<T>(source);
        }

        return undefined;
    }
}

@Component({
    selector: 'fdk-data-source-default-example',
    templateUrl: './data-source-default-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: DataSourceDirective,
            inputs: ['dataSource'],
            outputs: ['dataChanged']
        }
    ],
    providers: [
        {
            provide: FD_DATA_SOURCE_TRANSFORMER,
            useClass: ExampleDataSourceParser<number>
        }
    ],
    imports: [SelectModule]
})
export class DataSourceDefaultExampleComponent implements OnInit {
    arrayDataSource = new Array(20).fill(null).map((_v, i) => i);
    classDataSource = new Array(20).fill(null).map((_v, i) => i + 10);

    currentData: number[] = [];

    dataSourceOptions = ['array', 'observable', 'class'];

    currentDataSource: 'array' | 'observable' | 'class' = 'array';

    isLoading = false;

    constructor(
        private readonly _destroyRef: DestroyRef,
        private readonly _cd: ChangeDetectorRef,
        public readonly dataSourceDirective: DataSourceDirective<number>
    ) {}

    ngOnInit(): void {
        this.dataSourceDirective.dataSource = this.arrayDataSource;

        this.dataSourceDirective.dataChanged$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((data) => {
            this.currentData = data;
            this._cd.detectChanges();
        });

        this.dataSourceDirective.isLoading.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((isLoading) => {
            this.isLoading = isLoading;
            this._cd.detectChanges();
        });
    }

    changeDataSource(source: 'array' | 'observable' | 'class'): void {
        switch (source) {
            case 'array':
                this.dataSourceDirective.dataSource = this.arrayDataSource;
                break;
            case 'observable':
                this.dataSourceDirective.dataSource = of(this.arrayDataSource).pipe(delay(3000));
                break;
            case 'class':
                this.dataSourceDirective.dataSource = new ExampleDataSource(new DataProvider(this.classDataSource));
                break;
        }
    }
}
