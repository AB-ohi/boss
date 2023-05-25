import './MenuItems.css'

const MenuItems = ({item}) => {

    const {image, name, recipe, price} = item;

    return (
        <div className="flex gap-5">
            <img className="w-20 img-border" src={image} alt="" />
            <div>
                <h1 className="text-2xl">{name}-----------</h1>
                <p className="text-4 text-gray-500">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-2xl">{price}$</p>
        </div>
    );
};

export default MenuItems;