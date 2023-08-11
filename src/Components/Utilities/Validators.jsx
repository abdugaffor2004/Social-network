

export const required = (data) =>{
    if(data) return undefined
    return 'This field is required'
}

export const maxLength = (length) => (data) =>{
    if(data.length > length) return `Max length is ${length} symbols`
    return undefined
} // Замыкание

export const maxLength10 = () =>{
    maxLength(10)
} // По другому не получается, браузер ругается и не показывает страницу если вызвать maxLength(10) в NewPostForm. Это все произошло после того как я убрал Strict.Mode