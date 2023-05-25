import { Helmet } from "react-helmet-async";
import coverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/Hooks";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
        img={coverImg}
      ></Cover>
      <Tabs
        className="text-center"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
