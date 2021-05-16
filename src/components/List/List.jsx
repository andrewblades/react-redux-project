import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function List() {

    // all the fields
    const state = useSelector((state) => state.allState)

    // the input value variable
    const [inputValue, setInputValue] = useState()

    // const handleError = (inputValue, index) => {

    //     if (inputValue === '' || inputValue === undefined) {
    //         return ''
    //     }
    //     if (parseInt(inputValue) < parseInt(state.fields[index].conditions[0])) {

    //         return 'Numar prea mic'
    //     }
    //     if (parseInt(inputValue) > parseInt(state.fields[index].conditions[1])) {

    //         return 'Numar prea mare'
    //     }
    //     return ''

    // }

    return (
        <div>

            {state.fields.map((field, index) => {
                return (
                    <div>
                        {field.fieldType === 'number' ?
                            <div key={index}>
                                <label>{field.fieldName} min={field.conditions[0]}, max={field.conditions[1]}</label>
                                <input type="text" min={field.conditions[0]} max={field.conditions[1]}
                                    onChange={(e) => setInputValue(e.target.value)} />
                                {/* <span>{handleError(inputValue, index)}</span> */}
                            </div>
                            : field.fieldType === 'text' ?
                                <div key={index}>
                                    <label>{field.fieldName}</label>
                                    <input type="text" minLength={field.conditions[0]} maxLength={field.conditions[1]}
                                        onChange={(e) => setInputValue(e.target.value)} />
                                    {/* <span>{handleError(inputValue, index)}</span> */}
                                </div>
                                : field.fieldType === 'email' ?
                                    <div key={index}>
                                        <label>{field.fieldName}</label>
                                        <input type="email" size={field.conditions[0]}
                                            onChange={(e) => setInputValue(e.target.value)} />
                                        {/* <span>{handleError(inputValue, index)}</span> */}
                                    </div>
                                    : field.fieldType === 'date' ?
                                        <div key={index}>
                                            <label>{field.fieldName}</label>
                                            <input type="date" min={field.conditions[0]}
                                                onChange={(e) => setInputValue(e.target.value)} />
                                            {/* <span>{handleError(inputValue, index)}</span> */}
                                        </div>
                                        :
                                        null}</div>
                )
            })}
        </div>
    )
}

export default List
