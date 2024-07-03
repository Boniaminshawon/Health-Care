import Banner from "../Components/Home/Banner";
import { GoArrowUpRight } from "react-icons/go";
import logo from '../assets/Images/logo light.png'

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            {/* get your first appointment 50% off */}
            <div className= 'my-20 h-[475px] rounded-3xl bg-center bg-no-repeat mx-16 p-12 ' style={{ backgroundImage: ' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/80TypGG/Rectangle-32.png")' }} >
                <div className="flex justify-end"><img src={logo} alt="" /></div>

                <h3 className="lg:w-1/2 text-4xl mt-10 font-bold text-white leading-normal">Get Your <br /> First Appointment <br /> at 50% off</h3>
                <div className="flex gap-6 font-semibold mt-5">
                    <button className="bg-yellow-400 gap-1 px-3 py-2 rounded-md flex items-center">Appointment <GoArrowUpRight></GoArrowUpRight></button>
                    <button className="text-white border border-black rounded-md flex items-center px-3 gap-1 py-2">learn More <GoArrowUpRight></GoArrowUpRight></button>
                </div>


            </div>
        </div >
    );
};

export default Home;