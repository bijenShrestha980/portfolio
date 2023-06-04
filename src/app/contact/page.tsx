"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import Animate from "../components/animate/Animate";

const Contact = () => {
  return (
    <Animate>
      <div className="w-full bg-white p-6 rounded-[8px] ">
        <h3 className="mb-6">Get in Touch</h3>
        <Form />
      </div>
    </Animate>
  );
};

const Form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    setLoading(true);

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
            setLoading(false);
          }
          setLoading(false);
        },
        (error) => {
          // show the user an error
          console.log(error);
          setLoading(false);
        }
      );
  };
  return (
    <form
      // @ts-ignore
      ref={form}
      onSubmit={(_: React.FormEvent<HTMLFormElement>) => sendEmail}
      className="w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="user_name" className="font-semibold">
          Name :
        </label>
        <input
          type="text"
          name="user_name"
          className="rounded-[6px] bg-[#f1f5f9] outline-none p-2 text-[#475569] font-semibold"
        />
        <label htmlFor="user_email" className="font-semibold">
          Email :
        </label>
        <input
          type="email"
          name="user_email"
          required
          className="rounded-[6px] bg-[#f1f5f9] outline-none p-2 text-[#475569] font-semibold"
        />
        <label htmlFor="message" className="font-semibold">
          Message :
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="rounded-[6px] bg-[#f1f5f9] outline-none p-2 text-[#475569] font-semibold mb-4"
        />
        <div className="w-full flex flex-col justify-end items-end ">
          <input
            type="submit"
            value={loading ? `Sending...` : `Send`}
            disabled={loading ? true : false}
            className="text-white bg-brand_primary font-semibold rounded-[6px] w-[150px] p-2 cursor-pointer custom-transition hover:scale-105"
          />
          {message && <p className="font-semibold">{message}</p>}
        </div>
      </div>
    </form>
  );
};

export default Contact;
