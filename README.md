# RECOG
**Re**act **Co**mponent **G**eneration - A command line interface tool to generate React components on the fly.

<br/>

## Installation
```
$ npm install -g recog
```

<br/>

## Usage
```
recog new <ComponentName> <DirectoryPath> [options]
```
options:
- **-s, --state**<br/>
Generates a new stateful React component
- **-t, --typescript**<br/>
Generates a new Typescript React component

<br/>

## Examples
### Basic Component
```
$ recog new TestComponent ./
```

### Stateful Component
```
$ recog new TestComponent ./ -s
```

### Typescript Component
```
$ recog new TestComponent ./ -s -t
```
