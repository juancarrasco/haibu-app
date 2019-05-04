import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/Employee';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
employee: Employee = new Employee({});

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
      this.employee = new Employee(JSON.parse(params.special));
      console.log(this.employee);
      }
    });
   }

  ngOnInit() {
  }

  launchMap(item){
  	console.log(item);
  	window.open(`geo://?q=${item.numero} ${item.calle} ${item.comuna}`);
  }
  launchCall(item){
  	console.log(item);
  	window.open(`tel://${item}`);
  }

}
