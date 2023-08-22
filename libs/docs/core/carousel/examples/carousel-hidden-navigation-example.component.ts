import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselItemComponent } from '@fundamental-ngx/core/carousel';
import { CarouselComponent } from '@fundamental-ngx/core/carousel';

@Component({
    selector: 'fd-carousel-hidden-navigation-example',
    templateUrl: './carousel-hidden-navigation-example.component.html',
    styles: ['img {pointer-events: none;}'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CarouselComponent, CarouselItemComponent]
})
export class CarouselHiddenNavigationExampleComponent {}
