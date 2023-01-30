import { debounce } from 'lodash'

export const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

export const shuffle = (arr: Array<any>) => arr.sort(() => Math.random() - 0.5)

/**
 * wait some time before continuing.
 *
 * @param ms wait time in milliseconds
 * @returns  promise
 */
export const wait = (ms: number) => new Promise((resolve: Function) => setTimeout(resolve, ms))

export const download = debounce((data: Blob | MediaSource, fileName: string) => {
    // Browser Compatible
    const download_URL = (window.URL || window.webkitURL).createObjectURL(data)

    // Create a tag, simulate click to download
    const a_link = document.createElement('a')
    a_link.href = download_URL
    // Use the download attribute of the a tag to specify the file name
    a_link.download = fileName
    document.body.appendChild(a_link)
    a_link.click()

    setTimeout(function () {
        // Remove temporary file paths in memory and a tags created for download
        URL.revokeObjectURL(download_URL)
        a_link.remove()
    }, 1000)
})

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
