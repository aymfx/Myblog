#react特点
	1.声明式设计 −React采用声明范式，可以轻松描述应用。
	2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
	3.灵活 −React可以与已知的库或框架很好地配合。
	4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
	5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
	6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

#react.min.js 、react-dom.min.js 和 babel.min.js
	react.min.js - React 的核心库
	react-dom.min.js - 提供与 DOM 相关的功能
	babel.min.js - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平。
	browser.js - 将jsx专门转化成js
	
#React JSX
	React 使用 JSX 来替代常规的 JavaScript。JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。
	JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
	它是类型安全的，在编译过程中就能发现错误。
	使用 JSX 编写模板更加简单快速。
	
#先安装Babel命令行工具（需要 npm)，可以解析jsx
	npm install --global babel-cli
	npm install babel-preset-react	
	命令行：babel --presets react src --watch --out-dir build

 - ReactDOM.render 
	React中最最核心的一个方法，进行视图渲染的一个方法
	 它接收2个参数 html片段, domid
	babel 它是一个解析js的核心库，它可以转译es6、jsx（变成普通的js代码）
 
 - React.createElement('元素名','标签的属性','元素内容或者子节点')
 	
	var child1 = React.createElement('li', null, 'First Text Content');  
	var child2 = React.createElement('li', null, 'Second Text Content');  
	var child3 = React.createElement('li', null, 'Third Text Content');  
	var root = React.createElement('ul', { className: 'my-list' }, [child1, child2, child3]);  
	ReactDOM.render(  
	    root,  
	    document.getElementById('content')  
	);  
	
#React要注意的地方
	1)获取属性的值用的是this.props.属性名
	
	2）创建的组件名称首字母必须大写。
	
	3）为元素添加css的class时，要用className。
	
	4）组件的style属性的设置方式也值得注意，要写成style={{width: this.state.witdh}}。
	

#javascript表达式
	{}，在花括号里面写表达式
	
#不支持if else 要使用三元运算符号
	{i=1?i++:i--}
	
#样式  React 推荐使用内联样式
	1.React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。
	<script type="text/babel">
			var myStyle={
					fontSize:100,
					color:'#ff0000'
			}
			ReactDOM.render(
				<h1 style={myStyle}>ly</h1>,
				document.getElementById('example')
			)
	</script>
	2.在行间加样式时，里面是一个对象
	<h1 style={{color:'red',fontSize:100}}>adadasd</h1>
	
#注释  ：注释需要写在花括号中
	{/*注释...*/}
	
#数组：JSX 允许在模板中插入数组，数组会自动展开所有成员
	为什么会出现如下错误?
	Each child in an array or iterator should have a unique "key" prop. Check the top-level render call using <div>
	答:这个是和react的dom-diff算法相关的。react对dom做遍历的时候，会根据data-reactid生成虚拟dom树。如果你没有手动的添加unique constant key的话，react是无法记录你的dom操作的。它只会在重新渲染的时候，继续使用相应dom数组的序数号(就是array[index]这种)来比对dom树。

	//数组  ，隐式迭代
		var arr=[<h1>我是第一个</h1>,<h1>我是第二个</h1>,<h1>我是第三个</h1>];
		var arr2=['我是第一个','我是第二个','我是第三个'];
		
		/*ReactDOM.render(<div>{arr}</div>,document.getElementById('example'))*/
		
		ReactDOM.render(<div>{arr2.map(function(ele,index){
					return <h1 as={index}>{ele}</h1>
			})}</div>,document.getElementById('example'))

#HTML 标签 和 React 组件的区别

	React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)。
	要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。
	要渲染 React 组件，只需创建一个大写字母开头的本地变量。
	React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。
	注意:由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。

#React组件
	定义一个组件
	var FirstComponent=React.createClass({
		render:function(){
			return <h1>hello world！</h1>
		}
	});
	
	//传递参数 this.props
		
	ReactDOM.render(
		<FirstComponent name="ly"/>, //同过this.props.name
		document.getElementById('example');
	)
	
#React State(状态)
	React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。
	React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。

	利用getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件
	
	<script type="text/babel">
    	var Ly=React.createClass({
    		getInitialState:function(){  //初始化状态
    			return {liked:false}
    		},
    		handleClick:function(event){
    			this.setState({liked:!this.state.liked});  //设置状态
    		},
    		render:function(){
    			var text=this.state.liked ? '喜欢' : '爱';
    			num++;
    			return (
    				<p onClick={this.handleClick}>
    				我<b>{text}</b>你:点击切换状态{num}
    				</p>
    			)
    		}
    	})
    	ReactDOM.render(<Ly></Ly>,document.getElementById('example'));
    </script>
    setState({},function(){}),因为它是异步的，所以要有第二个参数
   
#React Props
	state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 state 来传递数据。
	
	默认 Props  通过 getDefaultProps() 方法为 props 设置默认值
	
		<script type="text/babel">
    	var Ly=React.createClass({
    		getDefaultProps:function(){
    			return {
    				name:'ly'  //设置默认值
    			}
    		},
    		render:function(){
    			
    			
    			return (
    				<p>
    				  一二三四五 {this.props.name}上山打老虎
    				</p>
    			)
    		}
    	})
    	ReactDOM.render(<Ly></Ly>,document.getElementById('example'));
    </script>

	
#Props 验证：Props 验证使用 propTypes，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。
	
	验证方式:定义在创建组件的地方
	propTypes: {
	    // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
	   optionalArray: React.PropTypes.array,
	    optionalBool: React.PropTypes.bool,
	    optionalFunc: React.PropTypes.func,
	    optionalNumber: React.PropTypes.number,
	    optionalObject: React.PropTypes.object,
	    optionalString: React.PropTypes.string,
	
	    // 可以被渲染的对象 numbers, strings, elements 或 array
	    optionalNode: React.PropTypes.node,
	
	    //  React 元素
	    optionalElement: React.PropTypes.element,
	
	    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
	    optionalMessage: React.PropTypes.instanceOf(Message),
	
	    // 用 enum 来限制 prop 只接受指定的值。
	    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
	
	    // 可以是多个对象类型中的一个
	    optionalUnion: React.PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.number,
	      React.PropTypes.instanceOf(Message)
	    ]),
	
	    // 指定类型组成的数组
	    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
	
	    // 指定类型的属性构成的对象
	    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
	
	    // 特定 shape 参数的对象
	    optionalObjectWithShape: React.PropTypes.shape({
	      color: React.PropTypes.string,
	      fontSize: React.PropTypes.number
	    }),
	
	    // 任意类型加上 `isRequired` 来使 prop 不可空。
	    requiredFunc: React.PropTypes.func.isRequired,
	
	    // 不可空的任意类型
	    requiredAny: React.PropTypes.any.isRequired,
	
	    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
	    customProp: function(props, propName, componentName) {
	      if (!/matchme/.test(props[propName])) {
	        return new Error('Validation failed!');
	      }
	    }
	  },
	
	});

#React 组件 API
	设置状态：setState
	替换状态：replaceState
	设置属性setProps
	替换属性replaceProps
	强制更新：forceUpdate
	获取DOM节点：findDOMNode
	判断组件挂载状态：isMounted

 - 设置状态:setState ：setState(object nextState[, function callback])
	nextState，将要设置的新状态，该状态会和当前的state合并
	callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。
	合并nextState和当前state，并重新渲染组件。setState是React事件处理函数中和请求回调函数中触发UI更新的主要方法。
	关于setState：
		不能在组件内部通过this.state修改状态，因为该状态会在调用setState()后被替换。
		setState()并不会立即改变this.state，而是创建一个即将处理的state。setState()并不一定是同步的，为了提升性能React会批量执行state和DOM渲染。
		setState()总是会触发一次组件重绘，除非在shouldComponentUpdate()中实现了一些条件渲染逻辑。
	
	var Counter =React.createClass({
	getInitialState:function(){
		return {
			clickCount:0
		}
	},
	handleClick:function(){
		this.setState(function(state){
			console.log(state);//Object {clickCount: 0}clickCount:1
			return {clickCount:state.clickCount+1}
		})
		/*this.setState({
			clickCount:this.state.clickCount+1
		})*/  //两种方式
		
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

 - 替换状态：replaceState :replaceState(object nextState[, function callback])
 
	nextState，将要设置的新状态，该状态会替换当前的state。
	callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。
	replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除。
	
	var Counter =React.createClass({
	getInitialState:function(){
		return {
			clickCount:0
		}
	},
	handleClick:function(){
		/*this.replaceState(function(state){
			console.log(state);//Object {clickCount: 0}clickCount:1
			return {clickCount:this.state.clickCount+1}
		})*/ // 这个方法不行
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
	  

 - 设置属性：setProps ： setProps(object nextProps[, function callback])

	nextProps，将要设置的新属性，该状态会和当前的props合并
	callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
	设置组件属性，并重新渲染组件。
	props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。当和一个外部的JavaScript应用集成时，我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。
	更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。
	
 - 替换属性：replaceProps ：replaceProps(object nextProps[, function callback])
	nextProps，将要设置的新属性，该属性会替换当前的props。
	callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。
	replaceProps()方法与setProps类似，但它会删除原有 
 - 强制更新：forceUpdate ： forceUpdate([function callback])
	callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。
	
	forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
	forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用render()
	一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。
	
 - 获取DOM节点：findDOMNode : DOMElement findDOMNode()
 	返回值：DOM元素DOMElement
	如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当render返回null 或 false时，this.findDOMNode()也会返回null。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。
	
 - 判断组件挂载状态：isMounted
	bool isMounted()
	返回值：true或false，表示组件是否已挂载到DOM中
	isMounted()方法用于判断组件是否已挂载到DOM中。可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错。
	

#什么叫做DOM diff
	组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。

	
#表单
	注意:文本输入框的值，不能用 this.props.value 读取，而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取用户输入的值。textarea 元素、select元素、radio元素都属于这种情况
		
	var Input = React.createClass({
	  getInitialState: function() {
	    return {value: 'Hello!'};//初始化值
	  },
	  handleChange: function(event) {
	    this.setState({value: event.target.value}); //当输入框值发生改变，状态值相应变化
	  },
	  render: function () {
	    var value = this.state.value;
	    return (
	      <div>
	        <input type="text" value={value} onChange={this.handleChange} />
	        <p>{value}</p>
	      </div>
	    );
	  }
	});
	
	ReactDOM.render(<Input/>, document.body);

#React组件生命周期
	组件的生命周期可分成三个状态：
		Mounting：已插入真实 DOM
		Updating：正在被重新渲染
		Unmounting：已移出真实 DOM
	生命周期的方法有：
		componentWillMount 在渲染前调用,在客户端也在服务端。
		componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
		componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
		shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
		可以在你确认不需要更新组件时使用。
		componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
		componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
		componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
		
	var Hello=React.createClass({
	getInitialState:function(){
		return {
			opacity:1.0
		}
	},
	componentDidMount:function(){ //在第一次渲染后调用。
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
	

	var  Button = React.createClass({
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
	
	ReactDOM.render(<Button/>,document.getElementById('message'))

#React 中 context 的使用
	起因:为了有时候想传递数据通过组件树，但是不想给每一层级的组件手动传递属性，那么 context 就能帮你 "越级" 传递数据到组件树中你想传递到的深层次组件。
	
	//在没有使用context之前，用属性传递到最底层，有时候 A组件 为了给 B组件 中的 C组件 传递一个 prop ，而需要把参数在组件中传递两次才能最终将 A组件 中的 prop 传递给 C组件 
	
	var Button = React.createClass({
	  render: function() {
	    return (
	      <button style={{background: this.props.color}}>
	        {this.props.children}
	      </button>
	    );
	  }
	});
	
	var Message = React.createClass({
	  render: function() {
	    return (
	      <div>
	        {this.props.text} <Button color={this.props.color}>Delete</Button>
	      </div>
	    );
	  }
	});
	
	var MessageList = React.createClass({
	  render: function() {
	    var color = "purple";
	    var children = this.props.messages.map(function(message) {
	      return <Message text={message.text} color={color} />;
	    });
	    return <div>{children}</div>;
	  }
	});
	
	//使用 context 改进数据传递
	
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
	

#ReactAJAX :React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据库可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。
	实例:
		//获取github用户最新gitst
		var UserGist=React.createClass({
			getInitialState:function(){
				return {
					username:'',
					lastGistUrl:''
				}
			},
			
			componentDidMount:function(){
				var me=this;
				this.serverRequest = $.get(this.props.source,function(result){
					var lastGist = result[0];
					console.log(result);
					me.setState({
						username:lastGist.owner.login,
						lastGistUrl:lastGist.html_url
					});
				})
			},
			
			componentWillUnmount : function () {
				this.serverRequest.baort();
			},
			
			render : function() {
				return (
					<div>
						{this.state.username} 用户最新的 Gist 共享地址：
						<a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
					</div>
				)
			}
		});
		
		ReactDOM.render(
			<UserGist source="https://api.github.com/users/octocat/gists" />,
			document.getElementById('mess')
		)
		
#React 表单与事件
		当你需要从子组件中更新父组件的 state 时，你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上。实例如下：
		var Content = React.createClass({
	  render: function() {
	    return  <div>
	              <button onClick = {this.props.updateStateProp}>点我</button>
	              <h4>{this.props.myDataProp}</h4>
	           </div>
	  }
	});
	var HelloMessage = React.createClass({
	  getInitialState: function() {
	    return {value: 'Hello W3CSchool!'};
	  },
	  handleChange: function(event) {
	    this.setState({value: 'W3Cschool教程'})
	  },
	  render: function() {
	    var value = this.state.value;
	    return <div>
	            <Content myDataProp = {value} 
	              updateStateProp = {this.handleChange}></Content>
	           </div>;
	  }
	});
	ReactDOM.render(
	  <HelloMessage />,
	  document.getElementById('example')
	);

#React Refs :React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。

	var MyComponent = React.createClass({
	  handleClick: function() {
	    // 使用原生的 DOM API 获取焦点
	    this.refs.myInput.focus();
	  },
	  render: function() {
	    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
	    return (
	      <div>
	        <input type="text" ref="myInput" />
	        <input
	          type="button"
	          value="点我输入框获取焦点"
	          onClick={this.handleClick}
	        />
	      </div>
	    );
	  }
	});
	
	ReactDOM.render(
	  <MyComponent />,
	  document.getElementById('example')
	);
	
	//实例中，我们获取了输入框的支撑实例的引用，子点击按钮后输入框获取焦点。我们也可以使用 getDOMNode()方法获取DOM元素

#获取局部对象
    function Model(){
		//数据模型	 
		this.todos = {};
	
		//事件队列模型
		this.EventQueue = [];
	}
	//在更新视图中调用，需要渲染的局部对象
	Model.prototype.updateView = function(){
		//进行视图的更新
		this.inform();	 	
	}
	
	Model.prototype.register = function(callback){
		//事件的注册	
		this.EventQueue.push(callback);
	}
	
	Model.prototype.inform = function(){
		//事件的发布
		for(var i =0; i < this.EventQueue.length; i++) {
			this.EventQueue[i](); //把事件队列里面的回调函数全部的进行执行
		}	 	
	}
	var model = new Model(); //创建一个实例对象  全局

		