import { Location } from "./location";

export interface School {
  id: string;
  name: string;
  primary_color: string;
  location: Location;
  visible: boolean;
  logo_url: string;
}

export type Schools = School[];
