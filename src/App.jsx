import React from 'react'
import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h4>Text Generator</h4>
      <form className='text-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>Paragraphs:</label>
      <input
          type='number'
          name='amount'
          id='amount'
          min='1' 
          step='1'
          max='10'
          value={count} 
          onChange={(e)=>setCount(e.target.value)}

          
       />
       <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='text-text'>
          {text.map((item)=>{
            return <p key={nanoid()}>{item}</p>
          })}
      </article>
    </section>
  )
}

export default App
