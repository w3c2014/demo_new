import React, { useState } from "react";
import './index.scss'

export const Input: React.FC = () => {

  const [inputValue, setInputValue] = useState('')
  const getChangeValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
    // const rule = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
    // rule.test(target.value)
  }

  return (
    <>
      <div className="input_box">
        <input className='input_element' type="email" value={inputValue} onChange={getChangeValue} pattern=".+@globex\.com" size={30} required />
        <img className={inputValue ? 'closeIcon' : 'hiddenCloseIcon'} src="/images/closeIcon.png" alt="" onClick={() => setInputValue('')} />
      </div>
    </>

  )

}
