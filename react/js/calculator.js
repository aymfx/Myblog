var differentcase={
	 c:'摄氏度',
	 f:'华氏度'
}

var Water=React.createClass({
	render:function(){
		if(this.props.temperature>=100){
			return <p>呀,水烧开了,可以泡面了</p>
		}else{
			return <p>再等等吧,好饿呀</p>
		}
	}
});

//摄氏度转华氏度
	function toF(value){
		return (value)*9/5+32;
	}

//华氏度转摄氏度
	function toC(value){
		return (value-32)*5/9;
	}




var Input=React.createClass({
	render:function(){
		return (
			<div>
				<p>{this.props.text}是</p>
				<input type="text" onChange={this.change} value={this.props.temperature}/>
			</div>
		)
	},
	change:function(event){
		this.props.handle(event.target.value);
	}
});



var Calculator=React.createClass({
	getInitialState:function(){
		return {
			temperature:0,
			name:'c'
		}
	},
	changec:function(value){
		this.setState({
			temperature:value,
			name:'c'
		})
	},
	changef:function(value){
		this.setState({
			temperature:value,
			name:'f'
		})
	},
	render:function(){
		var c=0;
		var f=0;
		
		if(this.state.name=='c'){
			f=toF(this.state.temperature);
			c=this.state.temperature;
		}else{
			f=this.state.temperature;
			c=toC(this.state.temperature);
			
		}

		return (
			<div>
			     <Input text={differentcase['c']} temperature={c} handle={this.changec}/>
			     <Input text={differentcase['f']} temperature={f} handle={this.changef}/>
			     <Water temperature={this.state.temperature}/>
			</div>
		)
	}
});

ReactDOM.render(<Calculator/>,document.getElementById('example'));







