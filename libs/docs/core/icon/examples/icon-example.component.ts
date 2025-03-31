import { Component } from '@angular/core';
import { IconComponent } from '@fundamental-ngx/core/icon';

@Component({
    selector: 'fd-icon-example',
    templateUrl: './icon-example.component.html',
    styleUrls: ['icon-example.component.scss'],
    imports: [IconComponent]
})
export class IconExampleComponent {
    icons: string[] = [
        'accidental-leave',
        'account',
        'wrench',
        'windows-doors',
        'washing-machine',
        'visits',
        'video',
        'travel-expense',
        'temperature',
        'task',
        'synchronize',
        'survey',
        'settings',
        'search',
        'sales-document',
        'retail-store',
        'refresh',
        'product',
        'present',
        'ppt-attachment',
        'pool',
        'pie-chart',
        'picture',
        'photo-voltaic',
        'phone',
        'pending',
        'pdf-attachment',
        'past',
        'outgoing-call',
        'opportunity',
        'opportunities',
        'notes',
        'money-bills',
        'map',
        'log',
        'line-charts',
        'lightbulb',
        'leads',
        'lead',
        'laptop',
        'kpi-managing-my-area',
        'kpi-corporate-performance',
        'incoming-call',
        'inbox',
        'horizontal-bar-chart',
        'history',
        'heating-cooling',
        'gantt-bars',
        'future',
        'fridge',
        'fallback',
        'expense-report',
        'excel-attachment',
        'energy-saving-lightbulb',
        'employee',
        'email',
        'edit',
        'duplicate',
        'download',
        'doc-attachment',
        'dishwasher',
        'delete',
        'decline',
        'complete',
        'competitor',
        'collections-management',
        'chalkboard',
        'cart',
        'card',
        'camera',
        'calendar',
        'begin',
        'basket',
        'bar-chart',
        'attachment',
        'arrow-top',
        'arrow-right',
        'arrow-left',
        'arrow-bottom',
        'approvals',
        'appointment',
        'alphabetical-order',
        'along-stacked-chart',
        'alert',
        'addresses',
        'address-book',
        'add-filter',
        'add-favorite',
        'add',
        'activities',
        'action',
        'accept',
        'hint',
        'group',
        'check-availability',
        'weather-proofing',
        'payment-approval',
        'batch-payments',
        'bed',
        'arobase',
        'family-care',
        'favorite',
        'navigation-right-arrow',
        'navigation-left-arrow',
        'e-care',
        'less',
        'lateness',
        'lab',
        'internet-browser',
        'instance',
        'inspection',
        'image-viewer',
        'home',
        'grid',
        'goalseek',
        'general-leave-request',
        'create-leave-request',
        'flight',
        'filter',
        'favorite-list',
        'factory',
        'endoscopy',
        'employee-pane',
        'employee-approvals',
        'email-read',
        'electrocardiogram',
        'documents',
        'decision',
        'database',
        'customer-history',
        'customer',
        'credit-card',
        'create-entry-time',
        'contacts',
        'compare',
        'clinical-order',
        'chain-link',
        'pull-down',
        'cargo-train',
        'car-rental',
        'business-card',
        'bar-code',
        'folder-blank',
        'passenger-train',
        'question-mark',
        'world',
        'iphone',
        'ipad',
        'warning',
        'sort',
        'course-book',
        'course-program',
        'add-coursebook',
        'print',
        'save',
        'play',
        'pause',
        'record',
        'response',
        'pushpin-on',
        'pushpin-off',
        'unfavorite',
        'learning-assistant',
        'timesheet',
        'time-entry-request',
        'list',
        'action-settings',
        'share',
        'feed',
        'role',
        'flag',
        'post',
        'inspect',
        'inspect-down',
        'appointment-2',
        'target-group',
        'marketing-campaign',
        'message-error',
        'notification',
        'comment',
        'shipping-status',
        'collaborate',
        'shortcut',
        'lead-outdated',
        'tools-opportunity',
        'permission',
        'supplier',
        'table-view',
        'table-chart',
        'switch-views',
        'e-learning',
        'manager',
        'switch-classes',
        'simple-payment',
        'signature',
        'sales-order-item',
        'sales-order',
        'request',
        'receipt',
        'puzzle',
        'process',
        'private',
        'popup-window',
        'person-placeholder',
        'per-diem',
        'paper-plane',
        'paid-leave',
        'pdf-reader',
        'overview-chart',
        'overlay',
        'org-chart',
        'number-sign',
        'notification-2',
        'my-sales-order',
        'meal',
        'loan',
        'order-status',
        'customer-order-entry',
        'performance',
        'menu',
        'employee-lookup',
        'education',
        'customer-briefing',
        'customer-and-contacts',
        'my-view',
        'accelerated',
        'to-be-reviewed',
        'warning2',
        'feeder-arrow',
        'quality-issue',
        'workflow-tasks',
        'create',
        'home-share',
        'globe',
        'tags',
        'work-history',
        'x-ray',
        'wounds-doc',
        'web-cam',
        'waiver',
        'vertical-bar-chart',
        'upstacked-chart',
        'trip-report',
        'microphone',
        'unpaid-leave',
        'tree',
        'toaster-up',
        'toaster-top',
        'toaster-down',
        'time-account',
        'theater',
        'taxi',
        'subway-train',
        'study-leave',
        'stethoscope',
        'step',
        'sonography',
        'soccor',
        'physical-activity',
        'pharmacy',
        'official-service',
        'offsite-work',
        'nutrition-activity',
        'newspaper',
        'monitor-payments',
        'map-2',
        'machine',
        'mri-scan',
        'end-user-experience-monitoring',
        'unwired',
        'customer-financial-fact-sheet',
        'retail-store-manager',
        'Netweaver-business-client',
        'electronic-medical-record',
        'eam-work-order',
        'customer-view',
        'crm-service-manager',
        'crm-sales',
        'widgets',
        'commission-check',
        'collections-insight',
        'clinical-task-tracker',
        'citizen-connect',
        'cart-approval',
        'capital-projects',
        'bo-strategy-management',
        'business-objects-mobile',
        'business-objects-explorer',
        'business-objects-experience',
        'bbyd-dashboard',
        'bbyd-active-sales',
        'business-by-design',
        'business-one',
        'sap-box',
        'manager-insight',
        'accounting-document-verification',
        'hr-approval',
        'idea-wall',
        'Chart-Tree-Map',
        'cart-5',
        'cart-4',
        'wallet',
        'vehicle-repair',
        'upload',
        'unlocked',
        'umbrella',
        'travel-request',
        'travel-expense-report',
        'travel-itinerary',
        'time-overtime',
        'thing-type',
        'technical-object',
        'tag',
        'syringe',
        'syntax',
        'suitcase',
        'simulate',
        'shield',
        'share-2',
        'sales-quote',
        'repost',
        'provision',
        'projector',
        'add-product',
        'pipeline-analysis',
        'add-photo',
        'palette',
        'nurse',
        'sales-notification',
        'mileage',
        'meeting-room',
        'media-forward',
        'media-play',
        'media-pause',
        'media-reverse',
        'media-rewind',
        'measurement-document',
        'measuring-point',
        'measure',
        'map-3',
        'locked',
        'letter',
        'journey-arrive',
        'journey-change',
        'journey-depart',
        'it-system',
        'it-instance',
        'it-host',
        'iphone-2',
        'ipad-2',
        'inventory',
        'insurance-house',
        'insurance-life',
        'insurance-car',
        'initiative',
        'incident',
        'group-2',
        'goal',
        'functional-location',
        'full-screen',
        'form',
        'fob-watch',
        'blank-tag',
        'family-protection',
        'folder',
        'fax-machine',
        'example',
        'eraser',
        'employee-rejections',
        'drop-down-list',
        'draw-rectangle',
        'document',
        'doctor',
        'discussion-2',
        'discussion',
        'dimension',
        'customer-and-supplier',
        'crop',
        'add-contact',
        'compare-2',
        'color-fill',
        'collision',
        'curriculum',
        'chart-axis',
        'full-stacked-chart',
        'full-stacked-column-chart',
        'vertical-bar-chart-2',
        'horizontal-bar-chart-2',
        'horizontal-stacked-chart',
        'vertical-stacked-chart',
        'choropleth-chart',
        'geographic-bubble-chart',
        'multiple-radar-chart',
        'radar-chart',
        'crossed-line-chart',
        'multiple-line-chart',
        'multiple-bar-chart',
        'line-chart',
        'line-chart-dual-axis',
        'bubble-chart',
        'scatter-chart',
        'multiple-pie-chart',
        'column-chart-dual-axis',
        'tag-cloud-chart',
        'area-chart',
        'cause',
        'cart-3',
        'cart-2',
        'bus-public-transport',
        'burglary',
        'building',
        'border',
        'bookmark',
        'badge',
        'attachment-audio',
        'attachment-video',
        'attachment-html',
        'attachment-photo',
        'attachment-e-pub',
        'attachment-zip-file',
        'attachment-text-file',
        'add-equipment',
        'add-activity',
        'activity-individual',
        'activity-2',
        'add-activity-2',
        'activity-items',
        'activity-assigned-to-goal',
        'status-positive',
        'status-completed',
        'status-negative',
        'status-error',
        'status-inactive',
        'status-critical',
        'status-in-progress',
        'blank-tag-2',
        'cart-full',
        'locate-me',
        'paging',
        'company-view',
        'document-text',
        'explorer',
        'personnel-view',
        'sorting-ranking',
        'drill-down',
        'drill-up',
        'vds-file',
        'sap-logo-shape',
        'folder-full',
        'system-exit',
        'system-exit-2',
        'close-command-field',
        'open-command-field',
        'sys-enter-2',
        'sys-enter',
        'sys-help-2',
        'sys-help',
        'sys-back',
        'sys-back-2',
        'sys-cancel',
        'sys-cancel-2',
        'open-folder',
        'sys-find-next',
        'sys-find',
        'sys-monitor',
        'sys-prev-page',
        'sys-first-page',
        'sys-next-page',
        'sys-last-page',
        'generate-shortcut',
        'create-session',
        'display-more',
        'enter-more',
        'zoom-in',
        'zoom-out',
        'header',
        'detail-view',
        'show-edit',
        'collapse',
        'expand',
        'positive',
        'negative',
        'display',
        'menu2',
        'redo',
        'undo',
        'navigation-up-arrow',
        'navigation-down-arrow',
        'down',
        'up',
        'shelf',
        'background',
        'resize',
        'move',
        'show',
        'hide',
        'nav-back',
        'error',
        'slim-arrow-right',
        'slim-arrow-left',
        'slim-arrow-down',
        'slim-arrow-up',
        'forward',
        'overflow',
        'value-help',
        'multiselect',
        'exitfullscreen',
        'sys-add',
        'sys-minus',
        'dropdown',
        'expand-group',
        'vertical-grip',
        'horizontal-grip',
        'sort-descending',
        'sort-ascending',
        'arrow-down',
        'legend',
        'collapse-group',
        'message-warning',
        'message-information',
        'message-success',
        'restart',
        'stop',
        'add-process',
        'cancel-maintenance',
        'activate',
        'resize-horizontal',
        'resize-vertical',
        'connected',
        'disconnected',
        'edit-outside',
        'key',
        'minimize',
        'back-to-top',
        'hello-world',
        'outbox',
        'donut-chart',
        'heatmap-chart',
        'horizontal-bullet-chart',
        'vertical-bullet-chart',
        'call',
        'download-from-cloud',
        'upload-to-cloud',
        'jam',
        'sap-ui5',
        'message-popup',
        'cloud',
        'horizontal-waterfall-chart',
        'vertical-waterfall-chart',
        'broken-link',
        'headset',
        'thumb-up',
        'thumb-down',
        'multiselect-all',
        'multiselect-none',
        'scissors',
        'sound',
        'sound-loud',
        'sound-off',
        'date-time',
        'user-settings',
        'key-user-settings',
        'developer-settings',
        'text-formatting',
        'bold-text',
        'italic-text',
        'underline-text',
        'text-align-justified',
        'text-align-left',
        'text-align-center',
        'text-align-right',
        'bullet-text',
        'numbered-text',
        'co',
        'ui-notifications',
        'bell',
        'cancel-share',
        'write-new-document',
        'write-new',
        'cancel',
        'screen-split-one',
        'screen-split-two',
        'screen-split-three',
        'customize',
        'user-edit',
        'source-code',
        'copy',
        'paste',
        'line-chart-time-axis',
        'clear-filter',
        'reset',
        'trend-up',
        'trend-down',
        'cursor',
        'add-document',
        'create-form',
        'resize-corner',
        'chevron-phase',
        'chevron-phase-2',
        'rhombus-milestone',
        'rhombus-milestone-2',
        'circle-task',
        'circle-task-2',
        'project-definition-triangle',
        'project-definition-triangle-2',
        'master-task-triangle',
        'master-task-triangle-2',
        'program-triangles',
        'program-triangles-2',
        'mirrored-task-circle',
        'mirrored-task-circle-2',
        'checklist-item',
        'checklist-item-2',
        'checklist',
        'checklist-2',
        'chart-table-view',
        'filter-analytics',
        'filter-facets',
        'filter-fields',
        'indent',
        'outdent',
        'heading-1',
        'heading-2',
        'heading-3',
        'decrease-line-height',
        'increase-line-height',
        'fx',
        'add-folder',
        'away',
        'busy',
        'appear-offline',
        'blur',
        'pixelate',
        'horizontal-combination-chart',
        'add-employee',
        'text-color',
        'browse-folder',
        'primary-key',
        'two-keys',
        'strikethrough',
        'text',
        'responsive',
        'desktop-mobile',
        'table-row',
        'table-column',
        'validate',
        'keyboard-and-mouse',
        'touch',
        'expand-all',
        'collapse-all',
        'combine',
        'split',
        'megamenu',
        'feedback',
        'information',
        's4hana',
        'translate',
        'clear-all',
        'command-line-interfaces',
        'icon-sum',
        'icon-qr-code',
        'space-navigation',
        'in-progress',
        'not-editable',
        'heart',
        'heart-2',
        'tri-state',
        'bookmark-2',
        'detail-less',
        'detail-more',
        'flag-2',
        'folder-2',
        'paint-bucket',
        'direction-arrows',
        'binary',
        'female',
        'male',
        'gender-male-and-female',
        'rotate',
        'biometric-thumb',
        'biometric-face',
        'people-connected',
        'select-appointments',
        'light-mode',
        'dark-mode',
        'time-off',
        'add-calendar',
        'currency',
        'bell-2',
        'accessibility',
        'high-priority',
        'da',
        'da-2',
        'ai',
        'in-progress-2',
        'unsynchronize',
        'verified',
        'walk-me'
    ];
}
