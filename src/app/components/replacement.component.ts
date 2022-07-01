import { Component, OnInit } from '@angular/core';
import {DataServiceReplacements} from "../dataservice/data-service-replacements.service";
import {Replacement} from "../models/replacement";
import {HttpResponse} from "@angular/common/http";

@Component({
    selector: 'app',
    templateUrl: './replacement.component.html',
    providers: [DataServiceReplacements]
})

export class ReplacementComponent implements OnInit {
    replacement: Replacement = new Replacement();
    replacements: Replacement[];
    tableMode: boolean = true;

    constructor(private dataService: DataServiceReplacements) {}

    ngOnInit() {
        this.loadReplacements();
    }

    loadReplacements() {
        this.dataService.getReplacements()
            .subscribe((data: Replacement[]) => {
              return this.replacements = data;
            });
    }

    save() {
        this.dataService.createReplacement(this.replacement)
            .subscribe((data: HttpResponse<Replacement>) => {
                console.log(data);
                // @ts-ignore
              this.replacements.push(data.body);
            });
        this.cancel();
    }

    cancel() {
        this.replacement = new Replacement();
        this.tableMode = true;
    }

    delete(r: Replacement) {
        this.dataService.deleteReplacement(r.oldSymbol)
            .subscribe(data => this.loadReplacements());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}

