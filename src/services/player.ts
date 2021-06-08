import axios from "axios";
import { IPlayer } from "../common/interfaces/entities";

export const getRandomPlayer = () => {
  return axios.get<{ results: IPlayer[] }>("https://randomuser.me/api");
};
