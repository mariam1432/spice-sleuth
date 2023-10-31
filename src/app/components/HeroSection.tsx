import Image from "next/image";
import img from "../../assets/hero-img.svg";
import { BiSearch } from "react-icons/Bi";

export default function Hero() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          priority
          src={img}
          height={500}
          width={500}
          alt="Follow us on Twitter"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Discover a World of Culinary Delights
          </h1>
          <p className="py-6">
            Explore Thousands of Recipes from Around the Globe, Tailored Just
            for You.
          </p>
          <div className="flex flex-row space-x-4 ">
            <button className="btn bg-yellow-400">Get Started</button>
            <input
              type="search"
              placeholder="Search recipes"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-yellow-400">
              <BiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
