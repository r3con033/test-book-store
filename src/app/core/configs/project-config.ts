import {environment} from "../../../environments/environment";

export class Config {
  public static readonly production: boolean = environment.production;
  public static readonly apiUrl: string = environment.apiUrl;
}
