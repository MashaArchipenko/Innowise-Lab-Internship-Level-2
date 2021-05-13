import { SET_IMAGE, SAVE_IMAGE, CLEAR_CANVAS, CanvasState, Image, CanvasAction } from "../canvasTypes";


const initialState: CanvasState =
{
    image: [],
    userId: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: CanvasAction) => {
    switch (action.type) {
        case SET_IMAGE:
            return {
                ...state,
                image: action.payload
            }
        case SAVE_IMAGE:
            return {
                ...state,
                image: action.payload
            }
        case CLEAR_CANVAS:
            return {
                ...state
            }
        default:
            return state;
    }
}