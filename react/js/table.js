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
