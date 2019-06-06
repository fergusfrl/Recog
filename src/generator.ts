import * as fs from 'fs';
import Imports from './generators/imports';
import Interface from './generators/interface';
import Props from './generators/props';
import PreContent from './generators/precontent';
import PostContent from './generators/postcontent';
import { InterfaceOptions } from './types';

/**
 * Handles options to generte string and create file
 * 
 * @param componentName 
 * @param path 
 * @param options 
 */
export const generateComponent = (componentName: string, path: string, options: InterfaceOptions): void => {
    let { state, typescript, props }: InterfaceOptions = options;
    state = state || false;
    typescript = typescript || false;
    props = props || false;

    const imports = new Imports(state, []).getImports();
    const interf = new Interface(typescript, state, props).getInterface(componentName);
    const prop = new Props(props, typescript).getProps(componentName);
    const precontent = new PreContent(state, typescript).getPreContent(componentName);
    const postContent = new PostContent(state).getPostContent();

    const component: string = generateString(imports, interf, prop, precontent, postContent, componentName);

    writeToFile(typescript, path, componentName, component);
}

/**
 * Writes string to a jsx or tsx file
 * 
 * @param isTypescript 
 * @param path 
 * @param componentName 
 * @param component 
 */
const writeToFile = (isTypescript: boolean, path: string, componentName: string, component: string) => {
    fs.writeFile(`${path}/${componentName}.${isTypescript ? 'tsx': 'jsx'}`, component, () => {
        console.log(`${componentName} Generated`);
    });
}

/**
 * Create a React Component string
 * 
 * @param imports 
 * @param interf 
 * @param props 
 * @param preContent 
 * @param postContent 
 * @param componentName 
 */
const generateString = (imports: string, interf: string, props: string, preContent: string, postContent: string, componentName: string): string => `
    ${imports}
    ${interf}
    const ${componentName} = (${props}) => ${preContent}
        <div>
            ${componentName}
        </div>
    ${postContent};

    export default ${componentName};
`;
