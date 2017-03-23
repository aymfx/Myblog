var fs=require('fs');
/*fs.readFile('../other/input.txt','utf-8',function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data);
	}
	
})
*/

fs.open('../other/input.txt','r',function(err,fd){
	if(err){
		console.log(err);
		return;
	}
	 var buf=new Buffer(60);
	fs.read(fd,buf,0,60,null,function(err,bytesRead,buffer){
		if(err){
			console.log(err);
			return;
		}
		console.log('bytesRead:'+bytesRead);
		console.log(buffer.toString());
	})
	
})



