
import React from "react";
import { useDispatch } from "react-redux";
import { handleAddImageToUploads } from "../../../../redux/reducers/constructor/constructorSlice";
import {getAlbumById} from "../../../../redux/reducers/constructor/actionConstructorCreator";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../../../api";

const PagesUploader = ({
  albumId,
  handleSaveAlbum,
  handleSetIsUploadingImages,
  handleSetUploadPercent,
  handleSwipeToEnd,
}) => {
  const dispatch = useDispatch();
  const updatePercent = (value) => {
    handleSetUploadPercent(value);
  };
  const updateUploadingImages = (bool) => {
    handleSetIsUploadingImages(bool);
  };
  function swipeToEnd() {
    handleSwipeToEnd();
  }
  const handleAlbumSave = () => {
    handleSaveAlbum(true);
  };

  function readFileAsync(imageFile) {
    return new Promise((resolve, reject) => {
      let imageWidth;
      let imageHeight;
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = async (theFile) => {
        const image = new Image();
        image.src = theFile.target.result;
        image.onload = () => {
          imageWidth = image.width;
          imageHeight = image.height;
          resolve({ imageWidth, imageHeight });
        };
      };
      reader.onerror = reject;
    });
  }

  async function uploadImageToServer(id, imageFile) {
    let data = new FormData();
    const options = await readFileAsync(imageFile);
    data.append(
      `uploads/${options.imageWidth}-${options.imageHeight}/${id}`,
      imageFile
    );
    return axios({
      method: "post",
      url: `${API_URL}/?controller=Album&method=image&album=${albumId}`,
      data: data,
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        updatePercent(percent);
      },
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(async () => {
        const imageBlob = URL.createObjectURL(imageFile);

        let newImg = {
          id,
          blob: imageBlob,
          imageWidth: options.imageWidth,
          imageHeight: options.imageHeight,
        };
        updatePercent(0);
        dispatch(handleAddImageToUploads({ newImg }));
        swipeToEnd();
      })
      .catch((e) => {
        return e;
      });
  }

  const handleImageUpload = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const files = e.target.files;
      const neededFiles = [];
      for (const file of files) {
        if (file.size > 20000000) {
          toast.error("Максимальный размер файла 20мб");
        } else {
          neededFiles.push(file);
        }
      }
      if (neededFiles.length > 0) {
        updateUploadingImages(true);
        for (const file of neededFiles) {
          try {
            await uploadImageToServer(uuidv4(), file);
          } catch (e) {
            toast.error("Что-то пошло не так");
          }
        }
        updateUploadingImages(false);
        updatePercent(0);
        dispatch(getAlbumById([albumId,true]));
      }
    }
  };

  return (
    <div className="pages__uploader">
      <label onChange={(e) => handleImageUpload(e)} htmlFor="pages_upload">
        <input
          multiple="multiple"
          name=""
          type="file"
          accept="image/*"
          id="pages_upload"
          hidden
        />
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.6 13.6062V19.2062H1.4V13.6062H0V19.2062C0 19.9804 0.6272 20.6062 1.4 20.6062H19.6C20.3742 20.6062 21 19.9804 21 19.2062V13.6062H19.6Z"></path>
          <path d="M14.3838 8.77439C14.2869 8.55903 14.0739 8.42187 13.8393 8.42187H11.5955V0.601563C11.5955 0.2695 11.379 0 11.0487 0H9.80947C9.4792 0 9.27719 0.2695 9.27719 0.601563V8.42187H7.16088C6.92635 8.42187 6.71335 8.56023 6.61642 8.77439C6.5183 8.98975 6.55659 9.2412 6.71095 9.41927L10.0239 14.2318C10.1376 14.3629 10.3015 14.4375 10.4738 14.4375C10.6461 14.4375 10.8101 14.3617 10.9237 14.2318L14.2893 9.41927C14.4448 9.24241 14.4807 8.98975 14.3838 8.77439Z"></path>
        </svg>
      </label>
      <div className="pages__arrows ">
        <div className="pages__arrows_prev pages__arrow">
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.646446 4.35355C0.451184 4.15829 0.451184 3.84171 0.646446 3.64645L3.82843 0.464465C4.02369 0.269203 4.34027 0.269203 4.53553 0.464466C4.7308 0.659728 4.7308 0.97631 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM11 4.5L1 4.5L1 3.5L11 3.5L11 4.5Z"></path>
          </svg>
        </div>
        <div className="pages__arrows_next pages__arrow">
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.3536 3.64645C10.5488 3.84171 10.5488 4.15829 10.3536 4.35355L7.17157 7.53553C6.97631 7.7308 6.65973 7.7308 6.46447 7.53553C6.2692 7.34027 6.2692 7.02369 6.46447 6.82843L9.29289 4L6.46447 1.17157C6.2692 0.976311 6.2692 0.659728 6.46447 0.464466C6.65973 0.269204 6.97631 0.269204 7.17157 0.464466L10.3536 3.64645ZM0 3.5L10 3.5L10 4.5L0 4.5L0 3.5Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PagesUploader;
