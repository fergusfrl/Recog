import commander from 'commander';

export interface IComponentOptional {
    dir?: string,
    state?: boolean,
    props?: boolean,
    typescript?: boolean,
    folder?: boolean,
    jest?: boolean,
    css?: boolean
}

export interface IComponentInstatised {
    dir: string,
    state: boolean,
    props: boolean,
    typescript: boolean,
    folder: boolean,
    jest: boolean,
    css: boolean
}

export interface InterfaceCLI extends commander.Command, IComponentOptional {
    ComponentName?: string
}