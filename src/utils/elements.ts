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

/**
 * compute distance between p1 and p2.
 *
 * @param p1 element.getBoundingClientRect()
 * @param p2 element.getBoundingClientRect()
 * @returns
 */
export const distance = (p1: DOMRect, p2: DOMRect) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

/**
 * check if overlaps between a and b.
 *
 * @param a element.getBoundingClientRect()
 * @param b element.getBoundingClientRect()
 * @returns
 */
export const overlaps = (a: DOMRect, b: DOMRect) => {
    return (a.left < b.right && b.left < a.right) || (a.top < b.bottom && b.top < a.bottom)
}

/**
 *
 * @params el target element
 */
export const isInFocus = (el: HTMLElement) => el === document.activeElement
