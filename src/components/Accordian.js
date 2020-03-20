import React, {useState} from 'react'
import {Answer} from './Answer'

export const Accordian = () => {
    const [clicked, setClicked] = useState(false)
    const handlebutton = (evt) => {
        evt.preventDefault()
        clicked ? setClicked(false) : setClicked(true)
    }
    return (
        <section>
            <button onClick = {handlebutton} >Question one</button>
            {clicked && <Answer answer = 'Will you love me in prison' />}
        </section>
    )
}