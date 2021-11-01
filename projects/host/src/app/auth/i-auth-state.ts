import {IUser} from "../model/i-user";

export const authStateFeatureName = "authState"
export interface IAuthState {
  readonly user?: IUser;
}
