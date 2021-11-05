import {IUser} from "../model/i-user";

export const authStateName = () => 'authState';

export interface IAuthState {
  readonly user?: IUser;
}
