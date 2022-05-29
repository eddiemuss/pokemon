export const KEYS = {
    hasVisitBefore: 'hasVisitBefore',
} as const

type Keys = keyof typeof KEYS

export const setItem = (key: Keys, value: string) => {
    localStorage.setItem(key, value)
}

export const getItem = (key: Keys) => localStorage.getItem(key)