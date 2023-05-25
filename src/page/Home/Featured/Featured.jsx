import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="background bg-fixed text-white p-32 my-10 bg-slate-500 bg-opacity-40">
                <SectionTitle
                SubHeading="Check it out"
                Heading="FROM OUR MENU"
                ></SectionTitle>
                <div className="md:flex items-center justify-center gap-16 ">
                    <img className="w-1/2" src={featured} alt="" />
                    <div className="md:max-w-lg">
                        <h3 className="text-2xl">March 20, 2023</h3>
                        <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4">Read More</button>
                    </div>
                </div>
        </div>
    );
};

export default Featured;