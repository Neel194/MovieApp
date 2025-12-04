const HorizontalCards = ({ data }) => {
  return (
    <div className="mb-5 flex w-full overflow-y-hidden p-5">
      {data.map((d, i) => (
        <div key={i} className="mr-5 mb-5 h-[37vh] min-w-[15%] bg-zinc-900">
          <img
            className="h-[55%] w-full object-cover"
            src={`https://image.tmdb.org/t/p/original${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <div className="h-[45%] p-3 text-white">
            {" "}
            <h1 className="line-clamp-1 text-xl font-semibold">
              {d.title || d.name || d.original_title || d.original_name}
            </h1>
            <p className="">
              {d.overview
                ? d.overview.slice(0, 35) + "..."
                : "No overview available"}
              {d.overview && <span className="text-zinc-500">more</span>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HorizontalCards;
