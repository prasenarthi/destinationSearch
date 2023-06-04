import './index.css'

const DestinationItem = props => {
  const {each} = props
  const {name, imgUrl} = each

  return (
    <li className="destination-item">
      <h1 className="title">{name}</h1>
      <img src={imgUrl} alt={name} className="image" />
    </li>
  )
}

export default DestinationItem
