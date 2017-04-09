//setState()
/*
var Counter =React.createClass({
	getInitialState:function(){
		return {
			clickCount:0
		}
	},
	handleClick:function(){
		this.replaceState(function(state){
			console.log(state);//Object {clickCount: 0}clickCount:1
			return {clickCount:this.state.clickCount+1}
		})// 这个方法不行
//		this.replaceState({clickCount:this.state.clickCount+1}) //这个可以哦
		
	},
	render:function(){
		return (
			<h2 onClick={this.handleClick}>点我！点击次数为:{this.state.clickCount}</h2>
		)
	}
	
})

ReactDOM.render(
  <Counter />,
  document.getElementById('message')
);
*/

/*
var Hello=React.createClass({
	getInitialState:function(){
		return {
			opacity:1.0
		}
	},
	componentDidMount:function(){
		var me=this;
		this.timer=setInterval(function(){
			var opacity=me.state.opacity;
			opacity -=0.2;
			if(opacity<0.1) {
				opacity = 1.0;
			}
			me.setState({
				opacity:opacity
			})
		},100);
	},
	render:function(){
		return (
			<div style={{opacity:this.state.opacity}}>
			hello {this.props.name}
			</div>
		)
	}
})

ReactDOM.render(<Hello name="world"/>,document.getElementById('message'));
*/

/*var  Button = React.createClass({
	getInitialState:function(){
		return {
			data:0
		};
	},
	setNewNumber:function(){
		this.setState({data:this.state.data + 1})
	},
	render:function(){
		return (
			<div>
            <button onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         	</div>
		)
	}
})
var num=0;
var Content = React.createClass({
	componentWillMount:function(){
		num++;
		console.log(num,'componentWillMount');
	},
	componentDidMount:function(){
		num++;
		console.log(num,'componentDidMount');
	},
	componentWillReceivePros:function(newPros){
		num++;
		console.log(num,'componentWillReceivePros',newPros);
	},
	shouldComponentUpdate:function(newpros,newstate){
		num++;
		console.log(num,'shouldComponentUpdate',newpros);
		return true;
	},
	componentWillUpdate:function(){
		num++;
		console.log(num,'componentWillUpdate');
	},
	componentDidUpdate:function(){
		num++;
		console.log(num,'componentDidUpdate');
	},
	componentWillUnmount:function(){
		num++;
		console.log(num,'componentWillUnmount');
	},
	render:function(){
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		);
	}
})

ReactDOM.render(<Button/>,document.getElementById('message'))*/

var Button=React.createClass({
	//必须指定context的数据类型
	contextTypes:{
		color:React.PropTypes.string
	},
	render:function(){
		return (
			<button style={{background:this.context.color}}>
			{this.props.children}
			</button>
		);
	}
})


var Message = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
});

var MessageList = React.createClass({
	//也是必须写的
	childContextTypes : {
		color:React.PropTypes.string
	},
	getChildContext :function(){
		return {color:'red'}
	},
	render:function(){
		var children = this.props.messages.map(function(message){
			return <Message text={message.text} />
		});
		return <div>{children}</div>;
	}
})

var list=[{
	text:"woshi"
},{
	text:"woshi1"
},{
	text:"woshi2"
}]
ReactDOM.render(<MessageList messages={list}/>,document.getElementById('message'))