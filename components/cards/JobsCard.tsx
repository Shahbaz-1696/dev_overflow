import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface JobsCardProps {
  logo: string;
  jobTitle: string;
  jobDescription: string;
  location: string;
  locationImage?: string;
  isFullTime: boolean;
  jobLink: string;
}

const JobsCard = ({
  logo,
  jobTitle,
  jobDescription,
  location,
  locationImage,
  isFullTime,
  jobLink,
}: JobsCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
        <div>
          <Image
            src={logo || "/assets/images/site-logo.svg"}
            alt="Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="w-full">
          <div className="flex-between flex-wrap gap-2">
            <p className="base-semibold text-dark200_light900">{jobTitle}</p>
            <div className="hidden sm:flex">
              <div className="flex items-center justify-end">
                <Badge className="background-light800_dark400 gap-2 rounded-2xl px-3 py-1.5">
                  <Image
                    src={locationImage || "/assets/icons/au.svg"}
                    alt="flag"
                    width={20}
                    height={20}
                  />
                  <p className="body-medium text-dark400_light700">
                    {location}
                  </p>
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-dark500_light700 body-regular mt-2 line-clamp-2">
            {jobDescription}
          </p>
          <div className="flex-between mt-8 flex-wrap gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/clock-2.svg"
                  alt="clock"
                  width={20}
                  height={20}
                  className="bg-transparent"
                />
                <p className="body-medium text-light-500">
                  {isFullTime ? "FULLTIME" : "PARTTIME"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/currency-dollar-circle.svg"
                  alt="dollar"
                  width={20}
                  height={20}
                  className="bg-transparent"
                />
                <p className="body-medium text-light-500">NOT DISCLOSED</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={jobLink} className="flex items-center gap-2">
                <p className="body-regular text-primary-500">View Job</p>
                <Image
                  src="/assets/icons/arrow-up-right.svg"
                  alt="Arrow Up Right"
                  width={20}
                  height={20}
                  className="text-primary-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
