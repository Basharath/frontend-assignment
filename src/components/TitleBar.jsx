import logo from '../images/logo.svg'

export default function Headers({ onSearch }) {

  const handleChange = ({ currentTarget }) => {
    onSearch(currentTarget.value);
  }

  return (
    <>
      <div className="titlebar">
        <img src={logo} alt="TimeScale" className="logo" />
        <div className="search">
          <i className="fa fa-search"></i>
          <input type="search" onChange={handleChange} className="searchbox" placeholder="Search for a movie" />
        </div>
      </div>
      <div className="hr"></div>
      {/* <hr /> */}
    </>
  )
}
