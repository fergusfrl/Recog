class Props {
    hasProps: boolean;
    isTypescript: boolean;
    constructor(hasProps: boolean, isTypescript: boolean) {
        this.hasProps = hasProps;
        this.isTypescript = isTypescript;
    }

    getProps = (name: string) => {
        if (this.isTypescript) {
            return `:React.FC${this.hasProps ? `<IProps${name}> = (props: IProps${name})` : ' = ()'}`;
        }
        return ` = (${this.hasProps ? 'props' : ''})`;
    }
}

export default Props;