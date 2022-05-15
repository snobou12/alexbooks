
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteAlbumById,
  getAlbumIDS,
  newAlbum,
} from "../../redux/reducers/constructor/actionConstructorCreator";
  
  import {handleReloadConstructorConfig} from "../../redux/reducers/constructor/constructorSlice";
import { BASE_URL } from "../../static/values";
import "./ConstructorPrev.scss";
const ConstructorPrev = () => {
  const { albumsId} = useSelector(
    (state) => state.constructorSlice
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAlbumIDS());
  }, []);
  const handleCreateAlbum = async () => {
    try{
      const response = await dispatch(newAlbum()).unwrap();
      dispatch(handleReloadConstructorConfig());
      navigate(`/constructor/album/${response.album}`);

    }
    catch(e){
      toast.error("Что-то пошло не так")
    }
  };
  React.useEffect(() => {
    if (!albumsId.isLoading) {
      if (albumsId.ids.length === 0) {
        handleCreateAlbum();
      }
    }
  }, [albumsId.isLoading]);
  const handleDeleteAlbum = (albumId) => {
    dispatch(deleteAlbumById(albumId));
  };
  const handleNavigateToAlbum =(albumId)=>{
    dispatch(handleReloadConstructorConfig());
    navigate(`/constructor/album/${albumId}`);
  }

  return (
    <>
      {albumsId.ids.length !== 0 && (
        <div className="constructor__prev">
          <div className="cnsr__prev_title">
            Выберите книгу для редактирования.
          </div>
          <div className="cnsr__prev_albums">
            {albumsId.ids.map((album, idx) => (
              <div key={`${album.id}:${idx}`} className="cnsr__prev_albums_item">
                <button
                  onClick={()=>handleNavigateToAlbum(album.id)}
                  className="next__step_btn cnsr__prev_albums_item_title"
                >
                  ID:{album.id} - {album.name}
                </button>
                <button
                  onClick={() => handleDeleteAlbum(album.id)}
                  className="next__step_btn cnsr__prev_albums_item_delete"
                >
                  Удалить
                </button>
                
              </div>
            ))}
          </div>
          <div className="cnsr__prev_features">
            <button onClick={handleCreateAlbum} className="next__step_btn">
              Создать новую книгу
            </button>
            <a
              href={BASE_URL}
              target="_self"
              className="next__step_btn"
            >
              Вернуться на главную
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ConstructorPrev;
