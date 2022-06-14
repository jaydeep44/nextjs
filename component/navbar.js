import Link from "next/link";
const navbar = () => {
  return (
    <div className="h222">
      <div className="header">
        <Link href="/">
          <a className="csss">Home</a>
        </Link>
        <Link href="/shop">
          <a className="csss">Shop</a>
        </Link>
        <Link href="/about">
          <a className="csss">About</a>
        </Link>
        <Link href="/contact">
          <a className="csss">Contact</a>
        </Link>
        <Link href="/blog">
          <a className="csss">Blog</a>
        </Link>
      </div>
      <Link href="/login">
        <a className="log">Login</a>
      </Link>
    </div>
  );
};

export default navbar;
