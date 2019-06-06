import PreContent from '../../src/generators/precontent';

const componentName: string = "TestComponent";

test('should generate pre-content', () => {
    const result: PreContent = new PreContent(false, false);
    expect(result.getPreContent(componentName)).toBe('(');
});

test('should generate pre-content despite being typed', () => {
    const result: PreContent = new PreContent(false, true);
    expect(result.getPreContent(componentName)).toBe('(');
});

test('should generate stateful pre-content', () => {
    const result: PreContent = new PreContent(true, false);
    expect(result.getPreContent(componentName)).toContain('const [state, setState] = useState({});');
    expect(result.getPreContent(componentName)).not.toContain(`<IState${componentName}>`);
});

test('should generate typed stateful pre-content', () => {
    const result: PreContent = new PreContent(true, true);
    expect(result.getPreContent(componentName)).toContain(`const [state, setState] = useState<IState${componentName}>({});`);
});

