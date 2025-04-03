import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contacts() {
  const [postError, setPostError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("/.netlify/functions/proxy", data)
      .then(() => {
        setTimeout(() => {
          setPostError("");
        }, 2000);
        setPostError("Your message has been sent.");
        data;
        reset();
      })
      .catch((error) => setPostError(error.message));
  };

  return (
    <>
      <div className="content-block">
        <h1 className="content-title">Contacts</h1>
      </div>
      <div className="contact-form bg-white border border-[#D5D5D6] shadow-md shadow-gray-200 py-[40px] px-[30px] rounded-xl text-center max-w-[600px] mx-auto my-[50px]">
        <div className="text-left mb-3">
          <h2 className="text-3xl text-[#EB1D25] font-bold">Reach Out to Us</h2>
          <p className="text-md text-gray-500">
            Let us know how we can assist you by completing the form.
          </p>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            style={errors.name && { border: "1px solid red" }}
            {...register("name", { required: "Name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-left mt-[-10px] pl-[10px] text-sm mb-2">
              {errors.name.message}
            </p>
          )}
          <input
            type="text"
            style={errors.email && { border: "1px solid red" }}
            {...register("email", {
              validate: (value) => {
                if (!value) {
                  return "Email address is required";
                } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(value)) {
                  return "Enter a valid email address";
                }
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-left mt-[-10px] pl-[10px] text-sm mb-2">
              {errors.email.message}
            </p>
          )}
          <textarea
            style={errors.message && { border: "1px solid red" }}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 15,
                message: "Must be at least 15 characters",
              },
            })}
            aria-invalid={errors.message ? "true" : "false"}
            className="mb-3 resize-none"
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-red-500 text-left mt-[-10px] pl-[10px] text-sm mb-2">
              {errors.message.message}
            </p>
          )}
          {postError === "Your message has been sent." ? (
            <p className="text-green-700 text-left mt-[-10px] pl-[10px] text-sm mb-2">
              {postError}
            </p>
          ) : (
            <p className="text-red-500 text-left mt-[-10px] pl-[10px] text-sm mb-2">
              {postError}
            </p>
          )}
          <button
            className="w-[100px] uppercase text-white bg-[#eb1d25] tracking-[1px] font-medium py-[5px] px-[15px] rounded-[7px] hover:text-[#fbf1f3] hover:bg-[#dd1331] transition-all"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contacts;
