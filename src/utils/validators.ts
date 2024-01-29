export const requiredField = (value: string) => {
    if (!value) return 'field is required'
    return undefined
}

const maxLength = (length: number) => {
    return (value: string) => {
        if (value && value.length > length) return `Must be ${length} characters or less`
        return undefined
    }
}
export const maxLength20 = maxLength(20)

export const email = (value: string) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address'
    return undefined
}