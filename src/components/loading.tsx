import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = () => (
  <div className="w-full h-full flex items-center justify-center">
    <FontAwesomeIcon icon={["fas", "spinner"]} spin size="2xl" />
  </div>
);
