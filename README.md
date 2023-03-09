# React_task
Requirements :Login page fields

Login page, it must have the following pages. a. Username b. Password c. Button(Log in) Note : Username, Password validation needed Should log in, when itâ€TMs matched with below JSON , redirectTo - EmployeeList page
{
"username":"hruday@gmail.com",'
"password" :'hruday123'
}
JSON - DashBoardPage
{
user:[{
"id":1,
"name":"test1",
"age" : "11",
"gender":"male",
"email" : "test1@gmail.com",
"phoneNo" : "9415346313"
},
{
"id" : 2,
"name":"test2",
"age" : "12",
"gender":"male",
"email" : "test2@gmail.com",
"phoneNo" : "9415346314"
},
{
"id":3,
"name":"test3",
"age" : "13",
"gender":"male",
"email" : "test3@gmail.com",
"phoneNo" : "9415346315"
},
{
"id":4,
"name":"test4",
"age" : "14",
"gender":"male",
"email" : "test4@gmail.com",
"phoneNo" : "9415346316"
},
{
"id":5,
"name":"test5",
"age" : "15",
"gender":"male",
"email" : "test5@gmail.com",
"phoneNo" : "9415346317"
},
{
"id":6,
"name":"test6",
"age" : "16",
"gender":"male",
"email" : "test6@gmail.com",
"phoneNo" : "9415346318"
}
]
}

Steps to Start the project.
1. Clone the Project.
2. Run the "npm install" command inside the Frontend and the backend folder separately this will install node modules in both folders.
3. Run the "npm start" command in two terminals one for the backend and another for the frontend folder.
4. The frontend will be started on "http://localhost:8080/login" and the backend on "http://localhost:5000".

Frontend:
1. Webpack is used with React.
2. Redux is used for maintaining state.

Login Page:
1. Validation for email and password format.
2. Validation for an authorized user.
3. Validation for unauthorized routing i.e. without logging in user can't go to the dashboard page.
4. If the user is logged in then it will remain logged in and will be redirected to the dashboard page. used Json web token used for the same.

Dashboard Page:
1. After a successful login attempt, user will be directed to this page.
2. The employees list is displayed on this screen.
3. User can logout by clicking on the logout button.
4. if a logged-in user tries to go back to the login page it will be redirected back to dashboard page.

Backend:
1. The entry point is index.js.
2. An API is used for verification of the user.
3. Validation of user is done on the server-side also.

Future scope: Server-side Pagination can be added to display the list of employees.
