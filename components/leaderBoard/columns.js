import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    disableFilters: true,
  },
  {
    Header: "Rank",
    accessor: "rank",
    Footer: "Rank",
  },
  {
    Header: "Player",
    accessor: "player",
    Footer: "Player",
  },
  {
    Header: "Headshots",
    accessor: "headshots",
    Footer: "Headshots",
  },
  {
    Header: "Bots Killed",
    accessor: "bots_killed",
    Footer: "Bots Killed",
  },
  {
    Header: "Time Survived",
    accessor: "time_survived",
    Footer: "Time Survived",
  },
  {
    Header: "Wave Reached",
    accessor: "wave_reached",
    Footer: "Wave Reached",
  },
  {
    Header: "Score",
    accessor: "score",
    Footer: "Score",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      { Header: "Rank", accessor: "rank", Footer: "Rank" },
      { Header: "Player", accessor: "player", Footer: "Player" },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Headshots",
        accessor: "headshots",
        Footer: "Headshots",
      },
      { Header: "Bots Killed", accessor: "bots_killed", Footer: "Bots Killed" },
      {
        Header: "Time Survived",
        accessor: "time_survived",
        Footer: "Time Survived",
      },
    ],
  },
  {
    Header: "Scores",
    Footer: "Scores",
    columns: [
      {
        Header: "Wave Reached",
        accessor: "wave_reached",
        Footer: "Wave Reached",
      },
      { Header: "Score", accessor: "score", Footer: "Score" },
    ],
  },
];
