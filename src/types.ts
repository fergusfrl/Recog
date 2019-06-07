import commander from 'commander';

export interface IComponentOptions {
    state?: boolean,
    typescript?: boolean,
    props?: boolean,
    importCss?: boolean
}

export interface IDirectoryOptions {
    jest?: boolean,
    css?: boolean
}

export interface InterfaceCLI extends commander.Command, IComponentOptions, IDirectoryOptions {
    ComponentName?: string,
    Path?: string
}