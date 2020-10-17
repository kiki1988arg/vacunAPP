import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ExitComponent } from '../user/dialogs/exit/exit.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showPreviousButton = false;
  constructor(public authService: AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  logOut() {
    const dialogRef = this.dialog.open(ExitComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.authService.logOut();
    });
  }
}
