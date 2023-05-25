import { Link } from "react-router-dom";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items,title,CoverImg,subTitle, SubHeading }) => {
    console.log(title)
  return (
    <div className="mb-14">
      {title && <Cover
        img={CoverImg}
        title={title}
        subTitle={subTitle}
      ></Cover>}
      {SubHeading && <SectionTitle
            SubHeading='Do not miss'
            Heading='TO DAYS OFFER'
        ></SectionTitle>}
      <div className="grid md:grid-cols-2 gap-6 mt-24">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center"><Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mx-auto mt-14">ORDER YOUR FAVORITE FOOD</button></Link></div>
    </div>
  );
};

export default MenuCategory;
