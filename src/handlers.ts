import { InterfaceOptions } from './types';
import * as fs from 'fs';
import { functional as js_functional, functionalState as js_functionalState } from './templates/js_templates';
import { functional as ts_functional, functionalState as ts_functionalState } from './templates/ts_templates';

export const createComponent = (componentName: string, path: string, options: InterfaceOptions): void => {
    let component: string = "";

    if (options.typescript) {
        component = createTypescriptComponent(componentName, options.state);
    } else {
        component = createReactComponent(componentName, options.state);
    }
    
    fs.writeFile(`${path}/${componentName}.${options.typescript ? 'tsx' : 'jsx'}`, component, () => {
        console.log(`${componentName} Generated`);
    });
}

export const createTypescriptComponent = (componentName: string, stateful?: boolean): string => {
    return stateful ? ts_functionalState(componentName) : ts_functional(componentName);
}

export const createReactComponent = (componentName: string, stateful?: boolean) => {
    return stateful ? js_functionalState(componentName) : js_functional(componentName);
}
