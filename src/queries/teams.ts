import { Team } from "@/models";
import { useQuery } from "react-query";

const getTeams = async (schoolId?: string) => {
  const response = await fetch(`/api/v1/schools/${schoolId}/teams.json`);
  return await response.json();
};

export const useTeams = (schoolId?: string) => {
  return useQuery<Team[]>({
    queryKey: ["teams", schoolId],
    queryFn: () => getTeams(schoolId),
    enabled: !!schoolId,
  });
};
