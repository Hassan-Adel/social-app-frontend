import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editForm') editForm: NgForm;
  // Prevent the user from closiong the browser without saving changes
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if(this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.user = data['user'];
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
  updateUser(){
    this.editForm.reset(this.user);
  }
}
