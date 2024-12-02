"use client";
import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button, TextField } from "@radix-ui/themes";

const ResetSearch = () => {
  const reset = () => {
    const form = document.querySelector(".search") as HTMLFormElement;
    if (form instanceof HTMLFormElement) {
      form.reset();
    }
  };

  return (
    <TextField.Slot side="right" className="p-0 m-0">
      <Button
        type="reset"
        onClick={reset}
        className="bg-transparent focus:outline-none"
        size="1"
      >
        <Link className="focus:outline-none" href={"/"}>
          <X className="text-red-600" />
        </Link>
      </Button>
    </TextField.Slot>
  );
};

export default ResetSearch;
