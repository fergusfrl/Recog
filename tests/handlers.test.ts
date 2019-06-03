import { createReactComponent, createTypescriptComponent } from '../src/handlers';

test('Should return a stateless component', () => {
    const result: string = createReactComponent('TestComponent', false);
    expect(result).not.toContain('useState');
});

test('Should return a stateful component', () => {
    const result: string = createReactComponent('TestComponent', true);
    expect(result).toContain('useState');
});

test('Should return a stateless typescript component', () => {
    const result: string = createTypescriptComponent('TestComponent', false);
    expect(result).not.toContain('useState');
});

test('Should return a stateful typescript component', () => {
    const result: string = createTypescriptComponent('TestComponent', true);
    expect(result).toContain('useState');
});
