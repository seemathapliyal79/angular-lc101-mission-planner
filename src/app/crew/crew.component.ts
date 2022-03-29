import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  hoveredCandidate:object;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:

addCrewMember(candidate:object){
  for (let i=0; i<this.crew.length; i++){
    if (this.crew[i]['name'] === candidate['name']){
      //candidate exists in the crew array
      this.crew.splice(i,1);
      return;
    }
  }
//If crew size is lass than 3 then data should ne added to crew array
  if(this.crew.length >= 3){
    return;
  }
  this.crew.push(candidate);
  
}

isCandidateSelected(candidate:object):boolean{
  for (let i=0; i<this.crew.length; i++){
    if (this.crew[i]['name'] === candidate['name']){
      //candidate exists in the crew array
      return;
    }
  }
}
setMemberHovered(candidate:object){
  this.hoveredCandidate = candidate;
  
}

}
