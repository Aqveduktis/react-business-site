import React, {useState} from 'react'
import {Answer} from './Answer'

export const Accordian = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <section>
            <button>Question one</button>
            <Answer answer = 'Will you love me in prison' />
        </section>
    )
}