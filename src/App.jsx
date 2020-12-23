// Importacion
/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'


// Generacion de la funcion flecha o Arrow function del componente

const App = () => {
    
    // Array destructuring
    // 1er posicion: valor ( que inicialmente es el valor por defecto)
    // 2da posicion: funcion que me va permitir modificar el valor por defecto
    // 
    const [stack, setStack] = useState("")

    // arrayTextoFuncionModificaTexto => ["hola", funcion]
    // Lo que ejecuta la funcion
    console.log("Renderizacion de App")
    return (
    <main className='react-calculator'>
        <Result value={stack} />
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(`${stack}${number}`)
        }} />
        <Functions 
            onContentClear={() => {
                console.log("Content Clear")
                setStack("")
            }}
            onDelete={() => {
                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1)
                    console.log("onDelete", newStack)
                    setStack(newStack)
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation:", operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual={equal =>  {
                console.log("Equal:", equal)
                setStack(eval(stack).toString())
            }}
        />
    </main>)
}

// Exportacion

export default App