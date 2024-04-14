import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sorry, this feature is not working now. Please try again later :)");
  };
  return (
    <section className="container mx-auto flex h-screen items-center justify-center">
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
          onSubmit={handleSubmit}
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
