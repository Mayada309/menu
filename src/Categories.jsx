const Categories = ({ categories, filterItems }) => {
  return (
    <div className="container">
      <div className="btn-container">
        {categories.map((category) => {
          return (
            <button
              key={category}
              type="button"
              onClick={() => filterItems(category)}
              className="btn"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
