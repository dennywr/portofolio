import { FaInstagram } from "react-icons/fa";

export default function Socmed({ url, children }) {
  return (
    <a
      href={url}
      target="_blank"
      className="hover:ring-primary mt-3 inline-block text-slate-400 hover:rounded-lg hover:text-slate-300 hover:ring-2"
    >
      {children}
    </a>
  );
}
