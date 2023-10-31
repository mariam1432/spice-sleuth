import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
} from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Spice<span className="text-yellow-500">Sleuth</span>
        </h2>
        <p className="mb-4">
          Follow us on social media for the latest updates and delicious
          recipes!
        </p>

        <div className="flex justify-center mb-6">
          <a href="#" className="mr-4">
            <SlSocialFacebook />
          </a>
          <a href="#" className="mr-4">
            <SlSocialInstagram />
          </a>
          <a href="#" className="mr-4">
            <SlSocialPintarest />
          </a>
        </div>
        <div className="ms-auto w-full grid grid-cols-2  md:grid-cols-4">
          <article className="mb-2">
            <h4 className="text-yellow-500">Categories</h4>
            <ul className="text-sm">
              <li>
                <a href="">Baked</a>
              </li>
              <li>
                <a href="">Vegan</a>
              </li>
              <li>
                <a href="">Fried</a>
              </li>
              <li>
                <a href="">Desserts</a>
              </li>
              <li>
                <a href="">Curries</a>
              </li>
            </ul>
          </article>
          <article className="mb-2">
            <h4 className="text-yellow-500">Explore</h4>
            <ul className="text-sm">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </article>
          <article className="mb-2">
            <h4 className="text-yellow-500">Recipes</h4>
            <ul className="text-sm">
              <li>
                <a href="">Newest Recipes</a>
              </li>
              <li>
                <a href="">Featured Recipes</a>
              </li>
              <li>
                <a href="">Share Your Recipe </a>
              </li>
            </ul>
          </article>
          <article className="mb-2">
            <h4 className="text-yellow-500">Contact</h4>
            <ul className="text-sm">
              <li>
                <a href="">Abc street</a>
              </li>
              <li>
                <a href="">support@spicesleuth.com</a>
              </li>
              <li>
                <a href="">971-555-023 399</a>
              </li>
            </ul>
          </article>
        </div>

        <p className="text-xs">
          &copy; 2023 Spice Sleuth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
