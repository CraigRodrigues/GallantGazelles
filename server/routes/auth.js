const passport = require('passport');
const express = require('express');
const router = express.Router();

const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/User.js');


router.get('/signin', (req, res, next) => {
	//render or redirect
	// res.render('');
	// console.log(res);
	res.end('GET login bye');
});

router.post('/signin', passport.authenticate('local', {failureRedirect: '/signin'}), (req, res) => {
	//redirect to loggedIn home
	// res.redirect('');
	console.log('user on session: ');
	console.log(req.body.username);
    req.session.username = req.body.username;

	res.end('POST login bye');
});

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/signin');
});

module.exports = router;

//**************************
var localStrategy = new LocalStrategy((username, password, done) => {
	User.getUserByUsername(username)
	.then((user) => {
		console.log('this is user: ', user.rows);
		console.log('username: ', user.rows[0].username);
		if(user.rows.length !== 0) {
			//check pwd
			console.log('check pwd');
			if(_comparePassword(password, user.rows[0].password)) {
				done(null, user);
			} else {
				throw 'Invalid information';
			}
		} else {
			throw 'Invalid information';
		}
	}).catch((err) => {
		done(err);
	});
});


passport.use('local', localStrategy);

const _comparePassword = (newPass, oldPass) => {
    //should hash newPass, and then compare
    return newPass === oldPass;
};

passport.serializeUser((user, done) => {
	//using user.id in done led to failure in writing passport into req.session!!!!
	done(null, user);
});

passport.deserializeUser((user, done) => {
	//find a user in sesssions db table
	done(null, user);
});


