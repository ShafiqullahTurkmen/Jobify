import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

export default function AddJob() {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useAppContext();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, ": ", value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(position.trim() && company.trim() && jobLocation.trim())) {
      displayAlert()
      return
    }
    console.log("create job");
  }

  return (
    <Wrapper>
      <form className="form">
        <h3> {isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />

          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />

          {/* jobLocation */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* job type */}
          <div className="form-row">
            <label htmlFor="jobType" className='form-label'>
              job type
            </label>
            <select
              name="jobType"
              value={jobType}
              onChange={handleJobInput}
              className='form-select'
            >
              {
                jobTypeOptions.map((itemValue, index) => (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                ))
              }
            </select>
          </div>
          {/* job status */}
          <div className="btn-container">
            <button
              type="submit"
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>


        </div>
      </form>
    </Wrapper>
  )
}
