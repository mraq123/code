import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_left">
                <h3 className="title_left">
                    RAFI
                </h3>

                <hr />

                <p className="text_left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda harum porro ab culpa sint, numquam doloribus excepturi in ipsum quaerat ipsa aperiam modi obcaecati consequatur, ut, sunt veritatis exercitationem.
                </p>

                <div className="footer_left_socmed">
                    <span>
                        <i className="material-icons facebook">facebook</i>
                    </span>

                    <span>
                        <i className="material-icons facebook">facebook</i>
                    </span>

                </div>



            </div>


            <div className="footer_right">

                <div className="footer_right_sitemap">
                    <Link to="/home">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/gallery">GALLERY</Link>
                </div>

                <p className="text_right">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime similique ab alias illo, non esse mollitia iure soluta id error explicabo doloremque! Voluptatibus consequuntur commodi quo dolor unde molestiae mollitia!
                </p>

                <div className="form_grup">
                    <input type="email" placeholder="masukan email anda" />
                    <input type="password" placeholder="masukan password anda" />
                    <button className="btn">SUBMIT</button>
                </div>





            </div>






        </footer>
    )
}



export default Footer 