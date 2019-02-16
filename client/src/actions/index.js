export const NEWS = "NEWS";

export function news(items) {
	const action = {
		type: NEWS,
		items
	}
	return action;
}