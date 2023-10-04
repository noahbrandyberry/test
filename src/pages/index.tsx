"use client";
import { TeamCard } from "@/components/team-card";
import { SchoolCard } from "../components/school-card";
import { useSchools } from "@/hooks/schools";

export default function Home() {
  const { data: schools } = useSchools();

  const filteredSchools = schools?.filter((school) => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 gap-4">
      <h1 className="text-xl font-bold">Teams of the Week</h1>
      <div className="grid grid-cols-2 gap-4">
        <TeamCard teamId="snap-1182-288" schoolId="snap-1182" showSchoolName />
        <TeamCard teamId="snap-792-588" schoolId="snap-792" showSchoolName />
      </div>

      <h1 className="text-xl font-bold mb-4">Featured Schools</h1>
      <div className="gap-4">
        {filteredSchools?.map((school) => (
          <SchoolCard school={school} key={school.id} />
        ))}
      </div>
    </main>
  );
}
