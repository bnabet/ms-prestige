import { useQuery } from "@tanstack/react-query";

async function fetchCars() {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const response = await fetch(`${apiBaseUrl}/api/cars`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export function useGetCars() {
  return useQuery({
    queryKey: ["cars", "all"],
    queryFn: fetchCars,
  });
}
