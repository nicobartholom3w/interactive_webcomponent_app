import { Injectable } from '@angular/core';
import { ChallengesService } from '../challenges/challenges.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  constructor(private challengeService: ChallengesService) { }

  getChallengeArr() {
    return this.challengeService.challengesArr;
  }

}
