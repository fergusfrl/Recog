export const reactTemplate = (imports: string, interf: string, componentName: string, props: string, precontent: string, content: string, postContent: string): string => `${imports}
${interf}
const ${componentName}${props} => ${precontent}
    ${content}
${postContent};

export default ${componentName};
`

export const jestTemplate = (name: string): string => `import ${name} from './${name}';

test('should return a react component', () => {
    expect(true).toBe(true);
});
`;

export const cssTemplate = (name: string): string => `.${name.toLowerCase()} {
    /* color: red; */
}
`;