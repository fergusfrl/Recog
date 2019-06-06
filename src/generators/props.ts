class Props {
    hasProps: boolean;
    isTypescript: boolean;
    constructor(hasProps: boolean, isTypescript: boolean) {
        this.hasProps = hasProps;
        this.isTypescript = isTypescript;
    }

    getProps = (name: string) => !this.hasProps ? '' : `props${this.isTypescript ? `: IProps${name}` : ''}`;
}

export default Props;