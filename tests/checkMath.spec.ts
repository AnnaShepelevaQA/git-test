import { expect } from 'chai';
import { Calculator } from '../src/calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    // 1. Тест на сложение
    it('should return 8 for 5 + 3', () => {
        const result = calculator.add(5, 3);
        expect(result).to.equal(8);
    });

    // 2. Тест на вычитание
    it('should return 6 for 10 - 4', () => {
        const result = calculator.subtract(10, 4);
        expect(result).to.equal(6);
    });

    // 3. Тест на умножение
    it('should return 21 for 7 * 3', () => {
        const result = calculator.multiply(7, 3);
        expect(result).to.equal(21);
    });

    // 4. Тест на деление (включая ошибку деления на ноль)
    describe('divide', () => {
        it('should return 5 for 15 / 3', () => {
            const result = calculator.divide(15, 3);
            expect(result).to.equal(5);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).to.throw('Деление на ноль невозможно');
        });
    });

    // 5. Тест на остаток от деления
    describe('modulus', () => {
        it('should return 1 for 10 / 3', () => {
            const result = calculator.modulus(10, 3);
            expect(result).to.equal(1);
        });

        it('should throw an error when modulus by zero', () => {
            expect(() => calculator.modulus(10, 0)).to.throw('Деление на ноль невозможно');
        });
    });
});