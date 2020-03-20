import React from 'react'
import {Header} from './components/Header'
import { Accordian } from 'components/Accordian'

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      <Header title = "Coffie Shop" words = "best coffie in town" />
      <Accordian />
    </div>
  )
}
