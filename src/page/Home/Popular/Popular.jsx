import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/Hooks";

const Popular = () => {

  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular")

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div className="mb-32">
      <section>
        <SectionTitle
          SubHeading={"Check it out"}
          Heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {popular.map((item) => (
            <MenuItems key={item._id} item={item}></MenuItems>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Popular;
