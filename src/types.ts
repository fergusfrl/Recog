import commander from 'commander';

export interface IComponentOptions {
    state?: boolean,
    typescript?: boolean,
    props?: boolean
}

export interface IDirectoryOptions {
    jest?: boolean,
    scss?: boolean
}

export interface InterfaceCLI extends commander.Command, IComponentOptions, IDirectoryOptions {
    ComponentName?: string,
    Path?: string
}