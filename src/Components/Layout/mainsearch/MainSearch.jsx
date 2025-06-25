import "styles/_mainSearch.scss";
const MainSearch = () => {
  return (
    <div className="search_container">
      <input type="text" placeholder="지역, 숙소명을 검색하세요" />
      <input type="text" placeholder="07.22 (화) - 07.23 (수)" />
      <input type="text" placeholder="성인 2명, 객실 1개" />
      <button>검색</button>
    </div>
  );
};

export default MainSearch;
