import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag = true;
  constructor() { }

  ngOnInit(): void {
  }

  public login(): void{
   alert('open login component....');
   this.flag= !this.flag;
  }

  public logout(): void{
    const res =  window.confirm('Are you sure you want to logout?');
    if(res){
      alert('Yalla bye');
      this.flag = !this.flag;
    }else{
      alert('I know you love me!');
    }
  }

}
