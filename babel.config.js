module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'cjs',
                loose: true,
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        ['transform-react-remove-prop-types', {
            mode: 'wrap',
            ignoreFilenames: ['node_modules'],
        }],
    ],
};
