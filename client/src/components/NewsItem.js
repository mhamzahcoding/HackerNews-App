import React, { Component } from 'react';

class NewsItem extends Component {
	render(){
		return(
		  <div className="col-sm-12 col-sm-3">
		    <div className="thumbnail">
		      <div className="caption">
		        <h3>{this.props.new.title}</h3>
		        <p>{this.props.new.overview}</p>
		        <p>Release Date - {this.props.new.release_date}</p>
		        <p>Ratings - <span className="badge badge-default"><span className="glyphicon glyphicon-star" aria-hidden="true"></span> {this.props.new.vote_average}</span></p>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default NewsItem;








