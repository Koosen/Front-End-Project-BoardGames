import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

function AdvancedSearch() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <form className="AdvancedSearchForm" onSubmit={(e)=>handleSubmit(e)}>
      <div className="CategoryDiv">
        {categories.map((category) => {
          return (
            <div key={`divFor${category.slug}`}>
              <Link className="AdvancedSearchFormLinkText" to={`/reviews/${category.slug}`}>{category.slug}</Link>
            </div>
          );
        })}
      </div>

      <div className="SortAndOrderDiv">
        <label htmlFor="SortBy">Sort By</label>
        <select id="SortBy" name="SortBy">
          <option value="review_id">review_id</option>
          <option value="title">title</option>
          <option value="owner">owner</option>
          <option value="designer">designer</option>
          <option value="review_body">review_body</option>
          <option value="review_img_body">review_img_body</option>
          <option value="category">category</option>
          <option value="created_at">created_at</option>
          <option value="votes">votes</option>
          <option value="comment_count">comment_count</option>
        </select>
        <label htmlFor="OrderBy">Sort By</label>
        <select id="OrderBy" name="OrderBy">
          <option value="desc">desc</option>
          <option value="asc">asc</option>
        </select>
      </div>

      <div className="SearchAndSubmitDiv" >
        <input type="text" name="search"/>
        
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
        
        <Link to="/reviews">
          <button type="button">
            <i className="fas fa-eye"></i>
          </button>
        </Link>
      </div>
    </form>
  );
}

function handleSubmit(e){
  e.preventDefault()
  console.dir(e.target.search.value)
}





export default AdvancedSearch;
