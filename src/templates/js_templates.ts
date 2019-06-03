export const functional = (componentName: string): string => `
    import React from 'react';

    const ${componentName} = () => (
        <div>
            functional component
        </div>
    );

    export default ${componentName};
`;

export const functionalState = (componentName: string): string => `
    import React, { useState } from 'react';

    const ${componentName} = () => {
        const [state, setState] = useState({});
        return (
            <div>
                functional useState component
            </div>
        );
    };

    export default ${componentName};
`;
