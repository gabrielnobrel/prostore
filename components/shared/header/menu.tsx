import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCartIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

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

        <UserButton />
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

              <UserButton />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
