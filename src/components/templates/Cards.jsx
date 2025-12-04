import { Link } from 'react-router-dom';
import noimage from '/noimage.png';

const Cards = ({ data, title }) => {
    return (
        <div className="flex flex-wrap w-full h-full px-[4%] mt-[1%] bg-[#1F1E24]">
            {data.map((c, i) => (
                <Link className="relative w-[27vh] mr-[6%] mb-[3%] " key={i}>
                    <img
                        className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover "
                        src={
                            c.poster_path || c.backdrop_path || c.profile_path
                                ? `https://image.tmdb.org/t/p/original/${
                                      c.poster_path ||
                                      c.backdrop_path ||
                                      c.profile_path
                                  }`
                                : noimage
                        }
                        alt=""
                    />
                    <h1 className="text-xl text-zinc-300 mt-3 font-semibold  ">
                        {c.name ||
                            c.title ||
                            c.original_name ||
                            c.original_title}
                    </h1>
                    {c.vote_average && (
                        <div className="absolute right-[-7%] bottom-[30%] rounded-full text-xl font-semibold text-white w-[6vh] h-[6vh] flex justify-center items-center bg-yellow-600 ">
                            {(c.vote_average * 10).toFixed()} <sup>%</sup>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
};
export default Cards;
