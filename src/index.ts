#!/usr/bin/env node

import commander from 'commander';
import { InterfaceCLI, IComponentInstatised } from './types';
import { handleOptions } from './handler';

class CommandLineInterface {
    cli: InterfaceCLI;
    constructor(cli: InterfaceCLI) {
        this.cli = cli;
        this.cli.version('1.0.0');
    }

    public main(): void {
        this.cli
            .description('generate a new react component')
            .option('-d, --dir [dir]', 'pecify which directory the component will be generated - default: current working directory')
            .option('-s, --state', 'generate component with state')
            .option('-p, --props', 'generate component with props')
            .option('-t, --typescript', 'generate component as typescript')
            .option('-f, --folder', 'generate component in a new folder')
            .option('-j, --jest', 'generate a corrosponding jest test file')
            .option('-c, --css', 'generate a corrosponding css file')
            .action((componentName, {
                // default input values
                dir="./",
                state=false,
                props=false,
                typescript=false,
                folder=false,
                jest=false,
                css=false
            }: IComponentInstatised) => {
                handleOptions(componentName, { dir, state, props, typescript, folder, jest, css });
            });

        this.parse();
    }

    private parse(): void {
        this.cli.parse(process.argv);
    }
}

const cli = new CommandLineInterface(commander);
cli.main();
