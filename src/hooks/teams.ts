import { Team } from "@/models";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const getTeams = async (schoolId?: string) => {
  const response = await fetch(`/api/v1/schools/${schoolId}/teams.json`);
  return await response.json();
};

export const useTeams = (schoolId?: string) => {
  return useQuery<Team[]>({
    queryKey: ["teams", schoolId],
    queryFn: () => getTeams(schoolId),
    enabled: !!schoolId,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export const useTeam = (teamId?: string, schoolId?: string) => {
  const router = useRouter();
  const { data: teams, ...rest } = useTeams(
    schoolId || (router.query.schoolId as string)
  );
  const team = teams?.find(
    (team) => team.id === (teamId || router.query.teamId)
  );
  return { ...rest, team };
};
