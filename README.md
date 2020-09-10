1.Oauth autharization using "Passport" and "passport-google-oauth20".

2."npm start" for run the application.

3."npm test" for run the test.

4.Install nodemon.

5.Application run on http://localhost:7000/

6.When load base url(http://localhost:7000/) it will display a landing page with text "Example Home page!".

7."http://localhost:7000/google" will redirect to the google authraization page select one google account.

8.Once user select the googel application it will redirect to the application page "http://localhost:7000/good" the page will display a text with user name "Welcome mr logged user name"(Logged user name that fetched from the google account).

9."http://localhost:7000/logout" user will logout from the application and redirect to the base Url (http://localhost:7000/).

10.Without having the login user can't access the success route (http://localhost:7000/good). it will get Un authorized message.
