const FoodCard = ({item}) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-[#111827] rounded-md absolute right-1 text-white mt-4 mr-4 p-3">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4">Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;