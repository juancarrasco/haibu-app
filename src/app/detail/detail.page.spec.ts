import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee } from '../models/Employee';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DetailPage } from './detail.page';
import {
  HttpBackend,
  HttpClient
} from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';


describe('DetailPage', () => {
  let component: DetailPage;
  let fixture: ComponentFixture<DetailPage>;
  let activatedRoute: ActivatedRoute;
  let router: Router;
  let employee: Employee;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ DetailPage ],
      imports: [
        RouterTestingModule
        
       ],
       providers:[
        {provide: Employee, useClass: {}}
       ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    employee = new Employee({});
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture = TestBed.createComponent(DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create',  () => {
    expect(component).toBeTruthy();
  });
});
