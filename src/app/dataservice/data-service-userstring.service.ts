import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserString} from "../models/userstring";

@Injectable()
export class DataServiceUserString {
    private url = "api/userstrings";

    constructor(private http: HttpClient) {
    }

    getUserStrings() {
        return this.http.get(this.url);
    }

    getUserString(data: UserString) {
        return this.http.get(this.url + '/' + data);
    }

    createString(userString: UserString) {
        return this.http.post(this.url, userString, {observe: "response"});
    }
}
