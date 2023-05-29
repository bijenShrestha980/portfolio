"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import Animate from "../components/animate/Animate";

const Contact = () => {
  return (
    <Animate>
      <div className="w-full bg-white p-6 rounded-[8px] ">
        <h5 className="mb-6">Get in Touch</h5>
        <Form />
      </div>
    </Animate>
  );
};

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_lrrtwkj",
        "template_wo3k4ju",
        // @ts-ignore
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (result) => {
          // show the user a success message
          // console.log(result);
          if (result.status === 200) {
            toast.success("Email sent !");
            setMessage("Email sent !");
          }
        },
        (error) => {
          // show the user an error
          console.log(error);
        }
      );
  };
  return (
    // @ts-ignore
    <form ref={form} onSubmit={sendEmail} className="w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="user_name" className="font-semibold">
          Name :
        </label>
        <input
          type="text"
          name="user_name"
          className="rounded-[6px] bg-[#f1f5f9] outline-none p-2 text-[#475569] font-semibold"
        />
        <label htmlFor="email" className="font-semibold">
          Email :
        </label>
        <input
          type="email"
          name="email"
          className="rounded-[6px] bg-[#f1f5f9] outline-none p-2 text-[#475569] font-semibold"
        />
        <label htmlFor="message" className="font-semibold">
          Message :
        </label>
        <textarea
          name="message"
          rows={4}
          className="rounded-[6px] bg-[#f1f5f9] outline-none p-2 text-[#475569] font-semibold mb-4"
        />
        <div className="w-full flex flex-col justify-end items-end ">
          <input
            type="submit"
            value="Send"
            className="text-white bg-brand_primary font-semibold rounded-[6px] w-[150px] p-2 cursor-pointer custom-transition hover:scale-105"
          />
          {message && <p className="font-semibold">{message}</p>}
        </div>
      </div>
    </form>
  );
};

export default Contact;
