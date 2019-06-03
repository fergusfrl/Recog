export const functional = (componentName: string): string => `
    import * as React from 'react';

    const ${componentName}: React.FC = () => (
        <div>
            functional component
        </div>
    );

    export default ${componentName};
`;

export const functionalState = (componentName: string): string => `
    import * as React from 'react';

    const ${componentName}: React.FC = () => {
        const [state, setState] = useState({});
        return(
            <div>
                functional useState component
            </div>
        );
    };

    export default ${componentName};
`;
