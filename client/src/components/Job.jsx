import moment from 'moment';

export default function Job({company, createdAt}) {
  let date = moment(createdAt).format('MMM Do, YYYY')
  return (
    <div>
      <h5>{company}</h5>
      <h5>{date}</h5>

    </div>
  )
}
