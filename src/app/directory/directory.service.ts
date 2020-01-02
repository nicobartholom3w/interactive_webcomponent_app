import { Injectable } from '@angular/core';
import { ChallengesService } from '../challenges/challenges.service';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private challengesService: ChallengesService) { }

}
