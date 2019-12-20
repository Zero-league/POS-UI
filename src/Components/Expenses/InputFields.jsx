import React from 'react'

const InputField = (props) => {
    const {  name, label,value, onChange} = props;

    const _onChange =(e)=>{
        onChange(e.target.value);
    }

    return (
    <div className="form-group">
        <label for={name}>{label}</label>
        <input
         onChange={_onChange} 
        id={name}
          name={name} 
          className="form-control" 
          type="text" 
          value={value}
          />
    </div>
    )
}

export default InputField

