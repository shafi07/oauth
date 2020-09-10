const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
	/*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: "262770100574-tph43r8b1r6hrlquvh14mnok8dh9hbag.apps.googleusercontent.com",
			clientSecret: "vNLgxSk3XKrnnm7OH7lyC-tY",
			callbackURL: "http://localhost:7000/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			return done(null, profile);
		}
	)
);
