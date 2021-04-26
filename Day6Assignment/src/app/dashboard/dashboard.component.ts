import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { UserDetails } from '../User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // name!: string;

  userDetails!: UserDetails;
  constructor(private router: ActivatedRoute, private service: SharedService) { }

  ngOnInit(): void {
    /* // tslint:disable-next-line: deprecation
    this.router.params.subscribe(params => {
      console.log(params);

      this.name = params['username'];
    });*/

    this.userDetails = this.service.getData();

  }

}
