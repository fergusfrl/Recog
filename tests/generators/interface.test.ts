import Interface from '../../src/generators/Interface';

const componentName: string = "TestComponent"

test('should not render interface without typescript', () => {
    const result: Interface = new Interface(false, false, false);
    expect(result.getInterface(componentName)).toBe('');
});

test('should not render interfect without props or state', () => {
    const result: Interface = new Interface(true, false, false);
    expect(result.getInterface(componentName)).toBe('');
});

test('should generate state interface', () => {
    const result: Interface = new Interface(true, true, false);
    expect(result.getInterface(componentName)).toContain(`IState${componentName}`);
    expect(result.getInterface(componentName)).not.toContain(`IProps${componentName}`)
});

test('should generate props interface', () => {
    const result: Interface = new Interface(true, false, true);
    expect(result.getInterface(componentName)).toContain(`IProps${componentName}`);
    expect(result.getInterface(componentName)).not.toContain(`IState${componentName}`)
});

test('should generate state and props interface', () => {
    const result: Interface = new Interface(true, true, true);
    expect(result.getInterface(componentName)).toContain(`IProps${componentName}`);
    expect(result.getInterface(componentName)).toContain(`IState${componentName}`)
});
