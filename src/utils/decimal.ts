import Decimal from 'decimal.js'

export const abs = (x: number | string): number => Number(Decimal.abs(x))
export const acos = (x: number | string): number => Number(Decimal.acos(x))
export const acosh = (x: number | string): number => Number(Decimal.acosh(x)) // ES6
export const add = (x: number | string, y: number | string): number => Number(Decimal.add(x, y))
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
export const div = (x: number | string, y: number | string): number => Number(Decimal.div(x, y))
export const exp = (x: number | string): number => Number(Decimal.exp(x))
export const floor = (x: number | string): number => Number(Decimal.floor(x))
export const hypot = (x: number | string, y: number | string): number => Number(Decimal.hypot(x, y)) // ES6
export const ln = (x: number | string): number => Number(Decimal.ln(x))
export const log = (x: number | string, y: number | string): number => Number(Decimal.log(x, y))
export const log10 = (x: number | string): number => Number(Decimal.log10(x)) // ES6
export const log2 = (x: number | string): number => Number(Decimal.log2(x)) // ES6
export const max = (x: number | string, y: number | string): number => Number(Decimal.max(x, y))
export const min = (x: number | string, y: number | string): number => Number(Decimal.min(x, y))
export const mod = (x: number | string, y: number | string): number => Number(Decimal.mod(x, y))
export const mul = (x: number | string, y: number | string): number => Number(Decimal.mul(x, y))
export const pow = (x: number | string, y: number | string): number => Number(Decimal.pow(x, y))
export const random = (x: number | string): number => Number(Decimal.random(Number(x)))
export const round = (x: number | string): number => Number(Decimal.round(x))
export const sign = (x: number | string): number => Number(Decimal.sign(x)) // ES6
export const sin = (x: number | string): number => Number(Decimal.sin(x))
export const sinh = (x: number | string): number => Number(Decimal.sinh(x)) // ES6
export const sqrt = (x: number | string): number => Number(Decimal.sqrt(x))
export const sub = (x: number | string, y: number | string): number => Number(Decimal.sub(x, y))
export const sum = (x: number | string, y: number | string): number => Number(Decimal.sum(x, y))
export const tan = (x: number | string): number => Number(Decimal.tan(x))
export const tanh = (x: number | string): number => Number(Decimal.tanh(x)) // ES6
export const trunc = (x: number | string): number => Number(Decimal.trunc(x)) // ES6
