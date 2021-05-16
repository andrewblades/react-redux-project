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
        <div className='popupContainer'>
            <form className='popupForm' onSubmit={handleSubmit}>
                <div>
                    <div className='boxes'>
                        <label className='label' >
                            Name your input
                    </label>
                    </div>
                </div>
                <div className='boxes'>
                    <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>


                <div>
                    <div className='boxes'>
                        <label className='label'>
                            Type
                     </label>
                    </div>
                </div>
                <div className='boxes'>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value='text'>text</option>
                        <option value='number'>number</option>
                        <option value='email'>email</option>
                        <option value='date'>date</option>
                    </select>
                </div>

                <div>
                    {type === 'number' ?
                        <div>
                            <div className='boxes'>
                                <label className='label' >Min</label>
                            </div>
                            <div className='boxes'>
                                <input type="number" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                            </div>
                            <div className='boxes'>
                                <label className='label' >Max</label>
                            </div>
                            <div className='boxes'>
                                <input type="number" value={cond2} onChange={(e) => setCond2(e.target.value)} />
                            </div>
                            <div className='boxes'>
                                <button className='Btn' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                        : type === 'text' ?
                            <div>
                                <div className='boxes'>
                                    <label className='label' >Min length</label>
                                </div>
                                <div className='boxes'>
                                    <input type="number" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                                </div>
                                <div className='boxes'>
                                    <label className='label' >Max length</label>
                                </div>
                                <div className='boxes'>
                                    <input type="number" value={cond2} onChange={(e) => setCond2(e.target.value)} />
                                </div>
                                <div className='boxes'>
                                    <button className='Btn' onClick={handleSubmit}>Submit</button>
                                </div>
                            </div> :
                            type === 'email' ?
                                <div>
                                    <div className='boxes'>
                                        <label className='label' >Size</label>
                                    </div>
                                    <div className='boxes'>
                                        <input type="size" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                                    </div>
                                    <div className='boxes'>
                                        <button className='Btn' onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div> :
                                type === 'date' ?
                                    <div>
                                        <div className='boxes'>
                                            <label className='label' >Start Date:</label>
                                        </div>
                                        <div className='boxes'>
                                            <input type="date" value={cond1} onChange={(e) => setCond1(e.target.value)} />
                                        </div>
                                        <div className='boxes'>
                                            <button className='Btn' onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div> :
                                    null
                    }
                </div>
            </form>
        </div >
    )
}

export default Popup
