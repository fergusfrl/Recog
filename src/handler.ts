import * as fs from 'fs';
import * as chalk from 'chalk';
import Imports from './generators/imports';
import Interface from './generators/interface';
import Props from './generators/props';
import PreContent from './generators/precontent';
import Content from './generators/content';
import PostContent from './generators/postcontent';
import { IComponentInstatised } from './types';
import { jestTemplate, cssTemplate } from './templates';

export const handleOptions = (componentName: string, options: IComponentInstatised): void => {
    let location = options.dir;
    if (options.folder) {
        // make folder
        location = location + '/' + componentName;
        makeDirectory(location);
    }

    const componentContent = createComponentContent(componentName, options.state, options.props, options.typescript, options.css);

    // make react component file
    makeFile(location, componentContent, options.typescript ? `${componentName}.tsx` : `${componentName}.jsx`);

    if (options.jest) {
        // make jest test file
        makeFile(location, jestTemplate(componentName), `${componentName}.test.js`);
    }

    if (options.css) {
        // make css file
        makeFile(location, cssTemplate(componentName), `${componentName.toLowerCase()}.css`);
    }
}

const makeDirectory = async (location: string) => {
    await fs.mkdir(location, { recursive: true }, (err) => {
        if (err) {
            console.log(chalk.default.red("Something went wrong generating a folder:"));
            console.log(err);
        } else {
            console.log(chalk.default.green('New folder generated:', location));
        }
    });
}

const makeFile = (location: string, content: string, fileName: string): void => {
    const file = `${location}/${fileName}`
    fs.writeFile(file, content, (err) => {
        if (err) {
            console.log(chalk.default.red("Something went wrong generating file:", file));
            console.log(err);
        } else {
            console.log(chalk.default.green('New file generated:', file));
        }
    });
}

const createComponentContent = (componentName: string, state: boolean, props: boolean, typescript: boolean, css: boolean): string => {
    const imports = new Imports(state, css ? [`import './${componentName.toLowerCase()}.css'`] : []).getImports();
    const interf = new Interface(typescript, state, props).getInterface(componentName);
    const prop = new Props(props, typescript).getProps(componentName);
    const precontent = new PreContent(state, typescript).getPreContent(componentName);
    const content = new Content(state).getContent(componentName);
    const postContent = new PostContent(state).getPostContent();

   return`${imports}
${interf}
const ${componentName}${prop} => ${precontent}
    ${content}
${postContent};

export default ${componentName};
`;
}
