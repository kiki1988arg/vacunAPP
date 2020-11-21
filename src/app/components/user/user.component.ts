import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCrutch } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { ExitComponent } from './dialogs/exit/exit.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  faCrutch = faCrutch;
  pendingVaccines = 0;
  constructor(public authService: AuthService,
    public dialog: MatDialog,
    private facadeService: FacadeService) { }

  ngOnInit(): void {
    this.facadeService.getNextVaccinesCount().subscribe(res => this.pendingVaccines = res);
  }

  logOut() {
    const dialogRef = this.dialog.open(ExitComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.authService.logOut();
    });

  }
}
