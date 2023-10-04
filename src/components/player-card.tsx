import Link from "next/link";
import { Player } from "../models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <Link
      className="bg-white rounded shadow px-4 py-6 flex-col text-center items-center h-full aspect-1 max-w-full"
      href={`/players/${player.id}`}
    >
      <div className="flex justify-center relative mb-4">
        <FontAwesomeIcon icon={["fas", "shirt"]} size="4x" />
        <span className="absolute w-full h-full text-center items-center justify-center flex text-white text-xl font-bold">
          {player.jersey}
        </span>
      </div>

      <h3 className="text-lg font-bold py-1">
        {player.first_name} {player.last_name}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-xs pb-[10px]">
        <div className="text-left flex-1">
          <p className="text-gray-500">Position</p>
          <p className="font-medium">{player.position}</p>
        </div>

        <div className="text-left flex-1">
          <p className="text-gray-500">Grad year</p>
          <p className="font-medium">{player.grad_year}</p>
        </div>

        <div className="text-left flex-1">
          <p className="text-gray-500">Height</p>
          <p className="font-medium">{player.height}</p>
        </div>

        <div className="text-left flex-1">
          <p className="text-gray-500">Weight</p>
          <p className="font-medium">{player.weight}</p>
        </div>
      </div>
    </Link>
  );
};
