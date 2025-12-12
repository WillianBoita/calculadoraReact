import React, { useState } from "react"
import Button from "./components/Button"
import Calculator from "./components/Calculator"
import './components/index.css'
import Result from "./components/Result"

function App() {
  const [value, setValue] = useState('')
  const [previousOperation, setPreviousOperation] = useState('')

  return (
    <>
      <Calculator>
        <Result result={value}/>
        <div>
          <Button addValue={setValue} currentValue={value} operation={'7'}/>
          <Button addValue={setValue} currentValue={value} operation={'8'}/>
          <Button addValue={setValue} currentValue={value} operation={'9'}/>
          <Button addValue={setValue} currentValue={value} operation={'C'} previousOperation={setPreviousOperation}/>
        </div>
        <div>
          <Button addValue={setValue} currentValue={value} operation={'4'}/>
          <Button addValue={setValue} currentValue={value} operation={'5'}/>
          <Button addValue={setValue} currentValue={value} operation={'6'}/>
          <Button addValue={setValue} currentValue={value} operation={'*'}/>
        </div>
        <div>
          <Button addValue={setValue} currentValue={value} operation={'1'}/>
          <Button addValue={setValue} currentValue={value} operation={'2'}/>
          <Button addValue={setValue} currentValue={value} operation={'3'}/>
          <Button addValue={setValue} currentValue={value} operation={'-'}/>
        </div>
        <div>
          <Button addValue={setValue} currentValue={value} operation={'0'}/>
          <Button addValue={setValue} currentValue={value} operation={'/'}/>
          <Button addValue={setValue} currentValue={value} operation={'='} previousOperationValue={previousOperation} previousOperation={setPreviousOperation} />
          <Button addValue={setValue} currentValue={value} operation={'+'}/>
        </div>
      </Calculator>
    </>
  )
}

export default App
