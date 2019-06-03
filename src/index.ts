#!/usr/bin/env node

import commander from 'commander';
import { InterfaceCLI } from './types';
import { createReactComponent } from './handlers';

class Startup {
    cli: InterfaceCLI;
    constructor(cli: InterfaceCLI) {
        this.cli = cli;
        this.cli.version('1.0.0');
    }

    public main(): void {
        this.cli
            .command('new <ComponentName> <Path>')
            .description('generate a new react component')
            .option('-s, --state', 'generate with state')
            .option('-t, --typescript', 'generate as typescript')
            .action(function(componentName, path, cmd) {
                createReactComponent(componentName, path, {
                    state: cmd.state || false,
                    typescript: cmd.typescript || false
                });
            });
    }

    public parse(): void {
        this.cli.parse(process.argv);
    }
}

const cli = new Startup(commander);
cli.main();
cli.parse();
