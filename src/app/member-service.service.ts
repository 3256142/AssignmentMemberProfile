import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const memberUrl = 'https://tranquil-beach-87956.herokuapp.com/api/v1/users'

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(memberUrl)
  }

  getSpecificMember(memberName) {
    return this.http.get(memberUrl + `/${memberName}`)
  }
}
