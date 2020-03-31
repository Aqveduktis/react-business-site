import React, {useState, useEffect} from 'react'
import {Answer} from './Answer'
import { Card } from './Card'

export const Pictures = () => {
    const [pictures, setPictures] = useState([])
    const [done, setDone] = useState(false)
    useEffect(()=>{
        fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(json => {setPictures(json)
        setDone(true)
        })
    },[])
  console.log(pictures)
    return (
        <section>
       hello world
       <div>
           {done && <Card item={pictures[1]} /> }
   </div>
    
        </section>
    )
}