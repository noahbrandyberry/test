import { format, isThisYear } from "date-fns";

interface CopyrightProps {
  yearBuilt: number;
  appName: string;
}

export const Copyright: React.FC<CopyrightProps> = ({ yearBuilt, appName }) => {
  const wasBuiltThisYear = isThisYear(new Date(yearBuilt, 1, 1));
  const currentYear = format(new Date(), "yyyy");
  const years = wasBuiltThisYear ? yearBuilt : `${yearBuilt} - ${currentYear}`;

  return (
    <p>
      © {years} {appName}
    </p>
  );
};
