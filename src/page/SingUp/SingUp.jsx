import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext)
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
    })
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
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
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

                {errors.name && <span className="text-red-600 mt-3">This field is required</span>}
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
                {errors.email && <span className="text-red-600 mt-3">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">password</span>
                </label>
                <input
                  type="password"
                  placeholder="type here"
                  name="password"
                //   {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {/* {errors.email && <span className="text-red-600 mt-3">This field is required</span>} */}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", { required: true,
                     minLength:6,
                      maxLength: 20,
                      pattern:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                     })}
                  className="input input-bordered"
                />
                {errors.password?.true ==="required" && <span className="text-red-700">Password is required</span>}
                {errors.password?.true ==="minLength" && <span className="text-red-700">Password must be 6 characters</span>}
                {errors.password?.true ==="maxLength" && <span className="text-red-700">Password must be less then 20 characters</span>}
                {errors.password?.true ==="pattern" && <span className="text-red-700">use @#$%^&*</span>}
                
              </div> */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingUp;
