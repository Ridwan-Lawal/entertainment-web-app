/* eslint-disable react/prop-types */
function SearchForm({
  dispatch,
  searchForm,
  placeholder = "Search for movies or TV series",
}) {
  return (
    <form className="w-full  flex items-center gap-6 mt-10 ">
      <img
        src="/src/assets/icon-search.svg"
        alt=""
        className="w-[28px] sm:w-fit"
      />

      <div className="w-full border-b border-slate-600 pb-1.5">
        <input
          type="text"
          value={searchForm}
          onChange={(e) =>
            dispatch({ type: "searchFormChange", payload: e.target.value })
          }
          placeholder={placeholder}
          className="bg-inherit  placeholder:text-gray-600 placeholder:text-2xl placeholder:text-[20px] sm:placeholder:text-[24px] w-full outline-none py-2  transition-all duration-500  text-white text-[15px]"
        />
      </div>
    </form>
  );
}

export default SearchForm;
