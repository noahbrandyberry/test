export interface Team {
  id: string;
  name: string;
  label: string;
  home_description: string;
  hide_gender: boolean;
  year: AttributeWithDates;
  season: AttributeWithDates;
  level: Attribute;
  program: Program;
  created_at: string;
  updated_at: string;
  images: Image[];
  players: Player[];
  url: string;
  gender: Attribute;
  sport: Attribute;
  school_id: string;
  record: null;
  photo_url: string;
}

interface Attribute {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface AttributeWithDates extends Attribute {
  start: string;
  end: string;
}

interface Image {
  id: string;
  url: string;
  description: string;
  team_id: string;
  created_at: string;
  updated_at: string;
}

interface Player {
  id: number;
  first_name: string;
  last_name: string;
  grad_year: string;
  jersey: string;
  position: string;
  height: string;
  weight: string;
  team_id: string;
  created_at: string;
  updated_at: string;
}

interface Program extends Attribute {
  name_slug: string;
  school_id: string;
  gender_id: number;
  sport_id: number;
}

export type Teams = Team[];
