# RECOG
**Re**act **Co**mponent **G**eneration - A command line interface tool to generate React components on the fly.

<br/>

## Installation
```python
# checkout recog
git checkout https://github.com/fergusfrl/recog.git

# install dependencies
npm install -g

# transpile typescript
npm run build

# set symlink
npm link

# ready to go!
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
- **-p, --props**<br/>
Generate a React component with props

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
