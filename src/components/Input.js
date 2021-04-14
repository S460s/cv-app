import React from 'react'

function Input(props){
    const {paragraphText, type, placeholder, name, value, onChange} = props
    return(
        <label>
            <p>{paragraphText}</p>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                required
            />
        </label>
    )
}

export default Input