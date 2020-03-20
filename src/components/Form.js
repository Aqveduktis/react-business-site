import React, { useState, useRef } from 'react'

export const Form = () => {
    const [done, setDone] = useState(false)
    const radioRef = useRef()
    // var hasName = (name === 'true') ? 'Y' :'N';
    const handleSubmit = (evt) => {
      evt.preventDefault()
      setDone(true)
      
      // alert(`Submitting Name ${values.toString()}`) 
      
    }
    return (
        <form className="myForm" onSubmit={handleSubmit} >
         <p>How many rooms do you need?</p>
          < Radio />
          <CheckBox />
          <button type ="submit" className="btn">Submit answers</button>
        </form>
    )
  
  }
  const rooms = ["1 room", "2 rooms", "3+ rooms"]

export const Radio = () => {
  const [room, setRoom] = useState()
  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   alert(`Submitting Name ${name}`)
  // }
  return (
    // <form onSubmit={handleSubmit}>
<>
    <label className="radio">
      {rooms.map(choice => (
        <div>
          <p key = {choice}>{choice}</p>
          <input
            type="radio"
            value={choice}
            onChange={e => setRoom(e.target.value)}
            checked={room === choice}
          />
        </div>
      ))}

    </label>
    </>

    // <input type="submit" value="Submit" />
    // </form>
  )

}
const CheckBox = () => {
  const [wantsParking, setParking] = useState(false)

  return (
    <label>
    Need parking?
    <input
      type="checkbox"
      checked={wantsParking}
      onChange={event => setParking(event.target.checked)}
    />
  </label>
  )
}