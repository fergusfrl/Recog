class Interface {
    isTypescript: boolean;
    hasState: boolean;
    hasProps: boolean;
    constructor(isTypescript: boolean, hasState: boolean, hasProps: boolean) {
        this.isTypescript = isTypescript;
        this.hasState = hasState;
        this.hasProps = hasProps;
    }

    private generateInterface = (name: string, type: string): string => `interface I${type}${name} {
    // ${type}
}`;

    public getInterface = (name: string): string => {
        let result = '';
        if (!this.isTypescript) return result;

        if (this.hasProps) {
            result = this.generateInterface(name, 'Props');
        }

        if (this.hasState) {
            result = this.generateInterface(name, 'State');
        }

        if (this.hasProps && this.hasState) {
            result = this.generateInterface(name, 'Props') +
                '\n\n' +
                this.generateInterface(name, 'State');
        }

        return result;
    }

}

export default Interface;
