import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addField } from '../../Redux/actions'
function Popup() {

    // the name of the new field    
    const [name, setName] = useState('')

    // the tyoe of the new field    
    const [type, setType] = useState('')

    const dispatch = useDispatch()

    // the condition if the fi
    const [cond1, setCond1] = useState('')
    const [cond2, setCond2] = useState('')




    // handler for all the new submision of fields that resets 
    // the conditions and dispaches the info in redux
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addField(name, type, [cond1, cond2]))
        setCond1('')
        setCond2('')
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name your input
                    <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </label>
                <label>
                    Type
                <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value='text'>text</option>
                        <option value='number'>number</option>
                        <option value='email'>email</option>
                        <option value='date'>date</option>
                    </select>
                </label>
                {type === 'number' ?
                    <div>
                        <label>Min</label>
                        <input type="number" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                        <label>Max</label>
                        <input type="number" value={cond2} onChange={(e) => setCond2(e.target.value)} />

                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                    : type === 'text' ?
                        <div>
                            <label>Min length</label>
                            <input type="number" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                            <label>Max length</label>
                            <input type="number" value={cond2} onChange={(e) => setCond2(e.target.value)} />

                            <button onClick={handleSubmit}>Submit</button>
                        </div> :
                        type === 'email' ?
                            <div>
                                <label>Size</label>
                                <input type="size" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                                <button onClick={handleSubmit}>Submit</button>
                            </div> :
                            type === 'date' ?
                                <div>
                                    <label>Start Date:</label>
                                    <input type="date" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                                    <button onClick={handleSubmit}>Submit</button>
                                </div> :
                                null
                }
            </form>
        </div>
    )
}

export default Popup
