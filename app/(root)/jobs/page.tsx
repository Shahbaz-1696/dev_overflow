import JobsCard from "@/components/cards/JobsCard";
import LocationFilter from "@/components/shared/LocationFilter";
import NoJobsResult from "@/components/shared/NoJobsResult";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import { getAllCountries } from "@/lib/actions/jobs.action";
import React from "react";

const Page = async () => {
  const countries = await getAllCountries();
  const result = 1;
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Job Title, Company, or Keywords"
          otherClasses="flex-1"
        />
        <LocationFilter
          otherclasses="min-h-[56px] sm:min-w-[170px]"
          countriesList={countries}
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result > 0 ? (
          <JobsCard
            logo="/assets/images/site-logo.svg"
            jobTitle="Posting Link"
            jobDescription="Using ion propulsion the company’s focus is creating a silent drone with unparalleled power which will completely change how drones are designed. The fully electric"
            location="Australia"
            isFullTime={true}
            jobLink="/"
          />
        ) : (
          <NoJobsResult
            title="Currently no jobs to show"
            description="There are currently no jobs found in this location about your mentioned job position."
          />
        )}
      </div>
    </>
  );
};

export default Page;
