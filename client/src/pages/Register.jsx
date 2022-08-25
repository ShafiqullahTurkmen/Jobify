import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: true,
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
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        { values.showAlert && <Alert />}

        {/* name input */}
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />

        {/* emain input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">submit</button>
      </form>
    </Wrapper>
  )
}
