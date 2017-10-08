import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeProvider {

  constructor() {
  }

  getDayHoursMinNow() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let day = new Date().getDay();
    return {
      hours: hours,
      minutes: minutes,
      day: day
    };
  }

}
