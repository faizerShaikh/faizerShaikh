import React from "react";
import { Heading } from "./common";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { LuMail } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import ContactMeForm from "./common/contact-me-form";

const ContactMe = () => {
  return (
    <section id='contact-me'>
      <Heading number={4} title='get in touch' />
      <div className='mx-auto md:my-32 my-28 grid grid-cols-1 px-0 sm:px-16 lg:px-0 lg:grid-cols-2 gap-10'>
        <ContactMeForm />
        <div
          className='justify-center md:items-start flex flex-col h-full gap-6'
          data-aos='fade-left'
        >
          <div className='flex justify-start items-center gap-5'>
            <div className='flex justify-center items-center p-5 rounded-full bg-secondary'>
              <LiaPhoneVolumeSolid fontSize={32} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className=' text-text-color-2 text-base font-normal mb-0'>
                Phone Number
              </p>
              <a
                className='text-text-color-2 font-medium text-lg no-underline break-all'
                href='tel:+917030652233'
              >
                +91 7030652233
              </a>
            </div>
          </div>
          <div className='flex justify-start items-center gap-5'>
            <div className='flex justify-center items-center p-5 rounded-full bg-secondary'>
              <LuMail fontSize={32} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className=' text-text-color-2 text-base font-normal mb-0'>
                Email Address
              </p>
              <a
                className='text-text-color-2 font-medium text-lg no-underline break-all'
                href='mailto:+917030652233'
              >
                faizershaikh25@gmail.com
              </a>
            </div>
          </div>
          <div className='flex justify-start items-center gap-5'>
            <div className='flex justify-center items-center p-5 rounded-full bg-secondary'>
              <LuMail fontSize={32} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className=' text-text-color-2 text-base font-normal mb-0'>
                Address
              </p>
              <p className='text-text-color-2 font-medium text-lg no-underline break-all'>
                Kondhwa Khurd, Pune 411048,
                <br /> Maharashtra, India
              </p>
            </div>
          </div>
          <div className='flex justify-start items-center gap-5'>
            <div className='flex justify-center items-center p-5 rounded-full bg-secondary'>
              <IoShareSocialOutline fontSize={32} />
            </div>
            <div className='flex flex-col gap-1'>
              <p className=' text-text-color-2 text-base font-normal mb-0 break-all'>
                Or Find Me On Social Media Instead
              </p>
              <div className='flex justify-start items-center py-3 gap-5'>
                <a
                  href='https://www.instagram.com/sahil.shaikh.25/'
                  target='__blank'
                >
                  <div className='flex justify-center items-center cursor-pointer'>
                    <FiInstagram
                      fontSize={20}
                      className='hover:text-neutral-200'
                    />
                  </div>
                </a>
                <a
                  href='https://www.linkedin.com/in/faizer-shaikh/'
                  target='__blank'
                >
                  <div className='flex justify-center items-center cursor-pointer'>
                    <GrLinkedin
                      fontSize={20}
                      className='hover:text-neutral-200'
                    />
                  </div>
                </a>{" "}
                <a href='https://github.com/faizerShaikh' target='__blank'>
                  <div className='flex justify-center items-center cursor-pointer'>
                    <FaGithub
                      fontSize={20}
                      className='hover:text-neutral-200'
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
