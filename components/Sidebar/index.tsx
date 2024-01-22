"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import observable from "@/lib/observable";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    observable.subscribe((value) => setIsOpen(value));
    return () => {
      observable.unsubscribe((value) => setIsOpen(value));
    };
  }, []);
  return (
    <Drawer
      direction="left"
      open={isOpen}
      onOpenChange={(value) => observable.notify(value)}
    >
      <DrawerContent className="w-1/3 min-w-[300px] h-full [&>*:nth-child(1)]:hidden sm:text-left md:text-left lg:text-left">
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
