var Input=React.createClass({//输入框
	begin:function(event){
		console.log('我要变色了');
		if(event.keyCode==13){
			this.props.change(event.target.value);
			event.target.value="";
		}
	},
	render:function(){
		return (
			<div>
				<h3>输入你喜欢的颜色：</h3>
				<input type="text" onKeyUp={this.begin}/>
			</div>
		)	 	
	}
});
var BoxList=React.createClass({
	render:function(){
		return (
			<ul>
			{	
				this.props.boxlist.map(function(value,index){
				//遍历存颜色的数组，将颜色块渲染出来
					return <li key={index} style={{background:value,color:'#fff',display:'block',listStyle:'none',width:100,height:100}}>{value}</li>
				})
			}
			</ul>
		)	 	
	}
});
var Container=React.createClass({
	getInitialState:function(){
		return{
			list:['red']
		}
	},
	changeColor:function(color){//传的color就是输入框中所输入的颜色
		var l=this.state.list;
		l.push(color);
		this.setState({
			list:l
		});
	},
	render:function(){
		return (
			<div>
				<Input change={this.changeColor}></Input>	
				<BoxList boxlist={this.state.list}></BoxList> 
				{this.state.list.join('-')}
			</div>
		)
	}
});
	ReactDOM.render(<Container></Container>,document.getElementById('color'));