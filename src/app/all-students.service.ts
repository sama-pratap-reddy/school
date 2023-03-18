import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllStudentsService {
public URL: string ="https://6128991386a213001729f9df.mockapi.io/test/v1/leads";
  constructor(private _httpclient:HttpClient) {}
  
 getAllStudents():Observable<any>{
  return this._httpclient.get(this.URL+"?limit=5&page=1")
 };
 createAllStudent(data:any):Observable<any>{
  return this._httpclient.post(this.URL,data);
};

getFilteredAllStudents(term: string): Observable<any> {
  return this._httpclient.get(this.URL + "?filter=" + term);
};

getSortedAllStudents(column: string, order: string): Observable<any> {
  return this._httpclient.get(this.URL + "?sortBy=" + column + "&order=" + order);
};
getPageAllStudents(page: number, limit: number): Observable<any> {
  return this._httpclient.get(this.URL + "?limit=" + limit + "&page=" + page);
};
deleteAllStudents(id:string):Observable<any>{
  return this._httpclient.delete(this.URL+"/"+id);
}
};
