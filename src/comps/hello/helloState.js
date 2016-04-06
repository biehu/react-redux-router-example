const ADD_HELLO_NUM = 'ADD_HELLO_NUM';

export function addNum(num) {
	return {
		type: ADD_HELLO_NUM,
		num
	};
};

const initState = {
	num: 1
};

export default function helloState(state = {}, action) {
	switch (action.type) {
		case ADD_HELLO_NUM:
			return {
				...state,
				num: action.num
			};
		
		default:
			return state;
		
	};
}
