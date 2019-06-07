import * as fs from 'fs';
import Imports from './generators/imports';
import Interface from './generators/interface';
import Props from './generators/props';
import PreContent from './generators/precontent';
import Content from './generators/content';
import PostContent from './generators/postcontent';
import { IComponentOptions, IDirectoryOptions } from './types';
import { jestTemplate, scssTemplate } from './templates';

/**
 * Handles options to generte string and create file
 * 
 * @param componentName 
 * @param path 
 * @param options 
 */
export const generateComponent = (componentName: string, path: string, options: IComponentOptions): void => {
    let { state, typescript, props, importScss }: IComponentOptions = options;
    state = state || false;
    typescript = typescript || false;
    props = props || false;
    importScss = importScss || false;

    const imports = new Imports(state, importScss ? [`import './${componentName.toLowerCase()}.scss'`] : []).getImports();
    const interf = new Interface(typescript, state, props).getInterface(componentName);
    const prop = new Props(props, typescript).getProps(componentName);
    const precontent = new PreContent(state, typescript).getPreContent(componentName);
    const content = new Content(state).getContent(componentName);
    const postContent = new PostContent(state).getPostContent();

    const component: string = generateComponentString(imports, interf, prop, precontent, content, postContent, componentName);

    writeToFile(typescript ? 'tsx' : 'jsx', path, componentName, component);
}

/**
 * Handles options to generte directory and create files
 * 
 * @param componentName 
 * @param path 
 * @param options 
 */
export const generateDirectory = (componentName: string, path: string, options: IDirectoryOptions): void => {
    let { jest, scss } = options;
    path = path + `/${componentName}`;
    jest = jest || false;
    scss = scss || false;

    fs.mkdir(path, { recursive: true }, (err) => {
        if (err) {
            console.log('Something went wrong:', err);
        } else {
            console.log(`${componentName} directory was successfully generated`);
            generateComponent(componentName, path, { importScss: scss });
            if (jest) writeToFile('test.js', path, componentName, jestTemplate(componentName));
            if (scss) writeToFile('scss', path, componentName.toLowerCase(), scssTemplate(componentName));
        }
    });
}

/**
 * Writes string to a jsx or tsx file
 * 
 * @param isTypescript 
 * @param path 
 * @param componentName 
 * @param component 
 */
const writeToFile = (extension: string, path: string, componentName: string, component: string) => {
    fs.writeFile(`${path}/${componentName}.${extension}`, component, (err) => {
        if (err) {
            console.log('Something went wrong:', err);
        } else {
            console.log(`${componentName}.${extension} was successfully created`);
        }
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
const generateComponentString = (imports: string, interf: string, props: string, preContent: string, content: string, postContent: string, componentName: string): string => `${imports}
${interf}
const ${componentName}${props} => ${preContent}
    ${content}
${postContent};

export default ${componentName};
`;
