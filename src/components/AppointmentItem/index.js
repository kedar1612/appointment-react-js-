// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggelIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails

  const startImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggelIsStarred(id)
  }

  return (
    <li className="appiontment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          className="star-button"
          type="button"
          data-testid="star"
          onClick={onClickStar}
        >
          <img src={startImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
