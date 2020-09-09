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

  // Search recipes. Replace "pQuery" for the input text
  getRecipesSearch(pQuery) {
    return this.httpClient
      .get(`${this.baseUrl}complexSearch?query=` + pQuery + `${this.apiKey}`)
      .toPromise();
  }

  // Get recipe by id
  getRecipeById(pId) {
    return this.httpClient
      .get(
        `${this.baseUrl}` +
          pId +
          `/information?includeNutrition=true&${this.apiKey}`
      )
      .toPromise();
  }

  // Get analyzed instructions by id
  getInstuctionsById(pId) {
    return this.httpClient
      .get(`${this.baseUrl}` + pId + `/analyzedInstructions?${this.apiKey}`)
      .toPromise();
  }

  // Get recipe by id
  /*  https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=4dd4f0011d1a41aca49acfb28bd0643e */

  /* Get analyzed instructions by id
  https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=4dd4f0011d1a41aca49acfb28bd0643e */
}
