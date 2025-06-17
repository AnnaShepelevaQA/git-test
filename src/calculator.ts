export class Calculator {
    // Сложение
    add(a: number, b: number): number {
        return a + b;
    }

    // Вычитание
    subtract(a: number, b: number): number {
        return a - b;
    }

    // Умножение
    multiply(a: number, b: number): number {
        return a * b;
    }

    // Деление
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно");
        }
        return a / b;
    }

    // Остаток от деления
    modulus(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно");
        }
        return a % b;
    }
}