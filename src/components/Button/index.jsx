import React from 'react'

function calculate(expression) {
  try {
    // Só permite números, operadores e espaço
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      return "Erro";
    }

    // Usa Function ao invés de eval (React Compiler aceita)
    const fn = Function(`"use strict"; return (${expression})`);
    return {result: fn(), operation: expression};
  } catch {
    return "Erro";
  }
}


export default function Button({ addValue, currentValue, operation, previousOperationValue, previousOperation }) {

  function updateOperation() {

    if(operation === 'C') {
      previousOperation('')
      return addValue('');
    }

    if(operation === '=') {
      if(!previousOperationValue) {
        const result = calculate(currentValue)
        previousOperation(result.operation)
        return addValue(result.result);
      }
      let newOperationString = ''
      const newOperation = previousOperationValue.split(/(?!^)([+\-*/])/)
      newOperation[0] = currentValue.toString()
      for(let char in newOperation) {
        newOperationString += newOperation[char]
      }
      const result = calculate(newOperationString)
      previousOperation(result.operation)
      return addValue(result.result);
    }
    const result = currentValue += operation
    return addValue(result);
  }

  return (
    <button className={'button ' + (operation === 'C' ? 'delete' : '')} type='button' onClick={updateOperation}>{operation}</button>
  )
}