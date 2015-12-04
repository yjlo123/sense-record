var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sense Record', style: 'main' });
});

router.delete('/delete/:time', function(req, res, next) {
    var db = req.db;
    var collection = db.get('record');
    var recordToDelete = req.params.time;
    collection.remove({ 'time' : recordToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

router.get('/hello', function(req, res, next) {
  res.send('The Time is ' + new Date().toString());
});

module.exports = router;
