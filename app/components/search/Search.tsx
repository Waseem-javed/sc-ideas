import React from "react";
import Form from "next/form";
import { Button, TextField } from "@radix-ui/themes";
import ResetSearch from "@/app/components/search/ResetSearch";
import { SearchIcon } from "lucide-react";

const Search = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false}>
      <TextField.Root
        size="3"
        name="query"
        radius="full"
        defaultValue={query}
        placeholder="Search startup ideas.."
        className="my-5 sm:w-[350px] md:w-[500px] h-[50px] outline-none border-2 border-red-400 text-red-600 placeholder-red-400 search"
      >
        <div className="flex">
          {query && <ResetSearch />}
          <TextField.Slot
            side="right"
            className="focus:outline-none bg-black m-1 rounded-full p-0"
          >
            <Button type="submit" className="bg-transparent" size="1">
              <SearchIcon className="text-white font-bold" />
            </Button>
          </TextField.Slot>
        </div>
      </TextField.Root>
    </Form>
  );
};

export default Search;
