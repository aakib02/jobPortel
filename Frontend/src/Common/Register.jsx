import React from "react";
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'


const RegisterForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit=(data)=>{
  console.log(data);
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900 mt-5">
      <div className="flex flex-col items-center justify-center px-6 py-6  mx-auto md:h-screen lg:py-0">
      <a
          href="#"
          className="flex items-center  mt-8 text-2xl font-semibold text-gray-900 dark:text-white"
        >
         
         <p className="text-primary-700 " >Job<span className="text-orange">Hub</span></p>
        </a>
        <div className="w-full mt-5 bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8 ">
            <h1 className="text-xl mr-1 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account in
            </h1>
         
       
            {/* Form */}
            <form className="space-y-4" action="#" onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  {...register('email')}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="enter your email"
                  required
                />
              </div>


              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number
                </label>
                <input
                  type="number"
                  {...register('number')}
                  id="number"
                  placeholder="enter your number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register('password')}
                  id="password"
                  placeholder="enter your password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
          

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>

              {/* Already have an account */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link to={'/'}>
                <a
                  href="#"
                  className="font-medium text-primary-700 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
