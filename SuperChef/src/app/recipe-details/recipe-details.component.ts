import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const id = params.idRecipe;
      const response = await this.recipeService.getRecipeById(id);
      console.log(response);
      if (response['error']) {
        this.router.navigate(['/comprar']);
        console.log('error');
      } else {
        this.recipe = response;
        console.log(this.recipe);
      }
    });
  }
}
