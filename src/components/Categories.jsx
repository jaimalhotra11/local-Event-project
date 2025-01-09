import "./Categories.css";
import CategoriesJson from "../JsonData/Categories.json";

function Categories() {
  return (
    <>
      <div className="cat-parent">
        {CategoriesJson.map((item, i) => {
          return (
            <>
              <div className="cat-child" key={i}>
                <div className="cat-img2">
                  <img src={item?.image} className="cat-img" />
                </div>
                <p className="cat-para">{item?.category}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
