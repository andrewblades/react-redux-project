import React from 'react'
// import {useState} from 'react'
import { useSelector } from 'react-redux'

function List() {

    // all the fields
    const state = useSelector((state) => state.allState)

    // the input value variable
    // const [inputValue, setInputValue] = useState()

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
        <div className='listContainer'>

            {state.fields.map((field, index) => {
                return (
                    <div className='listElements'>
                        {field.fieldType === 'number' ?
                            <div key={index} className='elm'>
                                <div className='boxes'>
                                    <label>{field.fieldName} </label>
                                </div>
                                <div className='boxes'>
                                    <input type="text" min={field.conditions[0]} max={field.conditions[1]}
                                    // onChange={(e) => setInputValue(e.target.value)} 
                                    />
                                </div>
                                <div className='boxes'>
                                    <div className='condition'>Minimum number {field.conditions[0]}</div>
                                    <div className='condition'>Maximum number {field.conditions[1]}</div>
                                </div>
                                {/* <span>{handleError(inputValue, index)}</span> */}
                            </div>
                            : field.fieldType === 'text' ?
                                <div key={index} className='elm'>
                                    <div className='boxes'>
                                        <label>{field.fieldName}</label>
                                    </div>
                                    <div className='boxes'>
                                        <input type="text" minLength={field.conditions[0]} maxLength={field.conditions[1]}
                                        // onChange={(e) => setInputValue(e.target.value)} 
                                        />
                                    </div>
                                    <div className='boxes'>
                                        <div className='condition'>Minimum input length {field.conditions[0]}</div>
                                        <div className='condition'>Maximum input length {field.conditions[1]}</div>
                                    </div>

                                </div>
                                : field.fieldType === 'email' ?
                                    <div key={index} className='elm'>
                                        <div className='boxes'>
                                            <label>{field.fieldName}</label>
                                        </div>
                                        <div className='boxes'>
                                            <input type="email" size={field.conditions[0]}
                                            // onChange={(e) => setInputValue(e.target.value)}
                                            />
                                        </div>
                                        <div className='boxes'>
                                            <div className='condition'>Maximum email size {field.conditions[0]}</div>
                                        </div>
                                        {/* <span>{handleError(inputValue, index)}</span> */}
                                    </div>
                                    : field.fieldType === 'date' ?
                                        <div key={index} className='elm'>
                                            <div className='boxes'>
                                                <label>{field.fieldName}</label>
                                            </div>
                                            <div className='boxes'>
                                                <input type="date" min={field.conditions[0]}
                                                // onChange={(e) => setInputValue(e.target.value)} 
                                                />
                                            </div>
                                            <div className='boxes'>
                                                <div className='condition'>Start date {field.conditions[0]}</div>
                                            </div>
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
