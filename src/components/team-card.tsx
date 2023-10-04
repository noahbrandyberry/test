import Link from "next/link";
import { useTeam } from "@/hooks/teams";
import { useSchool } from "@/hooks/schools";

interface TeamCardProps {
  teamId: string;
  schoolId: string;
  showSchoolName?: boolean;
}

export const TeamCard = ({
  teamId,
  schoolId,
  showSchoolName,
}: TeamCardProps) => {
  const { team } = useTeam(teamId, schoolId);
  const { school } = useSchool(schoolId);

  if (!team || !school) {
    return <p>Loading...</p>;
  }

  return (
    <Link
      className="block rounded p-4 shadow bg-white"
      href={`/schools/${school.id}/teams/${team.id}`}
    >
      <img
        src={team.photo_url}
        className="h-56 rounded-md object-cover aspect-2 mx-auto mb-4"
      />

      {showSchoolName ? (
        <p className="text-sm text-gray-600">{school.name}</p>
      ) : null}
      <h2 className="font-medium">{team.name}</h2>

      <div className="mt-4 flex items-center gap-8 text-xs">
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <div className="mt-1.5 sm:mt-0">
            <p className="text-gray-500">Events</p>

            <p className="font-medium">0 Events</p>
          </div>
        </div>

        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <div className="mt-1.5 sm:mt-0">
            <p className="text-gray-500">Roster</p>

            <p className="font-medium">{team.players.length} Players</p>
          </div>
        </div>

        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          <div className="mt-1.5 sm:mt-0">
            <p className="text-gray-500">Season</p>

            <p className="font-medium">{team.season.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
