import { School } from "@/models";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getSchools = async () => {
  const response = await fetch("/api/v1/schools.json");
  return await response.json();
};

export const useSchools = () => {
  return useQuery<School[]>({
    queryKey: ["schools"],
    queryFn: getSchools,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const useSchool = (schoolId?: string) => {
  const router = useRouter();
  const { data: schools, ...rest } = useSchools();
  const school = schools?.find(
    (school) => school.id === (schoolId || router.query.schoolId)
  );
  return { ...rest, school };
};
