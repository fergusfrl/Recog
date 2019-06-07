class PreContent {
    hasState: boolean;
    isTypescript: boolean;
    constructor(hasState: boolean, isTypescript: boolean) {
        this.hasState = hasState;
        this.isTypescript = isTypescript;
    }

    public getPreContent = (name: string) => {
        if (!this.hasState) {
            return '(';
        }
        return `{
        const [state, setState] = useState${this.isTypescript ? `<IState${name}>` : ''}({});
        return (`
    }
}

export default PreContent;