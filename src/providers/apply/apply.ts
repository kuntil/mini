import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApplyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApplyProvider {

  http : any;
  apply : any;
  constructor(http: Http) {
    // console.log('Hello ApplyProvider Provider');
    this.http = http;
    this.getAllticket().subscribe(Response =>{
      this.apply = Response.apply;
    });
  }

  getAllticket(){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

		return this.http.get('https://minebca.herokuapp.com/apply/',options).map(res=>res.json());

  }

  getDetailticket(ID : string){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

		return this.http.get('https://minebca.herokuapp.com/apply/'+ID,options).map(res=>res.json());

  }

  postAddticket(ID:string, title:string, subtitle:string){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

    let postParams = {
			id : ID,
      title: title,
      subtitle:subtitle
    }
    console.log(subtitle);

		return this.http.post('https://minebca.herokuapp.com/addApply/',postParams,options).map(res=>res.json());

  }

  postDelticket(ID:string, title:string, subtile:string){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

		return this.http.get('https://minebca.herokuapp.com/delApply/'+ID,options).map(res=>res.json());

  }

}
