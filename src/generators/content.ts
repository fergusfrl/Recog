class Content {
    hasState: boolean;
    constructor(hasState: boolean) {
        this.hasState = hasState;
    }

    public getContent = (name: string): string => {
        const content = `---<div className="${name}">
        ---${name}
    ---</div>`

        return content.split('---').join(this.hasState ? '\t' : '');
    }
}

export default Content;