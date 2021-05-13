export const SET_IMAGE = 'SET_IMAGE'
export const SAVE_IMAGE = 'SAVE_IMAGE'
export const CLEAR_CANVAS = 'CLEAR_CANVAS'

export interface Image {
    id:number;
    imageUrl: string;
    name: string;
};

export interface CanvasState{
    image:Array<Image>,
    userId: string;
}

export interface SaveData {
    imageUrl: string;
    userId: string;
    name: string;
}

interface SetCanvasAction {
    type: typeof SET_IMAGE;
    payload: Image
}

interface SetClearAction {
    type: typeof CLEAR_CANVAS;
}

interface SetSaveAction {
    type: typeof SAVE_IMAGE;
    payload:Image
}

export type CanvasAction = SetCanvasAction | SetClearAction | SetSaveAction