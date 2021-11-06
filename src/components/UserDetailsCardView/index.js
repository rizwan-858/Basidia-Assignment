import './index.css'

const UserDetailsCardView = props => {
  const {user, onClickCardItem, currentCardId} = props
  const {username, DOB, id, state} = user

  const onClickCard = () => {
    onClickCardItem(id)
  }

  const dob = new Date(DOB)
  const monthDiff = Date.now() - dob.getTime()
  const ageDt = new Date(monthDiff)
  const year = ageDt.getUTCFullYear()
  const age = Math.abs(year - 1970)

  const cardClass = id === currentCardId ? 'selectedCardItem' : 'cardItem'

  return (
    <li className={cardClass} onClick={onClickCard}>
      <img
        className="profileIcon"
        src="https://res.cloudinary.com/rizwan987/image/upload/v1635936753/user-icon_m74aps.png"
        alt="usericon"
      />
      <div className="profileDetails">
        <p>{username}</p>
        <p>{age}</p>
        <p>{state}</p>
      </div>
    </li>
  )
}

export default UserDetailsCardView
