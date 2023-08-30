"use client";
import { useEffect, useState } from "react";

interface School {
  id: string;
  name: string;
  primary_color: string;
  location: Location;
  visible: boolean;
  logo_url: string;
}

interface Location {
  address_1: string;
}

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
      {filteredSchools.map((school) => (
        <p
          key={school.id}
          style={{
            color: "black",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px 5px " + school.primary_color,
          }}
        >
          {school.name}
        </p>
      ))}
    </main>
  );
}
