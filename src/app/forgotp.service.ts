import { Injectable } from '@angular/core';

@Injectable()

export class Quest{
  public textCont: string;
  public answer: number;
}

export class ForgotpService {
  private cacheQuestId: number;
  private randQuant: number;
  question() {
    let cacheObj: Quest = new Quest();
    this.randQuant = +String(Date.now()).slice(-3)
    //create some key in obj for save real answer from hack
    this.cacheQuestId = cacheObj.answer = +String(Date.now()).slice(-4)
    cacheObj.textCont = Math.ceil(this.cacheQuestId/this.randQuant) + ' + ' + Math.ceil(this.cacheQuestId/Math.abs(this.randQuant-314))
    return cacheObj
  }
  answerCheck(ans) {
    return (ans == Math.ceil(this.cacheQuestId/this.randQuant) + Math.ceil(this.cacheQuestId/Math.abs(this.randQuant-314)))
  }
}
