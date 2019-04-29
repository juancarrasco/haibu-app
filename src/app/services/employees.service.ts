import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Employee } from '../models/Employee';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class EmployeesService {

	private url:string = 'https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user';
	constructor(private http: HttpClient) { }

	//call api
	get(){
		return this.http.get<Employee[]>(this.url).pipe(
			map(results =>{   
				return results;
			},  
			catchError( err => {
				return (err);
			})
			));
	}
}
