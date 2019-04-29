import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EmployeesService } from '../services/employees.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
	
	employees: Observable<Employee[]>;
	filteredEmployees: Observable<Employee[]>;
    searchKey: string = '' ;
    searchTerms;
    error:boolean = false;
    loading:boolean = false;

  constructor(public navCtrl: NavController, private employeesService:EmployeesService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
  	this.loading = true;
  	this.employees = this.employeesService.get();
  	this.filteredEmployees = this.employees;
  	this.employees.subscribe(res=>{
		this.error = false;
		this.loading = false;
  	},err=>{
  		this.error = true;
  		this.loading = false;
  	});


  }

protected search = (key) => {
    this.resetChanges();
    this.filteredEmployees = this.employees.pipe(map((items)=>{
    	let searchTerm = this.searchKey;
		return items.filter(item => {
			if (item.nombre.toLowerCase().search(searchTerm.toLowerCase()) != -1) {
				return item;
			}
		})            
    }))
};

protected resetChanges = () => {
    this.filteredEmployees = this.employees;
};
    openDetailView(item) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['detail'], navigationExtras);
  }

}
