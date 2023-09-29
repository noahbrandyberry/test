import Link from "next/link";
import { Team, School } from "../models";

interface TeamCardProps {
  team: Team;
  school: School;
}

export const TeamCard = ({ team, school }: TeamCardProps) => {
  return (
    <Link
      className="block rounded p-4 shadow bg-white"
      href={`/schools/${school.id}/teams/${team.id}`}
    >
      <img
        src={team.photo_url}
        className="h-56 rounded-md object-cover aspect-2 mx-auto mb-4"
      />

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
