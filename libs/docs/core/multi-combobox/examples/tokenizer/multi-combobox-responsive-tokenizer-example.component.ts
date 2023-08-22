import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MultiComboboxSelectionChangeEvent } from '@fundamental-ngx/core/multi-combobox';
import { MultiComboboxModule } from '@fundamental-ngx/core/multi-combobox';
import { DataSourceDirective } from '@fundamental-ngx/cdk/data-source';
import { CvaDirective } from '@fundamental-ngx/cdk/forms';
import { FormLabelModule } from '@fundamental-ngx/core/form';
import { FormItemModule } from '@fundamental-ngx/core/form';

@Component({
    selector: 'fd-multi-combobox-responsive-tokenizer-example',
    templateUrl: './multi-combobox-responsive-tokenizer-example.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormItemModule, FormLabelModule, CvaDirective, DataSourceDirective, MultiComboboxModule]
})
export class MultiComboboxResponsiveTokenizerExampleComponent {
    dataSource = [
        '10" Portable DVD player',
        '7" Widescreen Portable DVD Player w MP3',
        'Astro Laptop 1516',
        'Astro Phone 6',
        'Audio/Video Cable Kit - 4m',
        'Beam Breaker B-1',
        'Beam Breaker B-2',
        'Beam Breaker B-3',
        'Benda Laptop 1408',
        'Bending Screen 21HD',
        'Blaster Extreme',
        'Broad Screen 22HD',
        'Camcorder View',
        'CD/DVD case: 264 sleeves',
        'Cepat Tablet 10.5',
        'Cepat Tablet 8',
        'Cerdik Phone 7',
        'Comfort Easy',
        'Comfort Senior',
        'Copperberry',
        'Copymaster',
        'Cordless Bluetooth Keyboard, english international',
        'Cordless Mouse',
        'Designer Mousepad',
        'e-Book Reader ReadMe',
        'Ergo Mousepad',
        'Ergo Screen E-I',
        'Ergo Screen E-II',
        'Ergo Screen E-III',
        'Ergonomic Keyboard',
        'Fabric bag professional',
        'Family PC Basic',
        'Family PC Pro',
        'Flat Basic',
        'Flat Future',
        'Flat Watch HD32',
        'Flat Watch HD37',
        'Flat Watch HD41',
        'Flat XL',
        'Flat XXL',
        'Flyer',
        'Gaming Monster',
        'Gaming Monster Pro',
        'Gladiator MX',
        'Goldberry',
        'Hurricane GX',
        'Hurricane GX/LN',
        'Internet Keyboard',
        'ITelO FlexTop I4000',
        'ITelO FlexTop I6300c',
        'ITelO FlexTop I9100',
        'ITelO FlexTop I9800',
        'ITelo Jog-Mate',
        'ITelo MusicStick',
        'ITelO Vault',
        'ITelO Vault Net',
        'ITelO Vault SAT',
        'Jet Scan Professional',
        'Jet Scan Professional',
        'Laser Allround',
        'Laser Basic',
        'Laser Professional Eco',
        'Lovely Sound 5.1',
        'Lovely Sound 5.1 Wireless',
        'Lovely Sound Stereo',
        'Maxi Tablet',
        'Media Keyboard',
        'Mini Tablet',
        'Mousepad',
        'Multi Color',
        'Multi Print',
        'Notebook Basic 15',
        'Notebook Basic 17',
        'Notebook Basic 18',
        'Notebook Basic 19',
        'Notebook Lock',
        'Notebook Professional 15',
        'Notebook Professional 17',
        'PC Lock',
        'PC Power Station',
        'Photo Scan',
        'Platinberry',
        'Play Movie',
        'Pocket Mouse',
        'Portable DVD Player with 9" LCD Monitor',
        'Power Pro Player 40',
        'Power Pro Player 80',
        'Power Scan',
        'Proctra X',
        'Record Movie',
        'Removable CD/DVD Laser Labels',
        'Screen clean',
        'Server Basic',
        'Server Power Pro',
        'Server Professional',
        'Silverberry',
        'Smart Design',
        'Smart Firewall',
        'Smart Games',
        'Smart Internet Antivirus'
    ];

    selectedItems1 = [this.dataSource[1]];

    onSelect1(item: MultiComboboxSelectionChangeEvent): void {
        this.selectedItems1 = item.selectedItems;
    }
}
