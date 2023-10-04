import { useSchool } from "@/hooks/schools";
import { useTeam } from "@/hooks/teams";
import Error from "next/error";
import { Loading } from "@/components/loading";
import { PlayerCard } from "@/components/player-card";

export default function Team() {
  const { school, isLoading: isSchoolLoading } = useSchool();
  const { team, isLoading: isTeamLoading } = useTeam();
  console.log(school, team);
  const isLoading = isSchoolLoading || isTeamLoading;
  if (isLoading) {
    return <Loading />;
  }

  if (!team || !school) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      <img
        src={team.photo_url}
        className="h-56 rounded-md object-cover aspect-2 mx-auto mb-4"
      />
      <p>
        {school?.name} {team?.name}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {team.players.map((player) => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </div>
    </div>
  );
}
