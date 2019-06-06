const path = require('path');
const exec = require('child_process').exec;
import * as fs from 'fs';

test('Should create component', async () => {
    const result: any = await CLI([]);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.jsx')).toBe(true);
});

test('Should create typescript component', async () => {
    const result: any = await CLI(['-t']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.tsx')).toBe(true);
});

test('Should create stateful component', async () => {
    const result: any = await CLI(['-s']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.jsx')).toBe(true);
});

test('Should create stateful typescript component', async () => {
    const result: any = await CLI(['-t -s']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.tsx')).toBe(true);
});

const CLI = (args: string[]) => {
    return new Promise(resolve => {
        exec(
            `node ${path.resolve('./dist/src/index.js')} new TestComponent ./ ${args.join(' ')}`,
            './tests',
            (error: any, stdout: string, stderr: string) => resolve({
                error,
                stdout,
                stderr,
                code: error && error.code ? error.code : 0
            })
        );
    });
};

afterEach(() => {
    fs.unlink('./TestComponent.jsx', () => {});
    fs.unlink('./TestComponent.tsx', () => {});
});