import Link from "next/link";
import { School } from "../models";

interface SchoolCardProps {
  school: School;
}

export const SchoolCard = ({ school }: SchoolCardProps) => {
  return (
    <Link
      style={{ display: "flex", alignItems: "center" }}
      href={`/schools/${school.id}`}
    >
      <img src={school.logo_url} style={{ height: 100, marginRight: 10 }} />
      <div>
        <p
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

        <p>{school.location.address_1}</p>
      </div>
    </Link>
  );
};
