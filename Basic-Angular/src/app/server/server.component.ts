import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
severId: number = Math.random()*10;
serverStatus: string = 'ofline';
constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
}
getserverid(){
    return this.severId;
}
getcolor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
}
}