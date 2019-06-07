class Interface {
    isTypescript: boolean;
    hasState: boolean;
    hasProps: boolean;
    constructor(isTypescript: boolean, hasState: boolean, hasProps: boolean) {
        this.isTypescript = isTypescript;
        this.hasState = hasState;
        this.hasProps = hasProps;
    }

    private generateInterface = (name: string, type: string): string => {
        return `interface I${type}${name} {
    // ${type}
}`
    }

    public getInterface = (name: string): string => {
        let result = '';
        if (!this.isTypescript) return result;

        if (this.hasProps) {
            result = this.generateInterface(name, 'Props');
        }
        if (this.hasState) {
            result = result + this.hasProps ? '\n' : '';
            result = result + this.generateInterface(name, 'State');
        }

        return result;
    }

}

export default Interface;
