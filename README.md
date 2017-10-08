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
* [Attendence Record](#ATTENDENCE RECORD)
* [Assignment](#ASSIGNMENT)
* [College Contact](#COLLEGE CONTACT)

***
__<h2>REQUIREMENTS</h2>__
The project we proposed `HMRITM APP` has a suite of selective modules specifically tailored to the requirements of students and teachers. It is engineered and designed considering range of management functions needed within the college. Almost all departments within a baisc need (e. g. attendence, notices, time table etc) can be synchronized and accessed.
*** 
__<h2>ARCHITECTURE</h2>__

Both the iOS and Android versions of our app follow approximately the same underlying structure for storing and associating data. At the heart of the application is a series of interrelated classes (each of which also happens to correspond with a table in a database).

* __Ionic 3__ for Moblie Frontend
* __Firebase__ for Backend 
* __Django__

***
__<h2>PROGRESS</h2>__
    We are still deciding the database schema for the application, frontend work will finish in one and a half day as soon as we finish mocking up data and making relationships.
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
displays subject-wise assignment along with their deadlines.
***
__<h2>COLLEGE CONTACT</h2>__
Displays the name and __phone number__ of the college committee. Students can __contact__ the committee member for any __problem__.
***
__<h4>FOR MORE DETAILED AND INTERESTING INFORMATION.. PLEASE VISIT THIS INTERACTIVE LINK<h4>__
https://drive.google.com/open?id=0B_DXTvuuVV_aeHVwNHBfTzlfWFk
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
