import { useRef } from "react";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        },
      );

    form.current.reset();
  };
  return (
    <section
      id="contact"
      className="container mx-auto mb-20 flex h-screen items-center justify-center lg:mb-10"
    >
      <div className="container space-y-5  lg:flex lg:justify-around lg:space-y-0">
        <div className="lg:w-1/3">
          <h1 className="text-2xl font-bold text-primary lg:text-4xl">
            Let's Talk
          </h1>
          <p className="text-lg text-slate-700 lg:mt-3 lg:w-[73%] xl:w-[80%] 2xl:w-full">
            New project, freelance inquiry or even a coffe.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 lg:w-1/2"
        >
          <TextInput label="Name" type="text" name="name" />
          <TextInput label="Email" type="email" name="email" />
          <TextArea label="Message" name="message" />
          <Button width={"w-[10rem] py-3 xl:py-4"}>Send Message</Button>
        </form>
      </div>
    </section>
  );
}
