import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  static myData: any;
  constructor() {}
  public myData!: string;
}
