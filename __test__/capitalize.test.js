import {captitalize} from '../functions'


describe('Captialize Function', () => {
    it('hEllo => HEllo', () => {
        expect(captitalize("hEllo")).toBe("HEllo");
    });
});
