import {Component, OnInit} from "@angular/core";
import {DataServiceUserString} from "../dataservice/data-service-userstring.service";
import {HttpResponse} from "@angular/common/http";
import {UserString} from "../models/userstring";

@Component({
    selector: 'app',
    templateUrl: './userstring.component.html',
    providers: [DataServiceUserString]
})

export class UserStringComponent implements OnInit {
    userString: UserString = new UserString();
    userStrings: UserString[];

    constructor(private dataService: DataServiceUserString) {}

    ngOnInit() {
        this.loadUserStrings();
    }

    loadUserStrings() {
      this.dataService.getUserStrings()
            .subscribe((data: UserString[]) => this.userStrings = data);
    }

    save() {
        this.dataService.createString(this.userString)
            .subscribe((data: HttpResponse<UserString>) => {
                console.log(data);
                // @ts-ignore
              this.userStrings.push(data.body);
            });
        this.cancel();
    }

    cancel() {
        this.userString = new UserString();
    }
}

