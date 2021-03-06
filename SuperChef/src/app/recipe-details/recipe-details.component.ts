import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredients } from '../models/ingredients.model';
import { Steps } from '../models/steps.model';
import { Recipe } from '../models/recipe.model';
import { Nutrition } from '../models/nutrition.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  ingredients: Ingredients;
  steps: Steps;
  nutrition: Nutrition;
  /* nutrients: any; */

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const id = params.id;
      const response = await this.recipeService.getRecipeById(id);
      const instructions = await this.recipeService.getInstuctionsById(id);
      // console.log(response);
      if (response['error']) {
        this.router.navigate(['/home']);
        // console.log('error');
      } else {
        this.recipe = response;
        console.log(this.recipe);
        this.ingredients = this.recipe.extendedIngredients;
        this.steps = instructions[0].steps;
        /* Review What information I want to show */
        this.nutrition = this.recipe.nutrition.caloricBreakdown;
        /*  this.nutrients = this.recipe.nutrition.nutrients; */
        // console.log(this.steps);
        // console.log(this.ingredients);
        /*  console.log(this.nutrients); */
      }
    });
  }
}
