import { sayHello } from "../src/say-hello";

describe('sayHello', function(): void {
    it('should return hello dandi', function(): void {
        expect(sayHello('dandi')).toBe('Hello dandi');
    });
});