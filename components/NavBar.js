import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/" className={router.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={router.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
      </div>
      <style jsx global>
        {`
          .active {
            color: tomato;
          }
          a {
            text-decoration: none;
          }
        `}
      </style>
    </nav>
  );
}
