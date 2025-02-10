import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../utils/axios";
import noimage from "/noimage.png";
const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);
  const getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getsearches();
  }, [query]);
  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i classname="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="text-zinc-200 text-xl outline-none border-none p-5 bg-transparent w-[50%] mx-10"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          classname="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="font-semibold text-zinc-600 w-[100%] p-10 flex justify-start hover:bg-zinc-300 items-center duration-300 border-b-2 border-zinc-100 hover:text-black"
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
              {s.title || s.name || s.original_title || s.original_name}
            </span>
          </Link>
        ))}
        {/* <Link className="font-semibold text-zinc-600 w-[100%] p-10 flex justify-start hover:bg-zinc-300 items-center duration-300 border-b-2 border-zinc-100 hover:text-black">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
      </div>
    </div>
  );
};
export default Topnav;
