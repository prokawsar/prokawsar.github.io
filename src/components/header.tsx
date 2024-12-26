import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full flex justify-center bg-zinc-200 dark:bg-zinc-800 bg-opacity-20 backdrop-blur-2xl">
      <div className="relative flex flex-row w-full mx-auto max-w-6xl justify-between p-5 sm:px-0">
        <Link href={"/"} className="font-bold uppercase">
          <span className="text-4xl font-extrabold">K</span>
          <span className="text-2xl hover:text-3xl font-medium duration-200">
            awsar
          </span>
        </Link>
      </div>
    </div>
  );
}
