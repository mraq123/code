import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../menu/Menu'
import Modal from '../modal/Modal'
import './Navbar.css'
import Logo from "../../assets/R.png"

const Navbar = () => {

    const [show, setShow] = useState()
    const [tabMenu, setTabMenu] = useState(false)




    return (
        <>

            {show === true ? <Modal /> : null}

            <Menu show={tabMenu} />




            <nav className="navbar">
                <img src={Logo} alt="sabar" width="20px" />
                <h3 className="brand">
                    RAFI
            </h3>

                <div className="menu">
                    <NavLink to='/home' className="span" activeClassName="span_active">Home</NavLink>
                    <NavLink to='/about' className="span" activeClassName="span_active">About</NavLink>
                    <NavLink to='/contact' className="span" activeClassName="span_active">Contact</NavLink>
                    <NavLink to='/gallery' className="span" activeClassName="span_active">Gallery</NavLink>

                </div>


                <span>
                    <i className="material-icons present_to_all" onClick={() => {
                        setShow(!show)
                    }}>present_to_all</i>
                </span>


                <span>
                    <i className="material-icons keyboard_arrow_down" onClick={() => {
                        setTabMenu(!tabMenu)
                    }}>keyboard_arrow_down</i>
                </span>






            </nav>
        </>
    )
}





export default Navbar 