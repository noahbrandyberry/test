import { Loading } from "@/components/loading";
import { TeamCard } from "@/components/team-card";
import { useSchool } from "@/hooks/schools";
import { useTeams } from "@/hooks/teams";

export default function School() {
  const { school, isLoading } = useSchool();
  const { data: teams } = useTeams(school?.id);

  const filteredTeams = teams?.filter(
    (team) => team.season.name === "Fall" && team.year.name === "2023/2024"
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p>
        {school?.name} {teams?.length}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {school &&
          filteredTeams?.map((team) => (
            <TeamCard
              key={team.id}
              teamId={team.id}
              schoolId={team.school_id}
            />
          ))}
      </div>
    </div>
  );
}
