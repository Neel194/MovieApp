import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.profile_path
                })`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full h-[50vh] flex flex-col items-start justify-center p-[5%]"
        >
            <h1 className="w-[70%] text-5xl font-black text-white">
                {data.title ||
                    data.name ||
                    data.original_title ||
                    data.original_name}
            </h1>
            <p className="w-[70%] mt-3 mb-3 text-white ">
                {data.overview
                    ? data.overview.slice(0, 200) + '...'
                    : 'No overview available'}
                {data.overview && <Link className="text-blue-400">more</Link>}
            </p>
            <p className="text-white">
                <i className="text-yellow-500 ri-megaphone-fill "></i>{' '}
                {data.release_date || 'No Information'}
                <i className="ml-5 text-yellow-500 ri-album-fill "></i>{' '}
                {data.media_type ? data.media_type.toUpperCase() : 'NA'}
            </p>
            <Link className="mt-5 px-4 py-2 rounded text-white bg-[#6556CD]">
                Watch Trailer
            </Link>
        </div>
    );
};
export default Header;
