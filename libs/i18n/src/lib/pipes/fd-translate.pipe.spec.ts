import { Component } from '@angular/core';
import { FdLanguageKeyArgs } from '../models';
import { FdTranslatePipe } from './fd-translate.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DEFAULT_FD_TRANSLATIONS, provideTranslator, TranslationService } from "@fundamental-ngx/i18n";

@Component({
    standalone: true,
    template: `{{ translateKey | fdTranslate : parameters}}`,
    imports: [FdTranslatePipe]
})
class TestComponent {
    translateKey: string;
    parameters: FdLanguageKeyArgs;
}

describe('FdTranslate pipe', () => {
    let testComponentFixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let translationService: TranslationService;
    const content = () => testComponentFixture.elementRef.nativeElement.innerHTML;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [
                provideTranslator(
                    {
                        'en-US': {
                            'platformApprovalFlow.defaultWatchersLabel': 'Watchers',
                            'platformApprovalFlow.nodeMembersCount': '{count} members'
                        },
                        'de-DE': {
                            'platformApprovalFlow.defaultWatchersLabel': 'Beobachter',
                            'platformApprovalFlow.nodeMembersCount': '{count} Mitglieder'
                        }
                    },
                    'en-US',
                    {
                        'en-US': {
                            'platformApprovalFlow.someOtherKey': 'Some other value'
                        }
                    }
                ),
            ]
        });
        await TestBed.compileComponents();
        testComponentFixture = TestBed.createComponent(TestComponent);
        testComponent = testComponentFixture.componentInstance;
        translationService = TestBed.inject(TranslationService);
    });
    describe('pipe functionality', () => {
        it("should return value by key, if it's available", () => {
            testComponent.translateKey = 'platformApprovalFlow.defaultWatchersLabel';
            testComponentFixture.detectChanges();
            expect(content()).toBe('Watchers');
            testComponent.translateKey = 'platformApprovalFlow.nodeMembersCount';
            testComponent.parameters = { count: 10 };
            testComponentFixture.detectChanges();
            expect(content()).toBe('10 members');
        });

        it('should return key if value is not found', () => {
            expect(testComponent.translateKey = 'wrong').toBe('wrong');
        });

        it('should use patched values', () => {
            translationService.patchLocale({
                'platformApprovalFlow.defaultWatchersLabel': 'Watchers patched'
            })
            testComponent.translateKey = 'platformApprovalFlow.defaultWatchersLabel';
            testComponentFixture.detectChanges();
            expect(content()).toBe('Watchers patched');
        });

        it('should update value if locale is changed', () => {
            testComponent.translateKey = 'platformApprovalFlow.defaultWatchersLabel';
            testComponentFixture.detectChanges();
            expect(content()).toBe('Watchers');
            translationService.setLocale('de-DE');
            testComponentFixture.detectChanges();
            expect(content()).toBe('Beobachter');
        });

        it('should use patched values regardless of locale', () => {
            translationService.patchLocale({
                'platformApprovalFlow.defaultWatchersLabel': 'Watchers patched'
            })
            testComponent.translateKey = 'platformApprovalFlow.defaultWatchersLabel';
            testComponentFixture.detectChanges();
            expect(content()).toBe('Watchers patched');
            translationService.setLocale('de-DE');
            testComponentFixture.detectChanges();
            expect(content()).toBe('Watchers patched');
        });

        it('should work with function values', () => {
            const nodeMembersCount = jest.fn().mockImplementation((params) => `${params["count"]} function members`);
            translationService.patchLocale({
                'platformApprovalFlow.nodeMembersCount': nodeMembersCount
            })
            testComponent.translateKey = 'platformApprovalFlow.nodeMembersCount';
            testComponent.parameters = { count: 15 };
            testComponentFixture.detectChanges();
            expect(content()).toBe('15 function members');
            expect(nodeMembersCount).toHaveBeenCalledWith({ count: 15 });
            expect(nodeMembersCount).toHaveBeenCalledTimes(1);
        });

        it('should use default values if there is no translation', () => {
            testComponent.translateKey = 'platformApprovalFlow.someOtherKey';
            testComponentFixture.detectChanges();
            expect(content()).toBe('Some other value');
        });

        // it('should fall back to English dictionary if function value throws', () => {
        //     const customLang = {
        //         ...FD_LANGUAGE_ENGLISH,
        //         platformApprovalFlow: {
        //             ...FD_LANGUAGE_ENGLISH.platformApprovalFlow,
        //             nodeMembersCount: () => {
        //                 throw new Error('Oops');
        //             }
        //         }
        //     } as FdLanguage;
        //     const spy = jest.spyOn<any, any>(customLang.platformApprovalFlow, 'nodeMembersCount' as any);
        //     pipe = new FdTranslatePipe(destroyRef, changeDetectorRefMock);
        //     expect(pipe.transform('platformApprovalFlow.nodeMembersCount', { count: 15 })).toBe('15 members');
        //     expect(spy).toHaveBeenCalled();
        // });
        //     it('should fall back to English dictionary if value was not found', () => {
        //         const customLang = {
        //             ...FD_LANGUAGE_ENGLISH
        //         } as FdLanguage;
        //         delete (<any>customLang).platformApprovalFlow;
        //         pipe = new FdTranslatePipe(destroyRef, changeDetectorRefMock);
        //         expect(pipe.transform('platformApprovalFlow.nodeMembersCount', { count: 15 })).toBe('15 members');
        //     });
    });

    describe('pipe functionality with async values', () => {
        it('without params', () => {
            testComponent.translateKey = 'platformApprovalFlow.defaultWatchersLabel';
            expect(content()).toBe('');
            testComponentFixture.detectChanges();
            expect(content()).toBe('Watchers');
        });
        it('with params', () => {
            testComponent.translateKey = 'platformApprovalFlow.nodeMembersCount';
            testComponent.parameters = { count: 10 };
            expect(content()).toBe('');
            testComponentFixture.detectChanges();
            expect(content()).toBe('10 members');
        });
    });
});
