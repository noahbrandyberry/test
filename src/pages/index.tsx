"use client";
import { useEffect, useState } from "react";
import { SchoolCard } from "../components/school-card";
import { School } from "../models";

export default function Home() {
  const [schools, setSchools] = useState<School[]>([]);
  useEffect(() => {
    getSchools();
  }, []);

  const getSchools = async () => {
    const response = await fetch("/api/v1/schools.json");
    const schoolsResponse = await response.json();
    setSchools(schoolsResponse);
  };

  const filteredSchools = schools.filter((school) => {
    if (school.primary_color && school.visible && school.logo_url) {
      return true;
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="gap-4">
        {filteredSchools.map((school) => (
          <SchoolCard school={school} key={school.id} />
        ))}
      </div>
    </main>
  );
}
