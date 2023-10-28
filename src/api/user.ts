import { UserInterface } from "./user.interfaces";
import { IPosition } from "./positions.interfaces";

const apiUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export class UserGateway {
  static async getUsers(page: Number): Promise<UserInterface[] | undefined> {
    try {
      const res = await fetch(apiUrl + `users?count=6&page=${page}`);
      return (await res.json()).users;
    } catch (e) {
      console.error(e);
    }
  }
  static async getPositions(): Promise<IPosition[] | undefined> {
    try {
      const res = await fetch(apiUrl + "positions");
      return (await res.json()).positions;
    } catch (e) {
      console.error(e);
    }
  }
}
