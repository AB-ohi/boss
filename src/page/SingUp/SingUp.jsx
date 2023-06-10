import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {name: data.name, email: data.email}
          fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Bistro Boss | Sing Up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SingUp now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="type here"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />

                  {errors.name && (
                    <span className="text-red-600 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">photoURL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photoURL"
                    {...register("photoURL", { required: true })}
                    className="input input-bordered"
                  />

                  {errors.photoURL && (
                    <span className="text-red-600 mt-3">
                      photoURL is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="type here"
                    name="email"
                    {...register("email", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-3">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="type here"
                    name="password"
                    {...register("password", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-600 mt-3">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <p className="text-center">
              Already registered? <Link to="/login" className="text-purple-700">Go to log in</Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
