import { School } from "@/models";
import { useQuery } from "react-query";

const getSchools = async () => {
  const response = await fetch("/api/v1/schools.json");
  return await response.json();
};

export const useSchools = () => {
  return useQuery<School[]>({
    queryKey: ["schools"],
    queryFn: getSchools,
  });
};
