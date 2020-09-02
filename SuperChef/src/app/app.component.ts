import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recipes: any[];

  constructor(private recipeService: RecipesService) {
    this.recipes = [];
  }

  async ngOnInit() {
    const response = await this.recipeService.getRecipesSearch();
    // console.log(response);
    this.recipes = response['results'];
    console.log(this.recipes);
  }
}
