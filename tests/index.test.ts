const path = require('path');
const exec = require('child_process').exec;
import * as fs from 'fs';

// new command
test('Should create component', async () => {
    const result: any = await CLI('new TestComponent ./', []);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.jsx')).toBe(true);
});

test('Should create typescript component', async () => {
    const result: any = await CLI('new TestComponent ./', ['-t']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.tsx')).toBe(true);
});

test('Should create stateful component', async () => {
    const result: any = await CLI('new TestComponent ./', ['-s']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.jsx')).toBe(true);
});

test('Should create stateful typescript component', async () => {
    const result: any = await CLI('new TestComponent ./', ['-t -s']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.tsx')).toBe(true);
});

// dir command
test('Should create a new folder', async () => {
    const result: any = await CLI('dir TestComponent ./', []);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
    expect(fs.existsSync('./TestComponent/TestComponent.test.js')).toBe(false);
    expect(fs.existsSync('./TestComponent/testcomponent.css')).toBe(false);
});

test('Should create a new folder with a jest file', async () => {
    const result: any = await CLI('dir TestComponent ./', ['-j']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
    expect(fs.existsSync('./TestComponent/TestComponent.test.js')).toBe(true);
    expect(fs.existsSync('./TestComponent/testcomponent.css')).toBe(false);
});

test('Should create a new folder with a css file', async () => {
    const result: any = await CLI('dir TestComponent ./', ['-c']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
    expect(fs.existsSync('./TestComponent/TestComponent.test.js')).toBe(false);
    expect(fs.existsSync('./TestComponent/testcomponent.css')).toBe(false);
});

test('Should create a new folder with a jest file and a css file', async () => {
    const result: any = await CLI('dir TestComponent ./', ['-j', '-c']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
    expect(fs.existsSync('./TestComponent/TestComponent.test.js')).toBe(true);
    expect(fs.existsSync('./TestComponent/testcomponent.css')).toBe(false);
});

const CLI = (command: string, args: string[]) => {
    return new Promise(resolve => {
        exec(
            `node ${path.resolve('./dist/src/index.js')} ${command} ${args.join(' ')}`,
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
    const removeFiles = [
        './TestComponent.jsx',
        'TestComponent.tsx',
        'TestComponent/TestComponent.jsx',
        'TestComponent/TestComponent.test.js',
        'TestComponent/testcomponent.scss'
    ];

    removeFiles.forEach(file => {
        fs.unlink(file, () => {});
    });

    fs.rmdir('TestComponent', () => {});
});