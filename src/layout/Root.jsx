
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div className="lg:container md:mx-1 lg:mx-auto border-2 border-black min-h-screen">
          <div >
          <div  className="pl-10 pr-14">
               
               <Navbar></Navbar>
           </div>

           <div  >
               <Outlet></Outlet>

           </div>
          </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;