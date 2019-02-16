import { NEWS } from '../actions';

export default function news(state = [], action) {
	switch(action.type) {
		case NEWS:
			console.log("News are ",action.items);
			return action.items;
		default:
			return state;
	}
}