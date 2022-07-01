import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Replacement} from "../models/replacement";

@Injectable()
export class DataServiceReplacements {
    private url = "api/replacements";

    constructor(private http: HttpClient) {
    }

    getReplacements() {
        return this.http.get(this.url);
    }

    getReplacement(oldSymbol: string) {
        return this.http.get(this.url + '/' + oldSymbol);
    }

    createReplacement(replacement: Replacement) {
        return this.http.post(this.url, replacement, {observe: 'response'});
    }

    deleteReplacement(oldSymbol: string) {
        return this.http.delete(this.url + '/' + oldSymbol);
    }
}

