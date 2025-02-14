import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>{category}</h1>
      <p>Showing products for {category}</p>
    </div>
  );
};

export default CategoryPage;
