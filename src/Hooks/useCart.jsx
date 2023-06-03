import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem('access-token')
  // const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user.email}`,
        {headers:{
          authorization: `bearer ${token}`
        }}
      );
      console.log(user.email)
      return res.json();
    },
    // queryFn: async () => {
    //   const res = await axiosSecure(
    //     `/carts?email=${user.email}`,
        
    //   );
    //   console.log(user.email)
    //   return res.data;
    // },
  });
  console.log(cart)
  return [cart, refetch];
};
export default useCart;
