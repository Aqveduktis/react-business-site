import React from 'react'
import {Header} from './components/Header'
import { Accordian } from 'components/Accordian'
import {Form} from 'components/Form'

export const App = () => {
  return (
    <div className = "main">
      <Header title = "Coffie Shop" words = "best coffie in town" />
      <section className = "accordian">
        <Accordian question = "Question one" answer = "Will you still love me in prison" />
        <Accordian question = "Question two" answer = "Cry me a river" />
      </section>
      <Form />
    </div>
  )
}
