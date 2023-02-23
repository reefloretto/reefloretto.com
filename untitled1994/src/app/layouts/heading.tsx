import Link from "next/link";

export default function Heading() {
  const linkHoverClassName = "hover:opacity-20 transition-all";
  return <Link className={`${linkHoverClassName}`} href="/">
    <h1 className="font-bold text-3xl">Reef Loretto</h1>
  </Link>
}
