import { Component } from '@angular/core';
import { RecipesService } from './recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recipes: any[];
  recipe: any;

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.recipes = [];
    this.recipe = {};
  }

  // Input text: recive 10 recipes per search
  onChange(event) {
    this.activatedRoute.params.subscribe(async (params) => {
      params = event.target.value;
      const response = await this.recipeService.getRecipesSearch(params);
      if (response['error']) {
        console.log('error');
      } else {
        this.recipes = response['results'];
        console.log(this.recipes);
      }
    });
  }

  // Replace with the pId - getRecipeById()
  async onClick() {
    const response = await this.recipeService.getRecipeByIdDos();
    if (response['error']) {
      console.log('error');
    } else {
      this.recipe = response;
      console.log(this.recipe);
    }
  }

  /*   onClick() {
    this.activatedRoute.params.subscribe(async (params) => {
      const id = params.idItem;
      const response = await this.recipeService.getRecipeById(id);
      // works console.log(response);
      if (response['error']) {
        console.log('error');
      } else {
        this.recipe = response;
      }
      console.log(this.recipe);
    });
  } */
}
