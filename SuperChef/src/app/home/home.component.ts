import { Component, OnInit } from '@angular/core';
import { Recipes } from '../models/recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: Recipes[];

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  // Input text: recive 10 recipes per search
  onChange(event) {
    this.recipes = [];
    this.activatedRoute.params.subscribe(async (params) => {
      params = event.target.value;
      const response = await this.recipeService.getRecipesSearch(params);
      if (response['error']) {
        console.log('error');
      } else {
        this.recipes = response['results'];
        // console.log(this.recipes);
      }
      console.log('array', this.recipes);
    });
  }
}
