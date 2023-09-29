import { TeamCard } from "@/components/team-card";
import { useSchools } from "@/queries/schools";
import { useTeams } from "@/queries/teams";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { data: schools } = useSchools();
  const school = schools?.find((school) => school.id === router.query.id);
  const { data: teams } = useTeams(school?.id);
  const team = teams?.find((team) => team.id === router.query.teamId);

  if (!team) {
    return null;
  }

  return (
    <div>
      <Image src={team.photo_url} alt={team.name} width={100} height={100} />
      <p>{team?.name}</p>
    </div>
  );
}
