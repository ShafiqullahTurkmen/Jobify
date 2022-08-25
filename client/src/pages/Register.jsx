import { useState, useEffect } from 'react'
import { Logo } from '../components'

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

export default function Register() {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <div className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo /> 
        <h3>Login</h3>
        {/* name input */}
        <div className="form-row">
          <label htmlFor="name" className='form-label'>name</label>
          <input 
            type="text" 
            value={values.name} 
            name="name" 
            onChange={handleChange}
            className="form-input"
          />
        </div>
         <button type="submit" className="btn btn-block">submit</button>
      </form>
    </div>
  )
}
