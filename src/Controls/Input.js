import { useState } from 'react';

function Input(props) {
  const { label } = props;

  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    // <div className="inputs">
    <>
      <label className='label'>{label}</label>
      <input
        className='input'
        type="text" 
        value={value}
        onChange={onChange}
      />
      </>
    // </div>
  )
}

export default Input;