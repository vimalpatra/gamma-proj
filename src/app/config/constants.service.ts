import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
	public readonly baseUrl = 'http://34.121.49.132/';

  constructor() { }
}
