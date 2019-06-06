class Imports {
    hasState: boolean;
    additionalImports: string[]
    constructor(hasState: boolean, additionalImports: string[]) {
        this.hasState = hasState;
        this.additionalImports = additionalImports;
    }

    public getImports = () => `import React${this.hasState ? ', { useState }' : ''} from 'react';
    ${this.additionalImports.length > 0 ? this.additionalImports.map(line => `${line};`).join('\r\n') : ''}`;
}

export default Imports;