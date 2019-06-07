#!/usr/bin/env node

import commander from 'commander';
import { InterfaceCLI } from './types';
import { generateComponent, generateDirectory } from './generator';
import { parse } from '@babel/core';

class CommandLineInterface {
    cli: InterfaceCLI;
    constructor(cli: InterfaceCLI) {
        this.cli = cli;
        this.cli.version('1.0.0');
    }

    public main(): void {
        // @ new
        // CLI for generating componnets
        this.cli
            .command('new <ComponentName> <Path>')
            .description('generate a new react component')
            .option('-s, --state', 'generate with state')
            .option('-t, --typescript', 'generate as typescript')
            .option('-p, --props', 'generate with props')
            .action((componentName, path, cmd) => {
                generateComponent(componentName, path, {
                    state: cmd.state,
                    typescript: cmd.typescript,
                    props: cmd.props
                });
            });

        // @ dir
        // CLI for generating directories
        this.cli
            .command('dir <ComponentName> <Path>')
            .description('generates a new directory with a react component')
            .option('-j, --jest', 'create with jest file')
            .option('-c, --scss', 'create with scss file')
            .action((componentName, path, cmd) => {
                generateDirectory(componentName, path, {
                    jest: cmd.jest,
                    scss: cmd.scss
                });
            });

        // parse arguments
        this.parse();
    }

    private parse(): void {
        this.cli.parse(process.argv);
    }
}

const cli = new CommandLineInterface(commander);
cli.main();
