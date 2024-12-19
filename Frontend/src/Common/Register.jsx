import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios'
const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:8000/api/register',data)
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex-col mt-2 flex items-center justify-center">
        <a href="#" className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white">
          <p className="text-primary-700">Job<span className="text-orange">Hub</span></p>
        </a>
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div className="p-6  space-y-4 sm:p-4">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
            Create an account in
          </h1>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Your Name Input */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="text"
                {...register("name")}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                {...register('email')}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
              </label>
              <input
                type="number"
                {...register('number')}
                id="number"
                placeholder="Enter your number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                {...register('password')}
                id="password"
                placeholder="Enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>

            {/* Role Selector Section */}
            <div className="flex flex-col items-center justify-center py-1">
              <h2 className="text-lg mb-1 text-gray-900 dark:text-white">Select Your Role</h2>

              <div className="flex space-x-6">
                {/* Jobseeker Radio Button */}
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="jobseeker"
                    name="role"
                    value="jobseeker"
                    // {...register('jobseeker')}
                    className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="jobseeker" className="text-sm text-gray-700 dark:text-white">
                    Jobseeker
                  </label>
                </div>

                {/* Recruiter Radio Button */}
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="recruiter"
                    name="role"
                    // {...register('recruiter')}
                    value="recruiter"
                  
                    className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="recruiter" className="text-sm text-gray-700 dark:text-white">
                    Recruiter
                  </label>
                </div>
              </div>
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
    </section>
  );
};

export default RegisterForm;
