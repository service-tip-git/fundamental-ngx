import baseConfig from '../../../../../jest.config.base';

export default {
    ...baseConfig,
    displayName: 'platform-icon-tab-bar',
    preset: '../../../../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts', '../../../../../jest-extended-matchers.ts'],
    coverageDirectory: '../../../../../coverage/libs/platform/src/lib/icon-tab-bar',
};
