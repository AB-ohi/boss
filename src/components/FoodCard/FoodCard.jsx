import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [, refetch]  = useCart()
  const location = useLocation()
  const { image, name, recipe, price, _id } = item;
  const handelAddToCart = (item) => {
    console.log(item);
    if(user && user.email){
      const cartItem = {FoodId: _id, name, image, price, email:user.email}
      fetch('http://localhost:5000/carts',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.insertedId){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your food added on the cart.',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Pls login to add the cart !',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
            navigate('/login', {state:{from: location}})
        }
      })
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-[#111827] rounded-md absolute right-1 text-white mt-4 mr-4 p-3">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handelAddToCart(item)}
            className="btn btn-outline border-0 border-b-4"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
