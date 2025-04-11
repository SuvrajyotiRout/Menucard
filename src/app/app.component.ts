import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';

interface NonMenuItem {
  _id: string;
  nonvegdishname: string;
  nonvegdishImage: string;
  priceFull: number;
  priceHalf?: number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}
interface VegMenuItem {
  _id: string;
  vegdishname: string;
  vegdishImage: string;
  priceFull: number;
  priceHalf?: number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {



  BaseuRL: String = "http://localhost:5000/uploads/"
  menuItems: NonMenuItem[] = [];
  vegMenuitem: VegMenuItem[] = [];
  isVegSelected: boolean = true;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.fetchmenu()
  }
  fetchmenu() {
    this.apiService.Getmenu().subscribe({
      next: (response) => {
        if (response?.success) {
          this.menuItems = response.menu.nonVegMenu;
          console.log("Fetched Menu", this.menuItems);
          this.vegMenuitem = response.menu.vegMenu;
          console.log("VegMenu", this.vegMenuitem);

        } else {
          console.log("No menu Found");

        }
      }, error: (error) => {
        console.error("Error fetching products:", error);
      },
      complete: () => {
        console.log("Fetch API call completed.");
      }
    })
  }



}
