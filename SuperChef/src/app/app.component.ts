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
  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.recipes = [];
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
}
