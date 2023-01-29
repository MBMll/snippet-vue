export const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`

export const shuffle = (arr: Array<any>) => arr.sort(() => Math.random() - 0.5)

// copy to clipboard
export const copyToClipboard = (text: string) => navigator.clipboard?.writeText?.(text)

export const isDarkMode = () => window?.matchMedia('(prefers-color-scheme: dark)')?.matches

export const scrollToTop = (element: HTMLElement) =>
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })

export const scrollToBottom = (element: HTMLElement) =>
    element.scrollIntoView({ behavior: 'smooth', block: 'end' })

/**
 * observe the scroll position.
 * @param element  element to detect scroll position
 * @param callback  executed when scroll position
 */
export const observeInScreen = (element: HTMLElement, callback: Function) => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // `entry.target` is the dom element
                    console.log(`${entry.target.id} is visible`)
                    callback(entry.target)
                }
            })
        },
        {
            threshold: 1.0
        }
    )
    observer.observe(element)
}

export const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop'

/**
 * wait some time before continuing.
 *
 * @param ms wait time in milliseconds
 * @returns  promise
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
