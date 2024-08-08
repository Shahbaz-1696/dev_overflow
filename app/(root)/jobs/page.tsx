import JobsCard from "@/components/cards/JobsCard";
import LocationFilter from "@/components/shared/LocationFilter";
import NoJobsResult from "@/components/shared/NoJobsResult";
import Pagination from "@/components/shared/Pagination";
import LocalSearch from "@/components/shared/Search/LocalSearch";
import {
  getAllCountries,
  getJobs,
  getUserLocation,
} from "@/lib/actions/jobs.action";
import { Job } from "@/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Jobs | DevOverflow",
};

interface Props {
  searchParams: {
    q: string;
    location: string;
    page: string;
  };
}

const Page = async ({ searchParams }: Props) => {
  const countries = await getAllCountries();
  const userLocation = await getUserLocation();
  const page = parseInt(searchParams.page ?? 1);
  const jobs = await getJobs({
    query: `${searchParams.q} ${searchParams.location} ?? Software Engineer in ${userLocation}`,
    page: searchParams.page ?? 1,
  });
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

      <div className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9">
        {jobs.length > 0 ? (
          jobs.map((job: Job) => {
            if (job.job_title && job.job_title.toLowerCase() !== "undefined") {
              return <JobsCard job={job} key={job.id} />;
            }

            return null;
          })
        ) : (
          <NoJobsResult
            title="Currently no jobs to show"
            description="There are currently no jobs found in this location about your mentioned job position."
          />
        )}
      </div>

      {jobs.length > 0 && (
        <Pagination pageNumber={page} isNext={jobs.length === 10} />
      )}
    </>
  );
};

export default Page;
