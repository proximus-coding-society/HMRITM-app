import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

      this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
              labels: this.navParams.data.user.data.subjects,
              datasets: [{
                  label: '# of attendance',
                  data: this.navParams.data.user.data.attendance,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 0.8
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

      });
  }


}
