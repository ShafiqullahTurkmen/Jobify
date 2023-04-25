import { useEffect } from 'react'
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAppContext } from '../context/appContext';
import Job from './Job';
import Loading from './Loading';

export default function JobsContainer() {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs
  } = useAppContext();

  useEffect(() => {
    getJobs()

  }, [])

  if (isLoading) {
    return <Loading center />
  }

  if (jobs.length === 0) {
    return <Wrapper>
      <h2>No jobs to display...</h2>
    </Wrapper>
  }



  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {
          jobs.map((job) => <Job key={job._id} {...job} />)
        }
      </div>

      {/* pagination and buttons */}
    </Wrapper>
  )
}
