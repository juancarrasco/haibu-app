import { TestBed } from '@angular/core/testing';
import {
  HttpBackend,
  HttpClient
} from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { Employee } from '../models/Employee';

import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

	let service:EmployeesService;
  beforeEach(() => {
  	TestBed.configureTestingModule({
  		imports:[HttpClientTestingModule]
  		,providers: [
        EmployeesService
      ]
  	})
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: EmployeesService = TestBed.get(EmployeesService);
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
	  const testData: Employee = new Employee({
	  	  	id:1,
	  	  	nombre:"Omar", 
	  	  	apellido:"Trapaga", 
	  	  	telefono:56221984968, 
	  	  	rut:"21984968-0", 
	  	  	fechaNacimiento:"12/05/1982", 
	  	  	direccion:{
	  			calle:"Av. Matta",
	  			numero:143,
	  			comuna:"Santiago"
	  		},
	  		activo:1
	  });
	  var testUrl:string = 'https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user';

  // Make an HTTP GET request
  httpClient.get<Employee>(testUrl)
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

  // The following `expectOne()` will match the request's URL.
  // If no requests or multiple requests matched that URL
  // `expectOne()` would throw.
  const req = httpTestingController.expectOne(testUrl);

  // Assert that the request is a GET.
  expect(req.request.method).toEqual('GET');

  // Respond with mock data, causing Observable to resolve.
  // Subscribe callback asserts that correct data was returned.
  req.flush(testData);

  // Finally, assert that there are no outstanding requests.
  httpTestingController.verify();
});

});
