import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/ui/avatar";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="bg-white border-b flex h-[75px] items-center dark:bg-black dark:border-b-[#272727]">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="border-2 dark:border-[#272727] size-12">
            <AvatarImage src="/portfolio/assets/img/pp.jpg" alt="@ongnikkom" />
            <AvatarFallback>NO</AvatarFallback>
          </Avatar>
          <div>
            <a href="/portfolio">
              <h1 className="font-bold">Nikko Ong</h1>
            </a>

            <p className="opacity-80 text-xs">
              Fullstack Developer | Guitar Enthusiast | Tech Lover
            </p>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
