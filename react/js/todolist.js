var ENTER_KEY=13;
var ESC_KEY=27;

//头部输入框组件
var HeaderInput=React.createClass({
	submit:function(event){
			if(event.keyCode==ENTER_KEY){
			  model.additem(event.target.value);
			  event.target.value='';
			}
			
		},
	render:function(){
		
		return (
			<header id="header">
					<h1>todos</h1>
					<input id="new-todo" placeholder="What needs to be done?" autofocus="" onKeyUp={this.submit}/>
			</header>
		);
	}
})


//列表项组件

var ItmesComponent=React.createClass({
	getInitialState:function(){
		return {
			editable:false,
			editabletext:'',
			cid:0
		}
	},
	componentDidMount:function(){
		var item=this.props.item;
		this.setState({
			editabletext:item.text,
			cid:item.cid
		})
		
	},
	componentDidUpdate:function(){
		if(this.state.editable){
			var dom=this.refs.editDom;
			dom.focus();
			dom.setSelectionRange(dom.value.length,dom.value.length)
		}
	},
	delete:function(){
		model.deleteItem(this.props.item);	
	},
	change:function(){
		model.changeItem(this.props.item);
	},
	render:function(){
		var item=this.props.item;
		console.log(1);
		return (
			<li data-id={item.cid} className={classNames({completed:item.completed,editing:this.state.editable})}>
							<div className="view">
								<input className="toggle" type="checkbox"  checked={item.completed} onChange={this.change} />
								<label onDoubleClick={this.edit}>{item.text}</label>
								<button className="destroy" onClick={this.delete}></button>
							</div>
							<input className="edit" value={this.state.editabletext} onKeyUp={this.editing} onChange={this.editchange} ref="editDom"/>
			</li>
		);
	},
	edit:function(){
		
		console.log(this.state.editable);
		this.setState({
			editable:true
		});
	},
	editing:function(event){
		
		if(event.keyCode==ENTER_KEY){
			  model.addText(event,this.state.cid);
			  this.setState({
					editable:false
			   });
		}
		if(event.keyCode==ESC_KEY){
			this.setState({
					editable:false
			   });
			   
		}
	},
	editchange:function(event){
		this.setState({
					editabletext:event.target.value
		   });
	}
	
	
})

//foot组件

var FootNav=React.createClass({
	render:function(){
	
		var flag = this.props.len > 0 ? 'block' : 'none';
		return (
			<footer id="footer" style={{display:flag}}>
				<span id="todo-count"><strong>1</strong> item left</span>
				<ul id="filters">
					<li>
						<a className="selected" href="#/all" className={classNames({selected:this.props.hash === 'all'})}>All</a>
					</li>
					<li>
						<a href="#/active" className={classNames({selected:this.props.hash === 'active'})}>Active</a>
					</li>
					<li>
						<a href="#/completed" className={classNames({selected:this.props.hash === 'completed'})}>Completed</a>
					</li>
				</ul>
			</footer>
		);
	}
})

//container组件

var Container=React.createClass({
	getInitialState:function(){
		return {
			nowShowing:'all'
		}
	},
	componentDidMount:function(){
		this.setState({
			nowShowing:location.hash.slice(2)
		})
		var me=this;
		window.onhashchange=function(){
			
			me.setState({
			nowShowing:location.hash.slice(2)
		})
		}
	},
	render:function(){
		 var activeCount=0;
		 var arr=[];
		 var num=0;
		for(var key in model.listdata){
			if(!model.listdata[key].completed){
				activeCount++;
				
			}
			
			if(this.state.nowShowing=='all'){
					arr.push(<ItmesComponent item={model.listdata[key]} key={key} />)
			}else if(this.state.nowShowing=='active'){
				if(!model.listdata[key].completed){
					arr.push(<ItmesComponent item={model.listdata[key]} key={key} />)
				}
			}else{
				if(model.listdata[key].completed){
					arr.push(<ItmesComponent item={model.listdata[key]} key={key} />)
				}
			}
			num++;
		}
		var len =num;
		return (
			<section id="todoapp">
					<HeaderInput />
				<section id="main" style={{display:'block'}}>
					<input id="toggle-all" type="checkbox"  checked={activeCount===0} onChange={this.Allchange}/>
					<label htmlFor="toggle-all">Mark all as complete</label>
					<ul id="todo-list">
						{
							arr
						}
					</ul>
				</section>
				<FootNav  len={len}   hash={this.state.nowShowing}></FootNav>
			</section>
		);
	},
	Allchange:function(event){
		console.log(event);
		model.changeAllflag(event);
	}
	
})

//我们开始渲染了

function render(){
	ReactDOM.render(
	<Container />
	,
	document.getElementById('demo')
);
}
render()
model.register(render);
