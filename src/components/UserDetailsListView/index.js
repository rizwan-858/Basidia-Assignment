import './index.css'

const UserDetailsListView = props => {
  const {user, currentListId, onClickListItem} = props
  const {username, id, DOB, state} = user

  const onClickList = () => {
    onClickListItem(id)
  }

  const dob = new Date(DOB)
  const monthDiff = Date.now() - dob.getTime()
  const ageDt = new Date(monthDiff)
  const year = ageDt.getUTCFullYear()
  const age = Math.abs(year - 1970)

  const listClass = id === currentListId ? 'selectedlistItem' : 'listItem'

  return (
    <li onClick={onClickList} className={listClass}>
      <div className="listProfileDetails">
        <img
          className="listProfileIcon"
          src="https://res.cloudinary.com/rizwan987/image/upload/v1635936753/user-icon_m74aps.png"
          alt="profileIcon"
        />
        <p className="listProfileInfo">{`${username}--${age}--${state}`}</p>
      </div>
      <img src="https://res.cloudinary.com/rizwan987/image/upload/v1636104826/menu_icon_keoyyu.png" />
    </li>
  )
}

export default UserDetailsListView
