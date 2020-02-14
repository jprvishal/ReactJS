// var Hello = React.createClass({
//   render: function() {
//     return (
//       <h2>What's app React, This is Vishal!</h2>
//     );
//   }
// });

class Hello extends React.Component {
	render() {
	  return (
		  <h2>What's app React, This is Vishal</h2>
		);
	}
  }
  
  class HelloAgain extends React.Component {
	render() {
	  return (
		  <div>
			<h1>Vishal</h1>
			<h2>You age: 39</h2>
		  </div>
		);
	}
  }
  
  function HelloWorld(props) {
	return(
	  <div>
		<h1>{props.name}</h1>
		<h2>Version: {props.version}</h2>
	  </div>
	);
  }
  
  var app = (
	<div>
	  <HelloWorld name="Hello Jaipur" version="1"/>
	  <HelloWorld name="Hello Rajasthan" version="2"/>
	  <HelloWorld name="Hello India" version="3"/>
	</div>
	);
  
  ReactDOM.render(<Hello />, document.getElementById("root"));
  ReactDOM.render(<HelloAgain />, document.querySelector("#app"));
  ReactDOM.render(<HelloWorld name="Hello Jaipur" version="1"/>, document.querySelector("#app"));
  ReactDOM.render(app, document.querySelector("#app"));
  