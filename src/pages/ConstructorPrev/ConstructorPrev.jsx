
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAlbumById,
  getAlbumIDS,
  newAlbum,
} from "../../redux/reducers/constructor/actionConstructorCreator";
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
    const response = await dispatch(newAlbum()).unwrap();
    navigate(`/constructor/album/${response.album}`);
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
                  onClick={() => navigate(`/constructor/album/${album.id}`)}
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
              href="http://alexbooks.bannikon.fvds.ru"
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
