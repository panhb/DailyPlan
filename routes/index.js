var express = require('express');
var router = express.Router();
var url = require('url');
var moment = require('moment');
var utils = require('../utils');
var Plan = require('../model').Plan;


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/planData', function(req, res, next) {
	Plan.find(function(err, plans){		
		var a = [];
		for(var o in plans){
			var ob = {};
			ob.title = plans[o].title;
			ob.start = plans[o].start_time;
			ob.end = plans[o].end_time;
			ob.description = plans[o].content;
			a.push(ob);
		}
		res.send(a);
	}); 
});

router.get('/plan/add', function(req, res, next) {
	res.render('addPlan');
});



router.get('/plan/addOrUpdate', function(req, res, next) {
	var params = url.parse(req.url,true).query; 
	var title=params.title;
	var content=params.content;
	var startTime=params.startTime.trim();
	var endTime=params.endTime.trim();
	var _id=params._id;
	var obj = {};
	obj.title = title;
	obj.content = utils.xss(content);
	obj.start_time = startTime;
	obj.end_time = endTime;
	if(_id === null || _id ===''){
		obj.user_id = '0';
		obj.create_time = moment().format('YYYY-MM-DD HH:mm:ss');
		Plan.create(obj,function(){
			res.redirect('/');
		});
	}else{
		Plan.findByIdAndUpdate(_id,obj,null,function(){
			res.redirect('/plan/list');
		});
	}
	
});

router.get('/plan/list', function(req, res, next) {
	Plan.find(function(err, plans){
		if (plans === []) {
			res.render('planlist');
		}else{
			for(var i in plans){
				plans[i].create_time_s  = moment(plans[i].create_time).format('YYYY-MM-DD HH:mm:ss');
			}
			res.render('planlist', { list: plans });
		}		
	});
});


router.get('/plan/del/:id', function(req, res, next) {
	var id=req.params.id;
	Plan.findByIdAndRemove(id,function(err){
		res.redirect('/plan/list');
	});
});


router.get('/plan/edit/:id', function(req, res, next) {
	var id=req.params.id;
	Plan.findById(id,function(err,plan){
		res.render('addPlan',plan);
	});
});

module.exports = router;
