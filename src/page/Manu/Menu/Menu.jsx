import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import imgCover from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../Hooks/Hooks";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import MenuCategory from "../MenuCatagiry/MenuCategory";
const Menu = () => {
  const [menu] = useMenu()
  const offered = menu.filter(item => item.category === "offered")
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const salad = menu.filter(item => item.category === "salad")
  const soup = menu.filter(item => item.category === "soup")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={imgCover}
        title='OUR MENU'
        subTitle='Would you like to try a dish?'
      ></Cover>
      <div className="mt-32">
        <SectionTitle
            SubHeading='Do not miss'
            Heading='TO DAYS OFFER'
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        {/* Dessert section */}
        <MenuCategory
        items={dessert}
        title="dessert"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        CoverImg={dessertImg}
        ></MenuCategory>
        {/* Pizza section */}
        <MenuCategory
        items={pizza}
        title="pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        CoverImg={pizzaImg}
        ></MenuCategory>
        {/* salade section */}
        <MenuCategory
        items={salad}
        title="salad"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        CoverImg={saladImg}
        ></MenuCategory>
        {/* soups section */}
        <MenuCategory
        items={soup}
        title="soup"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        CoverImg={soupImg}
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
