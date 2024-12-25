import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios"
const RegisterForm = () => {
  const { register, handleSubmit, watch, } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const degrees = [
    "-select-",
    "BCA",
    "MCA",
    "B.Tech",
    "M.Tech",
    "MBA",
    "PhD",
    "Diploma",
    "BA",
    "BBA",
    "BSc",
    "MSc",
    "LLB",
    "LLM",
    "B.Ed",
    "M.Ed",
    "B.Pharm",
    "M.Pharm",
    "B.Arch",
    "M.Arch",
    "B.Com",
    "M.Com",
    "CA",
    "CS",
    "ICWA",
    "BDS",
    "MDS",
    "MBBS",
    "MD",
    "BHMS",
    "BAMS",
    "BPT",
    "MPT",
    "PGDM",
    "MSW",
    "BFA",
    "MFA",
    "BHM",
    "MHM"
  ];


  const selecteRole = watch('role')
  const selecteDegree = watch('degree')
  const selectExperience = watch('jobExperience')


  const onSubmit = (data) => {
    console.log(data);
    const formdata = new FormData()


    formdata.append('name', data.name)
    formdata.append('email', data.email)
    formdata.append('password', data.password)
    formdata.append('role', data.role)




    if (data.role === "jobseeker") {
      formdata.append('jobseeker', JSON.stringify({
        education: [
          {
            degree: data.degree,
            institution: data.institution,
            year: data.year
          }
        ],
        experience: [
          {
          company: data.company,
          duration: data.duration,
          jobRole: data.jobRole
        }
      ],

      }))
      formdata.append(
        'skill',
        data.skill.split(/[ ,]+/).filter((skill) => skill.trim() !== '')
      );
      formdata.append('resume', data.resume[0]);
      console.log(data.resume[0]);
    }


    else if (data.role === "recruiter") {
      formdata.append('recruiter', JSON.stringify({
        companyName: data.companyName,
        companyWebsite: data.companyWebsite
      }))
    }
    console.log(formdata);
    axios.post('http://localhost:8000/api/register', formdata, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((res) =>
      console.log(res))

  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex-col mt-2 flex items-center justify-center">
   
      <div className="w-full  max-w-md px-6 py-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div className="p-6  space-y-4 sm:p-4">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
            Create an account in <span className="text-primary-700">  Job<span className="text-orange-500">Hub</span></span>
          </h1>

          {/* Form */}
          <form className="space-y-4 scrollbar-hide overflow-y-scroll h-96" onSubmit={handleSubmit(onSubmit)}>
            {/* Your Name Input */}
            <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                {...register("name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                {...register('email')}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register('password')}
                placeholder="Enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-7" />
                ) : (
                  <FaEyeSlash className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-7" />
                )}
              </div>
            </div>


            {/* Role Selector Section */}
            <div className="flex flex-col items-center justify-center py-1">
              <h2 className="text-sm mb-1 text-gray-900 dark:text-white">Select Your Role</h2>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="jobseeker"
                    {...register('role')}
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
                    {...register('role')}
                    value="recruiter"
                    className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <label htmlFor="recruiter" className="text-sm text-gray-700 dark:text-white">
                    Recruiter
                  </label>
                </div>
              </div>
            </div>


            {/* add input of selected jobseeker */}

            {
              selecteRole === 'jobseeker' && (
                <div>

                  <div class="relative">
                    <label for="degree" class=" block text-sm font-medium text-gray-900 mb-2">Select Degree<span className="text-red-600">*</span></label>
                    <select   placeholder="-select-" {...register('degree')} class="bg-white border border-gray-300 text-gray-700 rounded-lg shadow-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-10 overflow-y-scroll">
                      {
                        degrees.map((ele, i) => (
                          <option  key={i} value={ele}>{ele}</option>

                        ))
                      }
                    </select>
                  </div>



                  <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      institution<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("institution")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your institution"
                    // required
                    />
                  </div>
                  <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      year<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("year")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your name"
                    // required
                    />
                  </div>
                  <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      skills<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("skill")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your name"
                    // required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      resume<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="file"
                      {...register("resume")}
                      multiple={false}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>


                  {/* are you fresher or experience  */}

                  <div className="flex flex-col items-center justify-center py-1">
                    <h2 className="text-sm mb-1 text-gray-900 dark:text-white">Are You</h2>
                    <div className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="fresher"
                          {...register('jobExperience')}
                          className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="jobseeker" className="text-sm text-gray-700 dark:text-white">
                          Fresher
                        </label>
                      </div>


                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          {...register('jobExperience')}
                          value="experience"
                          className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="recruiter" className="text-sm text-gray-700 dark:text-white">
                          Experience
                        </label>
                      </div>
                    </div>
                  </div>

                  {
                    selectExperience === 'experience' && (
                      <div>
                        <div>
                          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            company<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            {...register("company")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div>
                          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            role<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            {...register("jobRole")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div>
                          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            duration<span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            {...register("duration")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter your name"
                            required
                          />
                        </div>

                      </div>
                    )
                  }
                </div>
              )
            }

            {
              selecteRole === 'recruiter' && (
                <div>
                  <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Company Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("companyName")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter company name"
                      required
                    />
                  </div>

                  <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      company website<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("companyWebsite")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter company website link"
                      required
                    />
                  </div>

        
                </div>
              )
            }

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
