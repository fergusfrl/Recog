# RECOG
**Re**act **Co**mponent **G**eneration - A command line interface tool to generate React components on the fly.

<br/>

## Installation
### npm
```bash
# coming soon...
```

### local
```bash
# checkout recog
git checkout https://github.com/fergusfrl/recog.git

# install dependencies
npm install

# transpile typescript
npm run build

# set symlink
npm link

# ready to go!
```

<br/>

## Usage
### Component
```bash
recog <ComponentName> [options]
```
options:
- **-d, --dir**<br/>
Specify a directory to generate the component.<br/>
_Default Value_: current working directory (CWD), "./"
- **-s, --state**<br/>
Generates a new stateful React component.
- **-t, --typescript**<br/>
Generates a new Typescript React component.
- **-p, --props**<br/>
Generate a React component with props.
- **-f, --folder**<br/>
Generates a new Folder which will contain the component.<br/>
Useful in conjunction "--jest" and "-css" commands.
- **-j, --jest**<br/>
Generates a new jest test file for the component.
- **-c, --css**<br/>
Generates a new css file for the component.
<br/>
<br/>

## Examples
### Generate Simple Component
#### Command
```bash
recog Button
```
#### Result
```javascript
/* ./Button.jsx */

import React from 'react';

const Button = () => (
    <div className="button">
        Button
    </div>
);

export default Button;
```

### Generate Complex Component
#### Comand
```bash
$ recog Button -d ./components -s -t -p
```
#### Result
```javascript
/* ./componenst/Button.tsx */

import React, { useState } from 'react';

interface IStateButton {
    // state interface
}

interface IPropsButton {
    // props interface
}

const Button: React.FC = (props: IPropsButton) => {
    const [state, setState] = useState<IStateButton>({});
    return (
        <div>
            Button
        </div>
    );
};

export default Button;
```

### Generate Additional Files
#### Command
```bash
$ recog Button -f -j -c
```
#### Result
```
|_<current working directory>
    |_ Button
        |_ Button.jsx
        |_ Button.test.js
        |_ button.css
```
