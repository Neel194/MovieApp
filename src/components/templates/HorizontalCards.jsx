const HorizontalCards = ({ data }) => {
    return (
        <div className="w-full flex overflow-y-hidden mb-5 p-5">
            {data.map((d, i) => (
                <div
                    key={i}
                    className="h-[37vh] bg-zinc-900 min-w-[15%] mr-5 mb-5"
                >
                    <img
                        className="w-full h-[55%] object-cover"
                        src={`https://image.tmdb.org/t/p/original${
                            d.backdrop_path || d.poster_path
                        }`}
                        alt=""
                    />
                    <div className="text-white p-3 h-[45%]">
                        {' '}
                        <h1 className="line-clamp-1 text-xl font-semibold ">
                            {d.title ||
                                d.name ||
                                d.original_title ||
                                d.original_name}
                        </h1>
                        <p className="">
                            {d.overview
                                ? d.overview.slice(0, 35) + '...'
                                : 'No overview available'}
                            {d.overview && (
                                <span className="text-zinc-500">more</span>
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default HorizontalCards;
