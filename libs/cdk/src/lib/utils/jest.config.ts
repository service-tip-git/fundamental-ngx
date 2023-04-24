import baseConfig from '../../../../../jest.config.base';

export default {
    ...baseConfig,
    displayName: 'cdk-utils',
    preset: '../../../../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts', '../../../../../jest-extended-matchers.ts'],
    coverageDirectory: '../../../../../coverage/libs/cdk/src/lib/utils',
};
