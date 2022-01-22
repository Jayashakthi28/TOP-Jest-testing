import { ceaserCipher } from "../functions";

describe('Ceaser Cipher', () => {
    it('Attack at dawan => attack at dawan', () => {
        expect(ceaserCipher(`" Attack at dawan "`,0).encrypt()).toBe(`" attack at dawan "`);
    });
    it('a => f', () => {
        expect(ceaserCipher("a",5).encrypt()).toBe("f");
    });
    it('"tkikcrkudrs fscrxe nrkgkx " => "jayashakthi vishnu dhawan "', () => {
        expect(ceaserCipher(`"tkikcrkudrs fscrxe nrkgkx "`,10).decrypt()).toBe(`"jayashakthi vishnu dhawan "`);
    });
});