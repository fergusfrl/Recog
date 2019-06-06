import Imports from '../../src/generators/imports';

test('should generate additional imports', () => {
    const additionalImports: string[] = ['import Test from \'test\'', 'import TestTwo from \'test-two\''];
    const result: Imports = new Imports(false, additionalImports);

    expect(result.getImports()).toContain('import React from \'react\';');
    expect(result.getImports()).toContain('import Test from \'test\';');
    expect(result.getImports()).toContain('import TestTwo from \'test-two\';');
});

test('should generate stateful react import', () => {
    const result = new Imports(true, []);
    expect(result.getImports()).toContain('import React, { useState } from \'react\';');
});

test('should generate stateful react import with additional imports', () => {
    const additionalImports: string[] = ['import Test from \'test\'', 'import TestTwo from \'test-two\''];
    const result: Imports = new Imports(true, additionalImports);

    expect(result.getImports()).toContain('import React, { useState } from \'react\';');
    expect(result.getImports()).toContain('import Test from \'test\';');
    expect(result.getImports()).toContain('import TestTwo from \'test-two\';');
});