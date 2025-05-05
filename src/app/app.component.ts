import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

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

interface DrinkingItem {
  _id: string,
  name: string,
  price: number,
  description: string,
  image: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  BaseuRL: String = "https://qrbackend-5.onrender.com/uploads/";
  menuItems: NonMenuItem[] = [];
  vegMenuitem: VegMenuItem[] = [];
  Drinks: DrinkingItem[] = [];

  selectedCategory: string = 'veg'; // default selected menu

  constructor(private apiService: ApiService) { }

  // ngOnInit(): void {
  //   this.fetchmenu();
  // }

  // fetchmenu() {
  //   this.apiService.Getmenu().subscribe({
  //     next: (response) => {
  //       if (response?.success) {
  //         this.menuItems = response.menu.nonVegMenu;
  //         this.vegMenuitem = response.menu.vegMenu;
  //         this.Drinks = response.menu.drinksMenu;
  //       } else {
  //         console.log("No menu Found");
  //       }
  //     },
  //     error: (error) => {
  //       console.error("Error fetching products:", error);
  //     },
  //     complete: () => {
  //       console.log("Fetch API call completed.");
  //     }
  //   });
  // }


  async ngOnInit(): Promise<void> {
    try {
      const response = await firstValueFrom(this.apiService.Getmenu());
      if (response?.success) {
        this.menuItems = response.menu.nonVegMenu;
        this.vegMenuitem = response.menu.vegMenu;
        this.Drinks = response.menu.drinksMenu;
      } else {
        console.log("No menu Found");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

}

