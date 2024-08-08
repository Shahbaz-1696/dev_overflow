import { JobFilterParams } from "./shared.types";

export async function getUserLocation() {
  const response = await fetch("http://ip-api.com/json/?fields=country");
  const location = await response.json();
  return location.country;
}

export async function getAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const allCountries = await response.json();
    return allCountries;
  } catch (error) {
    console.log(error);
  }
}

export async function getJobs(params: JobFilterParams) {
  const { query, page } = params;

  const headers = {
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
  };

  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}&page=${page}`,
    {
      headers,
    }
  );

  const result = await response.json();

  return result.data;
}
