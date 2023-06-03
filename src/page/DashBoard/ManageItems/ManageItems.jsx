import { RiDeleteBin6Line } from "react-icons/ri";
import useMenu from "../../../Hooks/Hooks";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { FaUsersCog } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
  const handelToDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("delete res", res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle SubHeading="Hurry Up!" Heading="MANAGE ALL ITEMS" />
      <div className="overflow-x-auto">
        <h2 className="text-black text-3xl text-center font-semibold">
          Total items:{menu.length}
        </h2>
        <table className="table m-auto">
          {/* head */}
          <thead>
            <tr>
              <th>*</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <th>
                  <button className="p-3 btn text-white bg-[#D1A054] rounded-md">
                    <FaUsersCog className="text-2xl" />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handelToDelete(item)}
                    className="p-3 btn text-white bg-red-700 rounded-md"
                  >
                    <RiDeleteBin6Line className="text-2xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
