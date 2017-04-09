//存储数据
function SaveData(name,data){
	if(data){
		localStorage.setItem(name,JSON.stringify(data));
		return ;
	}
	
	return (name && JSON.parse(localStorage.getItem(name))) || {};
}

//定义一个方法

function Model(){
	this.listdata=SaveData('items')  //存储输入的值
	
	//事件队列模型   发布与订阅模式 用来解决模块与模块之间互相调用问题
	this.EventQueue = [];
}

//添加项
Model.prototype.additem=function(item){
	var id = Date.now();
	
	this.listdata[id] = {
		cid: id,
		text: item,
		completed: false
	}
	SaveData('items',this.listdata);
	this.updateView();
}

//删除项
Model.prototype.deleteItem=function(item){
	    delete this.listdata[item.cid];
	    SaveData('items',this.listdata);
	    this.updateView();
	  
}

//修改项
Model.prototype.changeItem=function(item){
	    this.listdata[item.cid].completed=!this.listdata[item.cid].completed;
	    SaveData('items',this.listdata);
	    this.updateView();
	  
}


//全选

Model.prototype.changeAllflag=function(event){
	for (var key in this.listdata) {
            this.listdata[key].completed=event.target.checked;
	}
	this.updateView();
}


//更新项
Model.prototype.register = function(callback){
	//事件的注册	
	this.EventQueue.push(callback);
}

//修改文本
Model.prototype.addText=function(event,key){
	this.listdata[key].text=event.target.value;
	this.updateView();
	SaveData('items',this.listdata);
}




Model.prototype.inform = function(){
	//事件的发布
	for(var i =0; i < this.EventQueue.length; i++) {
		this.EventQueue[i](); //把事件队列里面的回调函数全部的进行执行
	}	 	
}






Model.prototype.updateView = function(){
	//进行视图的更新
	this.inform();	 	
}




//创建一个实例对象
var model = new Model(); 









