# RECOG
**Re**act **Co**mponent **G**eneration - A command line interface tool to generate React components on the fly.

<br/>

## Installation
```bash
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
```bash
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
```bash
$ recog new TestComponent ./components -s -t -p
```
```javascript
/* TestComponent.tsx */

import React, { useState } from 'react';

interface IStateTestComponent {
    // state interface
}

interface IPropsTestComponent {
    // props interface
}

const TestComponent: React.FC = (props: IPropsTestComponent) => {
    const [state, setState] = useState<IStateTestComponent>({});
    return (
        <div>
            TestComponent
        </div>
    );
};

export default TestComponent;
```
