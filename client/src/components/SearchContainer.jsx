import { FormRow, FormRowSelect } from ".";
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';

export default function SearchContainer() {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters
  } = useAppContext();

  const handlerSearch = (e) => {
    if (isLoading) return
    handleChange({ name: e.target.name, value: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearFilters()
  }
  return (
    <Wrapper>
      <form action="form">
        <h4>search form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handlerSearch}
          ></FormRow>

          {/* search status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handlerSearch}
            list={["all", ...statusOptions]}
          />

          {/* search type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handlerSearch}
            list={["all", ...jobTypeOptions]}
          />

          {/* search sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handlerSearch}
            list={sortOptions}
          />

          <button className="btn btn-block btn-danger" disabled={isLoading} onClick={handleSubmit}>
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
