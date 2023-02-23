import Link from "next/link";

export default function Links() {
  const linkHoverClassName = "hover:opacity-20 transition-all";
  return <div className="font-extralight text-neutral-600 my-4 flex flex-row space-x-3">
    <Link className={`rounded ${linkHoverClassName}`} href="/">
      Home
    </Link>
    <Link className={`rounded ${linkHoverClassName}`} href="/about">
      About
    </Link>
    <Link className={`rounded ${linkHoverClassName}`} href="/blog">
      Blog
    </Link>
    <Link className={`rounded ${linkHoverClassName}`} href="/contact">
      Contact
    </Link>
  </div>
}
