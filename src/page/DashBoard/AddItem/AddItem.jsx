import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE__Image_Upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
          console.log(newItem);
          axiosSecure.post('/menu',newItem)
          .then(data => {
            console.log(data.data)
            if(data.data.insertedId){
              Swal.fire({
                icon: 'success',
                title: 'Item added successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
            reset()
          })
        }
      });
  };
  return (
    <div className="w-full  ">
      <SectionTitle
        SubHeading="What is new?"
        Heading="ADD AN ITEM"
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#e4e4e4] m-[70px] p-[50px]"
      >
        <label className="label">
          <span className="label-text font-semibold text-black">
            Recipe name<span className="text-red-700">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="Recipe name"
          class="input text-black input-bordered w-full bg-white"
          {...register("name", { required: true, maxLength: 120 })}
        />
        <div className="md:flex w-full gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-black">
                Category<span className="text-red-700">*</span>
              </span>
            </label>
            <select
              defaultValue="Pick One"
              class="select select-bordered w-full bg-white text-stone-950"
              {...register("category", { required: true })}
            >
              <option disabled>Pick One</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-black">
                Price<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              class="input text-black input-bordered w-full bg-white"
            />
          </div>
        </div>
        <label className="label">
          <span className="label-text font-semibold text-black">
            Recipe Details<span className="text-red-700">*</span>
          </span>
        </label>
        <textarea
          {...register("recipe", { required: true })}
          type="text"
          placeholder="Recipe Details"
          class="input text-black input-bordered w-full h-[250px] bg-white"
        />
        <input
          type="file"
          {...register("image", { required: true })}
          class="file-input bg-transparent file-input-bordered w-full max-w-xs"
        />
        <button
          className="btn flex items-center py-4 px-[30px] mt-8 gap-2 text-white"
          style={{
            background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
          }}
        >
          Add Item<FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItem;
