import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'll-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  userData: any =[];
  userId = 2;

  ngOnInit(): void {
    this.getUserById(this.userId);
  }

  getUserById(id: any){
    //user id passed hard - coded; later could be taken from logged in user
    this.userService.getUserById(id).subscribe((data: any)=> {
      this.userData = data;
      console.log('User Dashboard Data', this.userData);
    })
  }

}
