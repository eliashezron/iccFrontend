import React from "react"
// import "./Dropdown.css";

function Dropdown({ items }) {
  //   const [dropdown, setDropdown] = useState(false)

  return (
    <>
      <ul
        className='dropdown-content'
        // className={dropdown ? "services-submenu clicked" : "services-submenu"}
        // onClick={() => setDropdown(!dropdown)}
      >
        {items.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.path}>{item.subtitle}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown
