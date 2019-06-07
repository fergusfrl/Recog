const componentType: string = ': React.FC';

class Props {
    hasProps: boolean;
    isTypescript: boolean;
    constructor(hasProps: boolean, isTypescript: boolean) {
        this.hasProps = hasProps;
        this.isTypescript = isTypescript;
    }

    getProps = (name: string) => (this.isTypescript ? componentType : '') + ' = (' + (!this.hasProps ? '' : ('props' + (this.isTypescript ? `: IProps${name}` : '')));
}

export default Props;