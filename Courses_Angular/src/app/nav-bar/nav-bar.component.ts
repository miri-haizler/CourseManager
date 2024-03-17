import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  host: {ngSkipHydration: 'true'},

})
export class NavBarComponent implements OnInit, OnDestroy {

  isLoggedIn!: boolean;
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  private _listener = () => {
    this.isLoggedIn = !!sessionStorage.getItem("currentUser");

  }


}
