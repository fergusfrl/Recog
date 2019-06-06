class Interface {
    isTypescript: boolean;
    hasState: boolean;
    hasProps: boolean;
    constructor(isTypescript: boolean, hasState: boolean, hasProps: boolean) {
        this.isTypescript = isTypescript;
        this.hasState = hasState;
        this.hasProps = hasProps;
    }

    public getInterface = (name: string) => !this.isTypescript ? '' : `
        ${!this.hasState ? '' : `
    interface IState${name} {
        // state
    }`}
        ${!this.hasProps ? '' : `
    interface IProps${name} {
        // props
    }`}
    `;

}

export default Interface;