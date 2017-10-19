import React from 'react';
//import CSS
import '../styles.css';
//import components
import Items from './Items';

class App extends React.Component {
	state = { items : [] }

	componentDidMount() {    
		let url = 'https://jsonplaceholder.typicode.com/photos';

	    fetch(url).then((response) => {
			return response.json()
		})
		.then((data) => {
			let setItems = [];
			
			for (let item in data){
			  	if ( item < 100 ) {
					setItems.push(data[item]);
			  	}
			};
			this.setState({ items : [...setItems] });
		})
		.catch(function(err) {
			console.log(err);
		})
	}

	render () {
		return(
			<div className="section">
				<Items items={ this.state.items }/>
			</div>
		)
	}
}
export default App;