import { Link } from 'react-router-dom';
import {
    sidebarTopLinks,
    sidebarDownLinks,
} from '../../../utils/data/sidebarLinks';

const Sidenav = () => {
    return (
        <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
            <h1 className="text-2xl text-white font-bold">
                <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span className="text-2xl">CineVerse</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl">
                <h1 className="text-white font-semibold text-xl mt-6 mb-2">
                    New Feeds
                </h1>

                {sidebarTopLinks.map((item) => {
                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4"
                        >
                            <i className={`${item.icon} mr-2`}></i>
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <hr className="border-none h-0.5 bg-zinc-400 mt-2" />

            <nav className="flex flex-col text-zinc-400 text-xl ">
                <h1 className="text-white font-semibold text-xl mt-5 mb-2">
                    Website Information
                </h1>
                {sidebarDownLinks.map((item) => {
                    return (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-4"
                        >
                            <i className={`${item.icon} mr-2`}></i>
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};
export default Sidenav;
