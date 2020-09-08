import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  baseUrl: string;
  apiKey: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://api.spoonacular.com/recipes/';
    this.apiKey = '&apiKey=4dd4f0011d1a41aca49acfb28bd0643e';
  }

  // Search recipes. Replace "pizza" for the input text
  getRecipesSearch(pQuery) {
    return this.httpClient
      .get(`${this.baseUrl}complexSearch?query=` + pQuery + `${this.apiKey}`)
      .toPromise();
  }

  getRecipeById(pId) {
    return this.httpClient
      .get(
        `${this.baseUrl}` +
          pId +
          `/information?includeNutrition=false&${this.apiKey}`
      )
      .toPromise();
  }

  getRecipeByIdDos() {
    return this.httpClient
      .get(
        `${this.baseUrl}716429/information?includeNutrition=false${this.apiKey}`
      )
      .toPromise();
  }

  // Get recipe by id
  /*  https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=4dd4f0011d1a41aca49acfb28bd0643e */
}
