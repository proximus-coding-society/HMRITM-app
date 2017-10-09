__<h1>HMRITM APP</h1>__
---
__<h2>SYNOPSIS</h2>__

_Whether it's a simple __checkmark__ next to the name, a verbal attendence or just lots of worries of whether the teacher listened my __'present ma'am'__ or not -- it's got to be done everyday -- even every lecture. Confused about the day-to-day __schedule__ of fresher's party to fest, sessionals to finals, VAPS to summer training. Or just swiping your phone gallery to find the __assignment__ posted last month in the class group._

__It's lot to keep a track of -- but not to worry. With the advancement in technology__ _(without what the heck we can think off)_ __our app will help to reduce teacher's as well as student's effort.__

***
__<h2>LICENSE</H2>__
Public Domain

***

__<h2> FEATURES</h2>__

* [Multiple login systems]()

    * _By Student_
    * _By Teacher_

* [Timetable](#TIMETABLE)
* [Notice](#NOTICE)
* [Planner](#PLANNER)
* [Attendence Record](#ATTENDENCE-RECORD)
* [Assignment](#ASSIGNMENT)
* [College Contact](#COLLEGE-CONTACT)

***
__<h2>REQUIREMENTS</h2>__
The project we proposed `HMRITM APP` has a suite of selective modules specifically tailored to the requirements of students and teachers. It is engineered and designed considering range of management functions needed within the college. Almost all departments within a baisc need (e. g. attendence, notices, time table etc) can be synchronized and accessed.
*** 
__<h2>ARCHITECTURE</h2>__

Both the iOS and Android versions of our app follow approximately the same underlying structure for storing and associating data. At the heart of the application is a series of interrelated classes (each of which also happens to correspond with a table in a database).

* __Ionic 3__ for Moblie Frontend
* __Firebase__ for Backend 

***
__<h2>Code snippets explanation</h2>__
<h6>Charts.js usage in attendance.ts : </h6>
• Getting reference to the the canvas element in the template to render the chart

```typescript
@ViewChild('barCanvas') barCanvas;
```

• Initializing class member ```barChart``` to new chart object:

```typescript
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
```
```type``` property describes the type of chart i.e. ```bar```, ```doughnut```, ```line```.<br>
```labels``` property under ```datasets``` contains small label in the chart.<br>
```data``` property under ```datasets``` contains a list of values of bars to be shown in the chart.<br>
```backgroundColor``` property defines a list of the background color of each bar in the chart.<br>
```borderWidth, borderColor``` properties define width of the border of bars in the chart in inches and a list of border colors of the bars respective to the ```data``` list respectively.<br>

<h6>Custom ionic component made by us (accordion) : </h6>
• Decorators defined

```typescript
@Input('expanded') accordionExpanded_in: any;
@Input('title') title_in: string;
@Input('color') color_in: string;
@ViewChild("cc") cardContent: any;
```

```Input``` decorator enables the custom component to take input data through a directive in angular.
```ViewChild``` decorator enables to capture a reference to DOM element in angular
For more about angular decorators, visit https://angular.io/guide/attribute-directives

• Dependency injection in angular

```typescript
constructor(public renderer: Renderer) {}
```

We are here, almost everywhere in ionic using this *dependency injection* which makes the parameter of constructor to act as class members if prefixed by an access specifier.

```Renderer``` is class provided in angular/core module to set different styles to DOM elements / change their properties dynamically easily the angular way.

• Updating state change of properties in DOM

```typescript
this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 100ms, padding 100ms");
```

The method ```setElementStyle``` takes the native DOM element as first argument, styleName as second i.e. a transition here and style value as third which is a 100 ms slowdown on both *css* properties ```max-height``` and ```padding```.

***
__<h2>INSTALLATION</h2>__

• Run ```npm install``` into the project directory to install dependencies<br>
• Run ```ionic cordova platform add android``` to add android platform dependencies<br>
• Finally, ```run ionic cordova run android --prod``` to build and run the app for android (NOTE: android sdk must be configured for this)<br>

***

__<h2>TIMETABLE</h2>__
Displays class-wise timetable.

***

__<h2>NOTICE</h2>__
Displays notice in chronological order of dates, irrespective of branch. 

***

__<h2>PLANNER</h2>__
Displays the academic calender scheduled by HMRITM, highlighting the special events, holidays, commencements of exams etc. 

***

__<h2>ATTENDENCE RECORD</h2>__
Displays the attendence as well as its analysis which will aware students to maintain and decide which subject to bunk and which to attend. In the teacher app module, their will be face recognition based attendance using AWS rekognition api.

***

__<h2>ASSIGNMENT</h2>__
Displays subject-wise assignment along with their deadlines.

***

__<h2>COLLEGE CONTACT</h2>__

Displays the name and *phone number* of the college committee. Students can *contact* the committee member for any *problem*.

***

__<h4>FOR MORE DETAILED AND INTERESTING INFORMATION.. PLEASE VISIT THIS INTERACTIVE LINK<h4>__
https://drive.google.com/file/d/0B0olzwYcu7mHWTBLdU1MekhjcUU/view?usp=sharing

***

__<h2>SCREENSHOTS</h2>__
Time Table:

[![https://gyazo.com/1809447849feb83f576d1f5e73f72087](https://i.gyazo.com/1809447849feb83f576d1f5e73f72087.gif)](https://gyazo.com/1809447849feb83f576d1f5e73f72087)

Attendance chart student:

[![https://gyazo.com/b01f69573f46014a43c92bdd106b6c81](https://i.gyazo.com/b01f69573f46014a43c92bdd106b6c81.gif)](https://gyazo.com/b01f69573f46014a43c92bdd106b6c81)

Intro slider:

[![https://gyazo.com/853b3b654235e2f62fa1f2ea5f4f64c7](https://i.gyazo.com/853b3b654235e2f62fa1f2ea5f4f64c7.gif)](https://gyazo.com/853b3b654235e2f62fa1f2ea5f4f64c7)

Login page:

[![https://gyazo.com/ab1e7234613dc055e61d656b55035694](https://i.gyazo.com/ab1e7234613dc055e61d656b55035694.gif)](https://gyazo.com/ab1e7234613dc055e61d656b55035694)

***

__<h4>PS:</h4>__
Due to some technical problems in our main system android studio didn't work hence we couldn't build the apk. Sorry for inconvenience.
We shall continue to the work to the project after the hackathon shifting the backend to django and actually starting the services stated by us.
