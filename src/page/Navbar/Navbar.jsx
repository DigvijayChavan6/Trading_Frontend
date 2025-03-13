import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Sidebar from "./Sidebar";


const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <DragHandleHorizontalIcon className="h-7 w-7" />
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="/src/assets/y.webp" />
                  </Avatar>

                  <div>
                    <span className="font-bold text-orange-600">YUKTI</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>

            <Sidebar />
          </SheetContent>
        </Sheet>

        <div className="flex items-center space-x-1">
          <Avatar>
            <AvatarImage src="/src/assets/y.webp" />
          </Avatar>
          <p className="cursor-pointer text-orange-600 font-bold">YUKTI</p>
        </div>

        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>

      <div>
        <Avatar>
          <AvatarFallback>DJ</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
