

export const required = (data) =>{
    if(data) return undefined
    return 'This field is required'
}

export const maxLength = (length) => (data) =>{
    if(data.length > length) return `Max length is ${length} symbols`
    return undefined
} // Замыкание

