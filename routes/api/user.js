const router = require('express').Router();
const UserController = require('../../controllers/user.controller');
const passport = require('passport');
const passportSetup = require('../../config/passport_setup');
const uploadS3=require('../../config/multer');


router.get('/auth/google', passport.authenticate('google', {
	scope: ["profile"]
}));
router.get('/auth/google/redirect/', passport.authenticate('google', { failureRedirect: '/' }), UserController.googleCallback);
router.post('/create', UserController.create);
router.get('/user/:username', UserController.view); 
router.get('/existsUser/:id', UserController.existingUser); //If User Already Exists then user can show his data as it is on form 
router.get('/check/:username/:id', UserController.check);  //Username check Whether Username already or not AJAX call
router.get('/count', UserController.countUser);  //for global stats how many documents we have 
router.get('/logout', UserController.logout);  //Logout 
router.get('/getuser', UserController.getUser);  //get session user google id 


router.post('/upload', uploadS3.single('file'),(req, res) => {
    // console.log("Check File Upload " +req.file.location);
	res.json(req.file.location);
});





module.exports = router;
