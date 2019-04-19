import { Component, OnInit, Input } from '@angular/core';
import { MemberServiceService } from '../member-service.service'

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
  @Input() specificMember = null
  constructor() { }

  ngOnInit() {
  }

}
