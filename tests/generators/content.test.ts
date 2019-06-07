import Content from '../../src/generators/content';

const componentName: string = 'TestComponent';

test('should render content', () => {
    const result: Content = new Content(false);
    expect(result.getContent(componentName)).toBe(`<div className="testcomponent">
        TestComponent
    </div>`);
});

test('should render tabbed content', () => {
    const result: Content = new Content(true);
    expect(result.getContent(componentName)).toBe(`\t<div className="testcomponent">
        \tTestComponent
    \t</div>`);
});