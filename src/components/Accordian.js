import React, {useState} from 'react'
import {Answer} from './Answer'

export const Accordian = ( {answer, question} ) => {
    const [clicked, setClicked] = useState(false)
    const handlebutton = (evt) => {
        evt.preventDefault()
        clicked ? setClicked(false) : setClicked(true)
    }
    return (
        <section>
            <button onClick = {handlebutton} > {question} </button>
            {clicked && <Answer answer = {answer} />}
        </section>
    )
}