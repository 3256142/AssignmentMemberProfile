import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../member-service.service'

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  constructor(private MemberServiceService: MemberServiceService) { }
  pokemons = []
  ngOnInit() {
    this.getMembers()
  
  }
  getMembers() {
    this.MemberServiceService.getMembers().subscribe(response => {
      let memberResults = []
      for (let member of response.results) {
        memberResults.push(member.username)
      }
      this.pokemons = memberResults
    })
  }
}
