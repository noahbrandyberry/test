"use client";
import { SchoolCard } from "../components/school-card";
import { useSchools } from "@/queries/schools";

export default function Home() {
  const { data: schools } = useSchools();

  const filteredSchools = schools?.filter((school) => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="gap-4">
        {filteredSchools?.map((school) => (
          <SchoolCard school={school} key={school.id} />
        ))}
      </div>
    </main>
  );
}
