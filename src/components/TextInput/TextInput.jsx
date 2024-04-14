export default function TextInput({
  label,
  name,
  type = "text",
  required = true,
}) {
  return (
    <>
      <label className="text-primary lg:text-xl">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="border-b-2 border-b-primary bg-transparent px-2 py-1 outline-none focus:outline-none"
      />
    </>
  );
}
