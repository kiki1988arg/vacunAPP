import { Directive } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Directive()
export class BaseHeader {
    showPreviousButton = false;
    constructor(private location: Location, public router: Router) { }

    ngOnInit(): void {
    }
    previousUrl() {
        this.location.back()
    }
}
