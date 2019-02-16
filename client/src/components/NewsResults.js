import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

class NewsResults extends Component {
	render() {
		return (
			<div>
				<Search />
				{this.props.news.map(item => {
					return <NewsItem new={item} key={item.created_at_i} showButton={true}/>
				})
			}
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		news: state.news
	}
}

export default connect(mapStateToProps, null)(NewsResults);