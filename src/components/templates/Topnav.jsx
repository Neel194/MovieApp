import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../utils/axios';
import noimage from '/noimage.png';

const Topnav = () => {
    const [query, setQuery] = useState('');
    const [searches, setsearches] = useState([]);

    const getsearches = async () => {
        if (!query.trim()) {
            setsearches([]);
            return;
        }
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results || []);
        } catch (error) {
            console.log('Error: ', error);
            setsearches([]);
        }
    };

    useEffect(() => {
        getsearches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <div className="w-[80%] h-[10vh] mx-auto relative flex items-center">
            <i className="text-3xl text-zinc-400 ri-search-line"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="text-zinc-200 text-xl outline-none border-none p-5 bg-transparent w-[50%] mx-10"
                type="text"
                placeholder="Search anything"
            />
            {query.length > 0 && (
                <i
                    onClick={() => setQuery('')}
                    className=" text-zinc-400 text-3xl ri-close-fill right-0"
                ></i>
            )}

            {query.length > 0 && searches.length > 0 && (
                <div className="absolute w-[50%] max-h-[55vh] bg-zinc-200 top-full left-[6%] overflow-auto">
                    {searches.map((s, i) => (
                        <Link
                            key={i}
                            className="font-semibold text-zinc-600 w-full p-10 flex justify-start hover:bg-zinc-300 items-center duration-300 border-b-2 border-zinc-100 hover:text-black"
                        >
                            <img
                                className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                                src={
                                    s.backdrop_path || s.profile_path
                                        ? `https://image.tmdb.org/t/p/original/${
                                              s.backdrop_path || s.profile_path
                                          }`
                                        : noimage
                                }
                                alt=""
                            />
                            <span>
                                {s.title ||
                                    s.name ||
                                    s.original_title ||
                                    s.original_name}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Topnav;
