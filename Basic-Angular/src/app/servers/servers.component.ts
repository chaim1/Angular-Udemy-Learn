import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //            <app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  servercrete = false;
  serverstatus:string  = 'Server off Line ';
  serverName = ' serverName';
  servers = ['testserver',  'testserver1']
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  serverOn(){
    this.servers.push(this.serverName)
    this.servercrete = true;
    this.serverstatus = 'Server On Line'+this.serverName;
  }

  addServerName(event: Event){
    console.log(event);
    
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
