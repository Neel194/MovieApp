const Loading = () => {
  return (
    <section className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-[#1F1E24]">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
    </section>
  );
};

export default Loading;
