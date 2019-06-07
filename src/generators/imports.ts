class Imports {
    hasState: boolean;
    additionalImports: string[]
    constructor(hasState: boolean, additionalImports: string[]) {
        this.hasState = hasState;
        this.additionalImports = additionalImports;
    }

    public getImports = () => {
        let result = `import React${this.hasState ? ', { useState }' : ''} from 'react';`;
        if (this.additionalImports.length > 0) {
            result = result + this.additionalImports.map(imp => `\n${imp};`).join('');
        }
        return result;
    };
}

export default Imports;