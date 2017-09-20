var React = require('react');
var ReactDom = require('react-dom');
require('./index.css')

class App extends React.Component {
	render() {
		return (
			<div>
				Hello Chingu Turtles Team 15!
			</div>
		)
	}
}

ReactDom.render( <App />, document.getElementById('app'));
