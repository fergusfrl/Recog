import commander from 'commander';

export interface InterfaceOptions {
    state?: boolean,
    typescript?: boolean,
    props?: boolean
}

export interface InterfaceCLI extends commander.Command, InterfaceOptions {
    ComponentName?: string,
    Path?: string
}