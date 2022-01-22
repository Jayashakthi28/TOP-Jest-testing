import {reverseString} from '../functions'

describe('Reverse the string', () => {
    it('hi=>ih', () => {
        expect(reverseString("hi")).toBe("ih");
    });
});