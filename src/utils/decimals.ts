import Decimal from 'decimal.js'

export const abs = (x: number | string): number => Number(Decimal.abs(x))
export const acos = (x: number | string): number => Number(Decimal.acos(x))
export const acosh = (x: number | string): number => Number(Decimal.acosh(x)) // ES6
export const add = (x: number | string, y: number | string): number => Number(Decimal.add(x, y)) // plus +
export const asin = (x: number | string): number => Number(Decimal.asin(x))
export const asinh = (x: number | string): number => Number(Decimal.asinh(x)) // ES6
export const atan = (x: number | string): number => Number(Decimal.atan(x))
export const atanh = (x: number | string): number => Number(Decimal.atanh(x)) // ES6
export const atan2 = (x: number | string, y: number | string): number => Number(Decimal.atan2(x, y))
export const cbrt = (x: number | string): number => Number(Decimal.cbrt(x)) // ES6
export const ceil = (x: number | string): number => Number(Decimal.ceil(x))
export const clamp = (x: number | string, min: number | string, max: number | string): number =>
    Number(Decimal.clamp(x, min, max))
export const cos = (x: number | string): number => Number(Decimal.cos(x))
export const cosh = (x: number | string): number => Number(Decimal.cosh(x)) // ES6
export const div = (x: number | string, y: number | string): number => Number(Decimal.div(x, y)) // divide /
export const exp = (x: number | string): number => Number(Decimal.exp(x))
export const eq = (x?: number | string, y?: number | string): boolean =>
    x === y || (isDecimal(x) && isDecimal(y) && new Decimal(x).eq(new Decimal(y)))
export const floor = (x: number | string): number => Number(Decimal.floor(x))
export const hypot = (x: number | string, y: number | string): number => Number(Decimal.hypot(x, y)) // ES6
export const ln = (x: number | string): number => Number(Decimal.ln(x))
export const log = (x: number | string, y: number | string): number => Number(Decimal.log(x, y))
export const log10 = (x: number | string): number => Number(Decimal.log10(x)) // ES6
export const log2 = (x: number | string): number => Number(Decimal.log2(x)) // ES6
export const max = (x: number | string, y: number | string): number => Number(Decimal.max(x, y))
export const min = (x: number | string, y: number | string): number => Number(Decimal.min(x, y))
export const mod = (x: number | string, y: number | string): number => Number(Decimal.mod(x, y))
export const mul = (x: number | string, y: number | string): number => Number(Decimal.mul(x, y)) // multiple *
export const pow = (x: number | string, y: number | string): number => Number(Decimal.pow(x, y))
export const random = (x: number | string): number => Number(Decimal.random(Number(x)))
export const round = (x: number | string): number => Number(Decimal.round(x))
export const sign = (x: number | string): number => Number(Decimal.sign(x)) // ES6
export const sin = (x: number | string): number => Number(Decimal.sin(x))
export const sinh = (x: number | string): number => Number(Decimal.sinh(x)) // ES6
export const sqrt = (x: number | string): number => Number(Decimal.sqrt(x))
export const sub = (x: number | string, y: number | string): number => Number(Decimal.sub(x, y)) // reduce -
export const sum = (x: number | string, y: number | string): number => Number(Decimal.sum(x, y))
export const tan = (x: number | string): number => Number(Decimal.tan(x))
export const tanh = (x: number | string): number => Number(Decimal.tanh(x)) // ES6
export const trunc = (x: number | string): number => Number(Decimal.trunc(x)) // ES6

export const parse = (x?: string): string | undefined => {
    if (!x) return x
    return x.replaceAll(',', '')
}
export const format = (x?: number | string, defaultV?: string): string | null | undefined => {
    if (!x && typeof x !== 'number') {
        return defaultV === undefined ? x : defaultV
    }
    const decimal = new Decimal(x)
    const d = Number(decimal)
    let left = (d > 0 ? Math.floor(d) : Math.ceil(d)).toLocaleString()
    const strs = decimal.toFixed().split('.')
    if (strs.length > 1) {
        left += '.' + strs[1]
    }
    return left
}
/**
 * such as: range(2.32,3.32,10) => [2.32, 2.42, 2.52, 2.62, 2.72, 2.82, 2.92, 3.02, 3.12, 3.22, 3.32]
 */
export const range = (from: number | string, to: number | string, steps: number) => {
    if (steps > 0) {
        const stepL = new Decimal(to).sub(from).div(steps)
        const result = Array(steps)
        for (let i = 0; i < steps; i++) {
            result[i] = Number(new Decimal(stepL).mul(i).add(from))
        }
        // result.splice(result.length - 1, 1, Number(to)) // clear
        // result.push(Number(to))
        return result
    }
    return [Number(from)]
}

export const isDecimal = (x?: any): boolean => (x || x === 0) && !isNaN(x)
