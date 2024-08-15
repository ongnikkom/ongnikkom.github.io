import { Separator } from "@/shadcn/ui/separator";
import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t flex py-6 dark:bg-black dark:border-t-[#272727] sm:pb-8 sm:pt-8 md:pb-12 md:pt-24">
      <div className="container flex flex-col">
        <div className="text-center md:self-end md:text-left">
          <h3 className="font-bold">Contact</h3>
          <p className="opacity-80 mt-2 text-sm">
            If you’d like to get in touch, feel free to reach out via{" "}
            <a className="underline" href="mailto:ong.nikko.m@gmail.com">
              email
            </a>
          </p>
        </div>

        <Separator className="my-6 sm:my-8" />

        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <p className="opacity-80 text-center text-sm">
            &copy; {new Date().getFullYear()} Nikko Ong. All rights reserved.
          </p>

          <ul className="flex gap-4 justify-center mt-4 sm:mt-0">
            <li>
              <a href="https://github.com/ongnikkom">
                <FaGithub className="size-6" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/ongnikko">
                <FaLinkedin className="size-6" />
              </a>
            </li>

            <li>
              <a href="https://instagram.com/ongnikko.m">
                <FaInstagram className="size-6" />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/ongnikko.m">
                <FaFacebookSquare className="size-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
