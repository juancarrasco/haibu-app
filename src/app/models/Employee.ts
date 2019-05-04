import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable()
export class Employee {

	id:number;
	nombre:string;
	apellido:string;
	telefono:number;
	rut:string;
	fechaNacimiento:string;
	direccion: {	
		calle:string;
		numero:number;
		comuna:string;
	}
	activo:number;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

	//return birthday in format moment o incorrecto
	getBirthday():string{
		return moment(this.fechaNacimiento).fromNow();
	}

	//return boolean
	rutValid(){
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( this.rut ))
			return false;
		var tmp 	= this.rut.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (this.returnRut(rut) == digv );
	}

	//validator rut number 
	returnRut(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}

}

