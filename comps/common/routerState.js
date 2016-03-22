//-----------------
// constants block
//-----------------
export const FETCH_NEW_COMPONENT = 'FETCH_NEW_COMPONENT';

//-----------------
// actions block
//-----------------
export function fetchNewComponent(state) {
    return {
        type: FETCH_NEW_COMPONENT,
        state
    };
}

//-----------------
// reducer block
//-----------------
const initState = {
    fetching: false // 等待状态
};

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_NEW_COMPONENT:
            return {
                ...state,
                fetching: action.state
            };

        default:
            return state;
    }
};
