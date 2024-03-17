import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-out',
  standalone: true,
  imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent {


  constructor(private router: Router) { }

  ngOnInit(): void {

    sessionStorage.clear()
    Swal.fire('good  bay :)');
    this.router.navigate(['login'])

  }

}
