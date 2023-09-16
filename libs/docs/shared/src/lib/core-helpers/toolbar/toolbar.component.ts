import { HttpClient } from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter, inject,
    Inject,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CompleteThemeDefinition, ThemingService } from '@fundamental-ngx/core/theming';
import { Libraries } from '../../utilities';

import { LowerCasePipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonModule } from '@fundamental-ngx/core/button';
import {
    ContentDensityDirective,
    ContentDensityMode,
    GlobalContentDensityService
} from '@fundamental-ngx/core/content-density';
import { IconModule } from '@fundamental-ngx/core/icon';
import { MenuComponent, MenuKeyboardService, MenuModule } from '@fundamental-ngx/core/menu';
import {
    ProductMenuComponent,
    ShellbarActionsComponent,
    ShellbarComponent,
    ShellbarLogoComponent,
    ShellbarMenuItem,
    ShellbarSidenavDirective,
    ShellbarSizes
} from '@fundamental-ngx/core/shellbar';
import { TranslationService } from '@fundamental-ngx/i18n';
import { Subject, filter, fromEvent } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';
import { DocsService } from '../../services/docs.service';
import { FormsModule } from "@angular/forms";

const urlContains = (themeName: string, search: string): boolean => themeName.toLowerCase().includes(search);

const isHcb = (themeName: string): boolean => urlContains(themeName, 'hcb');
const isHcw = (themeName: string): boolean => urlContains(themeName, 'hcw');
const isDark = (themeName: string): boolean => urlContains(themeName, 'dark');

type Version = {
    id: string;
    url: string;
};

@Component({
    selector: 'fd-docs-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    providers: [MenuKeyboardService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        ShellbarComponent,
        ButtonModule,
        ShellbarSidenavDirective,
        ContentDensityDirective,
        ShellbarLogoComponent,
        RouterLink,
        ProductMenuComponent,
        ShellbarActionsComponent,
        NgIf,
        MenuModule,
        NgTemplateOutlet,
        NgFor,
        IconModule,
        LowerCasePipe,
        FormsModule
    ]
})
export class ToolbarDocsComponent implements OnInit, OnDestroy {
    @Output()
    btnClicked: EventEmitter<undefined> = new EventEmitter<undefined>();

    @ViewChild('themeMenu')
    themeMenu: MenuComponent;

    @ViewChild('i18nMenu')
    i18nMenu: MenuComponent;

    ContentDensityMode = ContentDensityMode;

    highlightJsThemeCss: SafeResourceUrl;

    library: Libraries;

    size: ShellbarSizes = 'm';

    themes: CompleteThemeDefinition[];

    version: Version;

    versions: Version[];

    initialTheme = 'sap_horizon';

    translations = [
        { name: 'Shqip', value: 'sq-AL' },
        { name: 'Български', value: 'bg-BG' },
        { name: '简体中文', value: 'zh-CN' },
        { name: 'Český', value: 'cs-CZ' },
        { name: 'English', value: 'en-US' },
        { name: 'Français', value: 'fr-FR' },
        { name: 'ქართული', value: 'ka-GE' },
        { name: 'हिन्दी', value: 'hi-IN' },
        { name: 'Italiano', value: 'it-IT' },
        { name: 'Polski', value: 'pl-PL' },
        { name: 'Русский', value: 'ru-RU' },
        { name: 'Türkçe', value: 'tr-TR' },
        { name: 'Українська', value: 'uk-UA' }
    ];

    selectedLocale: string;

    items: ShellbarMenuItem[] = [
        {
            name: 'Core Docs',
            callback: () => {
                this._routerService.navigate(['core/home']);
            }
        },
        {
            name: 'Platform Docs',
            callback: () => {
                this._routerService.navigate(['platform/home']);
            }
        },
        {
            name: 'CX',
            callback: () => {
                this._routerService.navigate(['cx/home']);
            }
        },
        {
            name: 'CDK',
            callback: () => {
                this._routerService.navigate(['cdk/home']);
            }
        }
    ];

    private _translationService = inject(TranslationService);

    /** An RxJS Subject that will kill the data stream upon destruction (for unsubscribing)  */
    private readonly _onDestroy$: Subject<void> = new Subject<void>();

    constructor(
        private _routerService: Router,
        private _contentDensityService: GlobalContentDensityService,
        private _themingService: ThemingService,
        private _route: ActivatedRoute,
        private _domSanitizer: DomSanitizer,
        private _docsService: DocsService,
        private _http: HttpClient
    ) {
        this.selectedLocale = this._translationService.getLocale();
        console.log({ selectedLocale: this.selectedLocale });
        this.version = {
            id: this._docsService.getLernaJson().version,
            url: ''
        };
        this.library = this._route.snapshot.data['library'] || 'core';

        this._themingService.currentTheme
            .pipe(
                takeUntil(this._onDestroy$),
                filter((theme) => !!theme)
            )
            .subscribe((theme) => {
                this.updateHighlightTheme(theme?.id as string);
            });
    }

    ngOnInit(): void {
        this.themes = this._themingService.getThemes();
        this._themingService.setTheme(this.initialTheme);

        this._setVersions();

        fromEvent(window, 'resize')
            .pipe(startWith(1), debounceTime(60), takeUntil(this._onDestroy$))
            .subscribe(() => (this.size = this._getShellbarSize()));
    }

    ngOnDestroy(): void {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }

    updateHighlightTheme(themeName: string): void {
        let theme = 'googlecode.css';
        if (isHcb(themeName)) {
            theme = 'a11y-dark.css';
        } else if (isHcw(themeName)) {
            theme = 'a11y-light.css';
        } else if (isDark(themeName)) {
            theme = 'tomorrow-night.css';
        }
        this.highlightJsThemeCss = this.trustedResourceUrl(`assets/highlight-js-styles/${theme}`);
    }

    selectVersion(version: any): void {
        window.open(version.url, '_blank');
    }

    selectTheme(themeId: string): void {
        this._themingService.setTheme(themeId);
        this.updateHighlightTheme(themeId);
    }

    selectTranslation(locale: string): void {
        this.selectedLocale = locale;
        this._translationService.setLocale(locale);
        this.i18nMenu.close();
    }

    selectDensity(density: ContentDensityMode): void {
        this._contentDensityService.updateContentDensity(density);
    }

    private _setVersions(): void {
        this._http
            .get<Version[]>('https://raw.githubusercontent.com/SAP/fundamental-ngx/main/versions.json')
            .pipe(takeUntil(this._onDestroy$))
            .subscribe((versions) => {
                this.versions = versions;

                if (this.versions.find((version) => version.id === this.version.id)) {
                    return;
                }

                this.versions.unshift(this.version);
            });
    }
    private trustedResourceUrl = (url: string): SafeResourceUrl =>
        this._domSanitizer.bypassSecurityTrustResourceUrl(url);

    private _getShellbarSize(): ShellbarSizes {
        const width = window.innerWidth;
        return width < 768 ? 's' : 'm';
    }
}
