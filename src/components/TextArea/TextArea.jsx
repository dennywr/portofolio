export default function TextArea({ label, required = true, name }) {
  return (
    <>
      <label className="text-primary lg:text-xl">
        {label} {required && "*"}
      </label>

      <textarea
        name={name}
        required={required}
        cols="30"
        rows="5"
        className="border-b-2 border-b-primary bg-transparent px-2 py-1 outline-none focus:outline-none"
      ></textarea>
    </>
  );
}
