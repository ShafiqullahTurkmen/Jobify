import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

export default function Register() {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email.trim() || !password.trim() || (!isMember && !name.trim())) {
      displayAlert();
      return
    }

    const currentUser = { name, email, password };

    if (isMember) {
      console.log("already a member");
    } else {
      registerUser(currentUser);
    }

    console.log(values);
  }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

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

        <button type="submit" className="btn btn-block" disabled={isLoading}>submit</button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member"}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
