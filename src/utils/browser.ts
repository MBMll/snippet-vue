// copy to clipboard
export const copyToClipboard = (text: string) => navigator.clipboard?.writeText?.(text)

export const isDarkMode = () => window?.matchMedia('(prefers-color-scheme: dark)')?.matches

/**
 * 
 * @deprecated window.DocumentTouch
 */
export const touchSupported = () => {
    'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)
}

export const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ? 'Mobile'
        : 'Desktop'
