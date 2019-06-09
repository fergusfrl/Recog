const path = require('path');
const exec = require('child_process').exec;
import * as fs from 'fs';

test('Should create jxs component', async () => {
    const result: any = await CLI('TestComponent', []);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.jsx')).toBe(true);
});

test('Should create tsx component', async () => {
    const result: any = await CLI('TestComponent', ['-t']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent.tsx')).toBe(true);
});

test('Should create jsx component in new folder', async () => {
    const result: any = await CLI('TestComponent', ['-f']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
});

test('Should create tsx component in new folder', async () => {
    const result: any = await CLI('TestComponent', ['-f', '-t']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.tsx')).toBe(true);
});

test('Should create jest test file with component', async () => {
    const result: any = await CLI('TestComponent', ['-j', '-f']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
    expect(fs.existsSync('./TestComponent/TestComponent.test.js')).toBe(true);
});

test('Should create css file with component', async () => {
    const result: any = await CLI('TestComponent', ['-c', '-f']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
    expect(fs.existsSync('./TestComponent/testcomponent.css')).toBe(true);
});

test('Should create jest test and css file with component', async () => {
    const result: any = await CLI('TestComponent', ['-j', '-c', '-f']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./TestComponent/TestComponent.jsx')).toBe(true);
    expect(fs.existsSync('./TestComponent/TestComponent.test.js')).toBe(true);
    expect(fs.existsSync('./TestComponent/testcomponent.css')).toBe(true);
});

test('Should create react component at directory provided', async () => {
    fs.mkdirSync('NewDirectory');
    const result: any = await CLI('TestComponent', ['-d NewDirectory']);
    expect(result.code).toBe(0);
    expect(fs.existsSync('./NewDirectory/TestComponent.jsx')).toBe(true);
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
        './TestComponent.tsx',
        'TestComponent/TestComponent.jsx',
        'TestComponent/TestComponent.tsx',
        'TestComponent/TestComponent.test.js',
        'TestComponent/testcomponent.css',
        'NewDirectory/TestComponent.jsx'
    ];

    const removeDirs = [
        'TestComponent',
        'NewDirectory'
    ];

    removeFiles.forEach(file => {
        fs.unlink(file, () => {});
    });

    removeDirs.forEach(dir => {
        fs.rmdir(dir, () => {});
    });
});