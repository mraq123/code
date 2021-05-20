import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu = ({ show }) => {
    return (
        <div className="tab_menu" style={{
            transform: show ? "translateY(0)" : "translateY(-55vh)"
        }}>

            <NavLink to="/home" className="span" activeClassName="span_active">Home </NavLink>
            <NavLink to="/about" className="span" activeClassName="span_active">About </NavLink>
            <NavLink to="/contact" className="span" activeClassName="span_active">Contact</NavLink>
            <NavLink to="/gallery" className="span" activeClassName="span_active">Gallery</NavLink>






        </div>
    )
}




export default Menu 