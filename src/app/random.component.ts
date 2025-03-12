import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PetsService from './random.service';
import { Pets } from './entities';
import { provideHttpClient } from '@angular/common/http';
import { NavComponent } from "./modules/components/nav/nav.component";
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, SidebarComponent],
  templateUrl: './random.component.html',
})
export class AppComponent {
  service: PetsService = inject(PetsService)
  catUrl!: string[];
  dogUrl!: string;
  ngOnInit() {
    this.loadCat();
    this.loadDog();
  }

  async loadCat() {
   const cats = await this.service.getCat();
   this.catUrl = cats.map(cat =>  cat.file);
  }

  async loadDog() {
    const dog = await this.service.getDog();
    this.dogUrl = dog.file;
  }
}
