import React, {useState, useEffect} from 'react'
import {Answer} from './Answer'

export const Card = ({item}) => {

    return (
        <article>
            <img src = {item.url}></img>
            <p>{item.author}</p>
        </article>
    )
}