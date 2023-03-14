type Key = string | number | symbol

interface Data {
    [propName: Key]: any
}

/**
 *
 */
export const mapEntries = (
    obj: Data | null | undefined,
    callback: (key: Key, value: any) => Data
) => {
    return Object.assign({}, ...Object.entries(obj ?? {}).map((arr) => callback(...arr)))
}
