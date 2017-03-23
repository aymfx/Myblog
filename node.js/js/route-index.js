var server=require('./start');
var router=require('./router');


server.start(router.route);
