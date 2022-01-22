import {calculator} from '../functions';

describe('Calculator', () => {
    it('1+2 => 3', () => {
        expect(calculator.add(1,2)).toBe(3);
    });
    it('2-1 => 1', () => {
        expect(calculator.subtract(2,1)).toBe(1);
    });
    it('2*2 => 4', () => {
        expect(calculator.multiply(2,2)).toBe(4); 
    });
    it('2/1 => 1', () => {
        expect(calculator.divide(2,1)).toBe(2);
    });
    it('0.1+0.2 ~= 0.3', () => {
        expect(calculator.add(0.1,0.2)).toBeCloseTo(0.3);
    });
});