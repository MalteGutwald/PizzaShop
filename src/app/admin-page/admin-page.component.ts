import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  constructor(private http: HttpClient){}

  categorys = [
    {
        category: 'Beliebte Gerichte',
        dishes:[{name: '', info: '', description: '', price: '', key: ''}]}
  ];
  ngOnInit(): void {
   this.fetchData();
  }
  updateData(key: string, requestData:{}): void{
    this.http.put(
      'https://maltestore-default-rtdb.europe-west1.firebasedatabase.app/posts/' + key + '.json',
      requestData
     ).subscribe();
  }

  postData(requestData:{}): void {
    this.http.post(
      'https://maltestore-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
       requestData
     ).subscribe();
  }

  fetchData() {
    const array: any[] = [];

    this.http
    .get(
      'https://maltestore-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .pipe(
    map(responseData =>{
      let counter = 0;
      for (const key in responseData){
          array.push({...responseData,id: key}[key]);
          array[counter]["key"] = key
          counter ++;
      }
      this.categorys = [{category:'Beliebte Gerichte', dishes: array}];
      console.log(this.categorys)
      return array;
    }))
    .subscribe();
  }
  deleteData(key:string){
    this.http
    .delete(
      'https://maltestore-default-rtdb.europe-west1.firebasedatabase.app/posts/'+ key +'.json').subscribe()
  }
}
