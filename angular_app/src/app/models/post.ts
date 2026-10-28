export interface Post {
  pID: number;
  pheading: string | null;
  psubheading: string | null;
  pcontent: string | null;
  pkeywords: string | null;
  pallowcomment: string;
  pyear: string;
  pmonth: string;
  pdateposted: string;
  pauthor: string;
  pusername: string | null;
  prevdate: string;
  comments?: Comment[];
}