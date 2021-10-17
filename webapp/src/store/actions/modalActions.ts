import { Dispatch } from "../types";

export const showPhotoModal = (dispatch: Dispatch, photo: string) => {
  dispatch({
    type: "MODAL_SHOW_PHOTO",
    data: { photo },
  });
};
