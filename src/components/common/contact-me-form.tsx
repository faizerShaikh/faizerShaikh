"use client";
import React, { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactMeForm = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    if (
      !data.name ||
      !data.lastName ||
      !data.email ||
      !data.number ||
      !data.message
    ) {
      setLoading(false);
      toast.error("Please enter data in all fields");
      return false;
    }

    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        toast.success(
          `Thank you for your interest ${data.name}! We will get back to you soon!`
        );
        setData({
          name: "",
          lastName: "",
          email: "",
          number: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Ooops! unfortunately some error has occurred.");
      });
    return true;
  };

  return (
    <div className='bg-primary-light p-10 rounded-xl'>
      <h3 className='md:text-5xl text-3xl font-medium mb-5 text-text-color-2'>
        Let's work together!
      </h3>
      <h4 className='text-base mb-5'>
        Let's Collaborate and Create Something Amazing Together! Designing and
        Building Seamless Applications is My Passion.
      </h4>
      <div className='grid gap-5 grid-cols-2'>
        <input
          value={data["name"]}
          name='name'
          onChange={(e) =>
            setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          placeholder='First Name'
          className='outline-none hover:opacity-70 bg-primary px-5 md:py-3 py-2 rounded-lg text-base text-text-color-1'
          type='text'
        />
        <input
          value={data["lastName"]}
          name='lastName'
          onChange={(e) =>
            setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          placeholder='Last Name'
          className='outline-none hover:opacity-70 bg-primary px-5 md:py-3 py-2 rounded-lg text-base text-text-color-1'
          type='text'
        />
        <input
          value={data["email"]}
          name='email'
          onChange={(e) =>
            setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          placeholder='Your Email'
          className='outline-none hover:opacity-70 bg-primary px-5 md:py-3 py-2 rounded-lg text-base text-text-color-1'
          type='email'
        />
        <input
          value={data["number"]}
          name='number'
          onChange={(e) =>
            setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          placeholder='Phone Number'
          className='outline-none hover:opacity-70 bg-primary px-5 md:py-3 py-2 rounded-lg text-base text-text-color-1'
          type='text'
        />
        <textarea
          value={data["message"]}
          name='message'
          onChange={(e) =>
            setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          placeholder='Your Message'
          cols={100}
          rows={10}
          className='col-span-2 outline-none hover:opacity-70 bg-primary px-5 md:py-3 py-2 rounded-lg text-base text-text-color-1 resize-none'
        ></textarea>
        <div className='col-span-2 flex justify-start items-center'>
          <button
            onClick={(e) => handleSubmit(e)}
            disabled={loading}
            className='flex justify-between items-center bg-text-color-2 disabled:opacity-50 disabled:cursor-not-allowed text-center md:py-3 py-2 rounded-xl md:px-10 px-5 text-primary font-medium hover:bg-text-color-1 hover:font-semibold transition-all ease-in delay-100'
          >
            {loading && (
              <AiOutlineLoading3Quarters
                className='mr-2 h-4 w-4 animate-spin'
                fontSize={18}
              />
            )}
            Send Message
          </button>
        </div>
      </div>
      <Toaster position='bottom-center' richColors />
    </div>
  );
};

export default ContactMeForm;
