import Content from '../../src/generators/content';

const componentName: string = 'TestComponent';

test('should render content', () => {
    const result: Content = new Content(false);
    expect(result.getContent(componentName)).toBe(`<div className="${componentName}">
        ${componentName}
    </div>`);
});

test('should render tabbed contend', () => {
    const result: Content = new Content(true);
    expect(result.getContent(componentName)).toBe(`\t<div className="${componentName}">
        \t${componentName}
    \t</div>`);
});