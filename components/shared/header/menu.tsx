import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant={"ghost"}>
          <Link href={"/cart"}>
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>

        <Button asChild variant={"default"}>
          <Link href={"/sign-in"}>
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>

          <SheetContent>
            <div className=" flex flex-col items-start ml-6">
              <SheetTitle>Menu</SheetTitle>
              <ModeToggle />
              <Button asChild variant={"ghost"}>
                <Link href={"/cart"}>
                  <ShoppingCartIcon /> Cart
                </Link>
              </Button>

              <Button asChild variant={"default"}>
                <Link href={"/sign-in"}>
                  <UserIcon /> Sign In
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
