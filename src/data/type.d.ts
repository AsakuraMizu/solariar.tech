export type LinkData = Partial<{
  name: string;
  url: string;
  icon: any;
}>;

export type LinksData = {
  [K in string]: LinkData;
};

export type TagData = Partial<{
  name: string;
  color: 'default' | 'primary' | 'secondary';
}>;

export type TagsData = {
  [K in string]: TagData;
};

export type MemberData = Partial<{
  name: string;
  desc: string;
  avatar: any;
  links: LinksData;
  tags: TagsData;
}>;

export type MembersData = {
  [K in string]: MemberData;
};

export type DevData = Partial<{
  name: string;
  url: string;
}>;

export type DevsData = {
  [K in string]: DevData;
};

export type TeamData = Partial<{
  name: string;
  url: string;
}>;

export type TeamsData = {
  [K in string]: TeamData;
};

export type ProjectData = Partial<{
  name: string;
  star: string;
  desc: string;
  coop: boolean;
  img: string;
  url: string;
  devs: DevsData;
  teams: TeamsData;
}>;

export type ProjectsData = {
  [K in string]: ProjectData;
};
