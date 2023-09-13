import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckValueService {

  constructor() { }

  public check(): boolean {
    return true;
  }

}
