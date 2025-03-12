import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PetsService from './random.service';
import { provideHttpClient } from '@angular/common/http';
import { NavComponent } from "./../modules/components/nav/nav.component";
import { SidebarComponent } from './../modules/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, SidebarComponent],
  templateUrl: './random.component.html',
})
export class AppComponent {
  service: PetsService = inject(PetsService);
  catUrl: string[] = [];
  dogUrl: string[] = [];
  pets: string[] = [];

  async ngOnInit() {
    await this.loadCat();
    await this.loadDog();  

    console.log("Cats:", this.catUrl);
    console.log("Dogs:", this.dogUrl);
    this.pets = this.mixPets(this.catUrl, this.dogUrl);
  }

  mixPets(cats: string[], dogs: string[]) {
    return [...cats, ...dogs].sort(() => Math.random() - 0.5);
  }

  async loadCat() {
    const cats = await this.service.getCat();
    this.catUrl = cats.map(cat => cat.file);
  }

  async loadDog() {
    const dogs = await this.service.getDog();
    this.dogUrl = dogs.map(dog => dog.file);
  }
}