import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'

import { storage } from '../../firebase/config'
import { CanvasAction, Image, SAVE_IMAGE } from '../canvasTypes'

export const saveImage = (data: Image, id: string): ThunkAction<void, RootState, null, CanvasAction> => {
  return async dispatch => {
    const uploadTask = storage.ref();
    const imageRef = uploadTask.child(`${id}/images/${data.name}`);
    await imageRef.putString(data.imageUrl, "data_url").then((snapshot) => {
      console.log("Uploaded a data_url string!");
    });
    dispatch(
      {
        type: SAVE_IMAGE,
        payload: data
      }
    )
  }
}

export const getImageByUserId = (id: string): ThunkAction<void, RootState, null, CanvasAction> => {
  return async dispatch => {
    try {
      const firebaseStorage = storage.ref()
      const listImages = await firebaseStorage.child(`${id}/images`).getDownloadURL();
      listImages.listAll()
        .then((res: any) => {
          res.prefixes.forEach((folderRef: any) => {
            console.log("Folder ref", folderRef)
          });
          res.items.forEach((itemRef: any) => {
            console.log("Item ref ", itemRef);
          });
        }).catch((error: Error) => {
          console.log(error.message)
        });
    } catch (error) {
      console.log(error.message)

    }

  }
}