import React, { Component } from 'react';

import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { news } from '../actions';
import { connect } from 'react-redux';

class Search extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	query: ''
	  };
	}

	search(){
		console.log('Search button clicked', this.state.query);
		let url = `https://api.themoviedb.org/3/search/movie?api_key=b7b132ef558b085b8867a43b9304df23&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
		// console.log(url);
		fetch(url, {
			method: 'GET'
		}).then(response=> response.json())
		.then(jsonObject => {this.props.news(jsonObject.results)});
	}

	render(){
		return (
			<div>
				<Form inline className="col-md-12 col-md-offset-4">
					<FormGroup>
						<ControlLabel>Search </ControlLabel>
						{ ' ' }
						<FormControl
							style={{width:"60%"}}
							type="text"
							placeholder="Amazon etc"
							onChange={(event)=>this.setState({query: event.target.value})}
						/>
						{ ' ' }
						<Button
							onClick={()=>this.search()}
						>Submit</Button>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

export default connect(null, { news })(Search);