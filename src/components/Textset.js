import React, {useState} from 'react'
import PropTypes from 'prop-types' //impt

export default function Textset(props) {
    const handleButtonClickUP = () =>{
        console.log("The button was clicked....")
        let currentText = text.toUpperCase()
        setText(currentText)
        props.showAlert('Text has been converted to UPPERCASE','success')
    }

    const handleButtonClickLO = () =>{
      console.log("The button was clicked....")
      let currentText = text.toLowerCase()
      setText(currentText)
      props.showAlert('Text has been converted to lowercase','success')
    }

    const handleOnChange = (event) =>{
        console.log("The change was done....")
        setText(event.target.value)
    }

    const clearTextBox = (event) => {
      setText('');
      props.showAlert('Text has been cleared','success')
    }

    const printText = (event)=>{
      console.log(event.target.value)
    }

    const [text,setText] = useState('');
    console.log(text)
  return (
    <>
    <div style={{color:props.mode === 'light'?'black':'white'}} className='container my-3'>
        <h3>States and hooks ...</h3>
        <div className="mb-3">
        <h4>{props.heading}</h4>
        <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'light'?'grey':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        <button className={`btn my-2 btn-${props.buttonMode}`} onClick={handleButtonClickUP}>Convert to UPPERCASE</button>
        <button className={`btn my-2 btn-${props.buttonMode} mx-2`} onClick={handleButtonClickLO}>Convert to lowecase</button>
        <button className={`btn my-2 btn-${props.buttonMode} mx-2`} onClick={clearTextBox}>Clear</button>
        <button className={`btn my-2 btn-${props.buttonMode} mx-2`} onClick={printText}>Print in console</button>
        </div>
    </div>

    <div style={{color:props.mode === 'light'?'black':'white'}} className='container my-2'>
      <h1>Your text summary</h1>
      <p>{text.length>0?text.split(" ").length:'0'} words and {text.length} characters</p>
    </div>
    </>   
  )
}
