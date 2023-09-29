import { TeamCard } from "@/components/team-card";
import { useSchools } from "@/queries/schools";
import { useTeams } from "@/queries/teams";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { data: schools } = useSchools();
  const school = schools?.find((school) => school.id === router.query.id);
  const { data: teams } = useTeams(school?.id);

  const filteredTeams = teams?.filter(
    (team) => team.season.name === "Fall" && team.year.name === "2023/2024"
  );

  return (
    <div>
      <p>
        {school?.name} {teams?.length}
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {school &&
          filteredTeams?.map((team) => (
            <TeamCard key={team.id} team={team} school={school} />
          ))}
      </div>
    </div>
  );
}
