import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPage } from './list.page';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeesService } from '../services/employees.service';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import {
  HttpBackend,
  HttpClient
} from '@angular/common/http';

describe('ListPage', () => {
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;
    let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPage ],
      imports: [
        RouterTestingModule,HttpClientTestingModule
      ],
      providers:[
        {provide: EmployeesService, useClass: EmployeesService}
       ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
