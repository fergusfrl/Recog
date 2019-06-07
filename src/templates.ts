export const jestTemplate = (name: string): string => `import ${name} from './${name}';

test('should return a react component', () => {
    expect(true).toBe(true);
});
`;

export const cssTemplate = (name: string): string => `.${name.toLowerCase()} {
    // color: red;
}
`;