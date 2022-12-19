import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickingBtn = () => {
    onClickTabItem(tabId)
  }

  const activeTabStyle = isActive ? 'active-tab-style' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabStyle}`}
        onClick={clickingBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
