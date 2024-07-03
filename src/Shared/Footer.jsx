import logo from '../assets/Images/logo light.png'
import { FaFacebook, FaInstagram,  FaYoutube } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
const Footer = () => {
    return (
        <div className="">
            <footer className="footer  text-white bg-indigo-950 px-14 py-20">
                <aside>
                    <img src={logo} alt="" />
                    <p>123 Main Street Anytown, USA</p>
                    <p>Postal Code: 12345</p>

                    <p className='mt-5'>Support: support@oyolloo.com</p>
                    <p>(Available : 10:00am to 07:00pm)</p>
                </aside>
                <nav className='space-y-3'>

                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms and Condition</a>
                </nav>
                <nav className='space-y-3'>

                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>

                </nav>
                <nav>

                    <a className="link link-hover">Follow Us</a>
                    <div className='flex gap-4 text-3xl'>
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                     <TiSocialLinkedinCircular></TiSocialLinkedinCircular>
                        <FaYoutube></FaYoutube>
                    </div>
                    <p className='mt-5'>@Docpluse 2024</p>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;