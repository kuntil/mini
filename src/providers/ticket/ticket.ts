import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TicketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketProvider {

  baseUrl = "";

  constructor(public http: Http) {
    console.log('Hello TicketProvider Provider');
  }

  getAllticket(){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

		return this.http.get('https://minebca.herokuapp.com/ticket/',options).map(res=>res.json());

  }

  getDetailticket(ID : string){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

		return this.http.get('https://minebca.herokuapp.com/ticket/'+ID,options).map(res=>res.json());

  }

  postAddticket(ID:string, title:string, subtile:string){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

    let postParams = {
			id : ID,
      title: title,
      subtitle:subtile
		}

		return this.http.post('https://minebca.herokuapp.com/addTicket',postParams,options).map(res=>res.json());

  }

  postDelticket(ID:string, title:string, subtile:string){
    var headers = new Headers();
		headers.append("Access-Control-Allow-Origin",'*');
		headers.append("Accept",'application/json');
		headers.append('Content-Type','application/json');
		let options = new RequestOptions({headers:headers});

		return this.http.get('https://minebca.herokuapp.com/delTicket'+ID,options).map(res=>res.json());

  }

}
