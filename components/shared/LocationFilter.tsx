import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Country } from "@/types";

interface LocationFilterProps {
  otherclasses: string;
  containerClasses?: string;
  countriesList: Country[];
}

const LocationFilter = ({
  otherclasses,
  containerClasses,
  countriesList,
}: LocationFilterProps) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`body-regular light-border background-light800_dark300 
            text-dark500_light700 border px-5 py-2.5 ${otherclasses}`}
        >
          <div className="line-clamp-1 flex flex-1 text-left">
            <Image
              src="/assets/icons/location.svg"
              alt="location"
              width={20}
              height={20}
              className="mr-2 bg-transparent"
            />
            <SelectValue placeholder="Select a location" />
          </div>
        </SelectTrigger>
        <SelectContent
          className="text-dark500_light700 small-regular border-none
        bg-light-900 dark:bg-dark-300"
        >
          <SelectGroup>
            {countriesList ? (
              countriesList.map((country: Country) => (
                <SelectItem
                  value={country.name.common}
                  key={country.name.common}
                  className="cursor-pointer focus:bg-light-900 dark:focus:bg-dark-400"
                >
                  {country.name.common}
                </SelectItem>
              ))
            ) : (
              <p
                className="text-dark500_light700 small-regular border-none
        bg-light-900 dark:bg-dark-300"
              >
                No results found
              </p>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationFilter;
