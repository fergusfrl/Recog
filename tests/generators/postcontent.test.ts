import PostContent from '../../src/generators/postcontent';
import { removeTemplating } from '../helper';

test('should generate post-content', () => {
    const result: PostContent = new PostContent(false);
    expect(result.getPostContent()).toBe(')');
});

test('should generate stateful post-content', () => {
    const result: PostContent = new PostContent(true);
    expect(removeTemplating(result.getPostContent())).toContain(');}');
});