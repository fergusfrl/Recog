class PostContent {
    hasState: boolean;
    constructor(hasState: boolean) {
        this.hasState = hasState;
    }

    public getPostContent = () => !this.hasState ? ')' : `\t);
    }`;
}

export default PostContent;