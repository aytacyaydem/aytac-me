"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import observable from "@/lib/observable";

type AnimatedHamburgerIconProps = {
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AnimatedHamburgerIcon = ({
  className = "tham tham-e-spin tham-w-5",
  isOpen,
  setIsOpen,
}: AnimatedHamburgerIconProps) => {
  useEffect(() => {
    observable.subscribe((value) => setIsOpen(value));
    return () => {
      observable.unsubscribe((value) => setIsOpen(value));
    };
  }, [setIsOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    observable.notify(isOpen);
  }, [isOpen]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      className="md:hidden"
    >
      <div className={twMerge(isOpen && "tham-active", className)}>
        <div className="tham-box">
          <div className="tham-inner" />
        </div>
      </div>
    </Button>
  );
};

export default AnimatedHamburgerIcon;
