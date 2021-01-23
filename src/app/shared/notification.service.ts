import { Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  success( ) {
    this.config['panelClass'] = ['notification','success'];
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }

  warn(msg: string) {
    this.config['panelClass'] = ['notification','warn'];
    this.snackBar.open(msg,'',this.config);
  }
}
