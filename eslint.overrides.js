module.exports = [
    {
        files: ['*.ts'],
        rules: {
            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        'rxjs/Rx',
                        {
                            name: 'lodash',
                            message: 'Use "lodash-es" package instead'
                        },
                        {
                            name: 'lodash-es',
                            importNames: ['isEqual'],
                            message: 'Use "fast-deep-equal" package instead'
                        },
                        {
                            name: '@fundamental-ngx/platform',
                            message: 'Use imports from nested packages instead'
                        },
                        {
                            name: '@fundamental-ngx/core',
                            message: 'Use imports from nested packages instead'
                        },
                        {
                            name: '@fundamental-ngx/cdk',
                            message: 'Use imports from nested packages instead'
                        }
                    ]
                }
            ],
            '@typescript-eslint/no-non-null-assertion': 'off'
        }
    }
];
