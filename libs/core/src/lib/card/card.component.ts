import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    HostBinding,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    QueryList,
    ViewEncapsulation
} from '@angular/core';

import { applyCssClass, CssClassBuilder } from '@fundamental-ngx/core/utils';

import { CardType, CLASS_NAME } from './constants';
import { Subscription } from 'rxjs';
import { getCardModifierClassNameByCardType } from './utils';
import {
    ContentDensityObserver,
    contentDensityObserverProviders,
    ContentDensityMode
} from '@fundamental-ngx/core/content-density';
import { ListItemComponent } from '@fundamental-ngx/core/list';

let cardId = 0;

@Component({
    selector: 'fd-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        contentDensityObserverProviders({
            modifiers: {
                [ContentDensityMode.COMPACT]: CLASS_NAME.cardCompact
            }
        })
    ]
})
export class CardComponent implements OnChanges, OnInit, CssClassBuilder, OnDestroy, AfterContentInit {
    /** Badge */
    @Input() badge: string;

    /** Indicates when card should show a loader  */
    @Input()
    isLoading = false;

    /**
     * cardType can be 'object' | 'standard' | 'component' | 'analytical' | 'list' | 'table' | 'quickView' | 'linkList'
     * to indicate what card's type it belongs to
     */
    @Input()
    cardType: CardType = 'standard';

    /** Card Id, it has some default value if not set,  */
    @Input()
    @HostBinding('attr.id')
    id = 'fd-card-id-' + cardId++;

    /** Card role  */
    @Input()
    @HostBinding('attr.role')
    role = 'region';

    /** @hidden */
    @ContentChildren(ListItemComponent, { descendants: true })
    listItems: QueryList<ListItemComponent>;

    /** @hidden */
    class: string;

    /** @hidden */
    private _subscriptions = new Subscription();

    /** @hidden */
    constructor(private _elementRef: ElementRef<HTMLElement>, private _contentDensityObserver: ContentDensityObserver) {
        _contentDensityObserver.subscribe();
    }

    /** @hidden */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngOnInit(): void {
        this.buildComponentCssClass();
    }

    /** @hidden */
    ngAfterContentInit(): void {
        this.listItems?.first?.setIsFirst(true);
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    @applyCssClass
    /** @hidden */
    buildComponentCssClass(): string[] {
        return [CLASS_NAME.card, this.cardType ? getCardModifierClassNameByCardType(this.cardType) : ''];
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}
