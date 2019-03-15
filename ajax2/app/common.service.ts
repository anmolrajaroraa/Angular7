import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Item} from './Item';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private subject:Subject<string[]> = new BehaviorSubject<string[]>([]);
  constructor(private http:HttpClient) { }
  public  getSubject():Subject<string[]>{
    return this.subject;
  }
  public doAjaxCall():Observable<Item[]>{

    return this.http.get<Item[]>('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json');
  }
}
