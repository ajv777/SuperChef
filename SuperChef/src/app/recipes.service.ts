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
  getRecipesSearch() {
    return this.httpClient
      .get(`${this.baseUrl}complexSearch?query=pizza${this.apiKey}`)
      .toPromise();
  }
}
