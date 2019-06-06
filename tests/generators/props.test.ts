import Props from '../../src/generators/props';

const componentName: string = 'TestComponent';

test('should not render props', () => {
    let result: Props = new Props(false, false);
    expect(result.getProps(componentName)).toBe('');

    result = new Props(false, true);
    expect(result.getProps(componentName)).toBe('');
});

test('should render props', () => {
    const result: Props = new Props(true, false);
    expect(result.getProps(componentName)).toBe('props');
});

test('should render typed props', () => {
    const result: Props = new Props(true, true);
    expect(result.getProps(componentName)).toBe('props: IPropsTestComponent');
});