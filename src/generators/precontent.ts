class PreContent {
    hasState: boolean;
    isTypescript: boolean;
    constructor(hasState: boolean, isTypescript: boolean) {
        this.hasState = hasState;
        this.isTypescript = isTypescript;
    }

    public getPreContent = (name: string) => !this.hasState ? '(' : `{
        const [state, setState] = useState${this.isTypescript ? `<IState${name}>` : ''}({});
        return (`;
}

export default PreContent;