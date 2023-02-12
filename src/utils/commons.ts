export const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

export const shuffle = (arr: Array<any>) => arr.sort(() => Math.random() - 0.5)

/**
 * wait some time before continuing.
 *
 * @param ms wait time in milliseconds
 * @returns  promise
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const isEmpty = (obj: any) => {
    return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
}

/**
 * remove the duplicates.
 *
 * @params arr the target
 * @returns the arr without duplicate value
 */
export const deduplicate = (arr: Array<any>) => Array.from(new Set(arr))
