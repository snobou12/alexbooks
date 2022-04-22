
import React from "react";
import { useDispatch } from "react-redux";
import {
  handleAddImageToUploads,
  handleDeleteImageFromUploads,
  handleChangeSelectedPage,
  handleAddPageToPages,
  handleDeletePageFromPages,
} from "../../../../redux/reducers/constructor/constructorSlice";
import DragImage from "./DragImage";
import { Scrollbar, Autoplay, Grid, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import "swiper/css";
import "./PagesPreview.scss";

const PagesPreview = ({ pages, size }) => {
  const dispatch = useDispatch();
  const validFileTypes = [
    "jpg",
    "jpeg",
    "JPEG",
    "JPG",
    "png",
    "PNG",
    "pmb",
    "PMB",
  ];
  let [uploadError, setUploadError] = React.useState("");

  const handleImageUpload = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const files = e.target.files;
      Object.keys(files).forEach((i) => {
        if (!validFileTypes.includes(files[i].type.split("/")[1])) {
          setUploadError("Часть файлов не загружены (проверьте расширения)");
          setTimeout(() => {
            setUploadError("");
          }, 5000);
          return;
        }
        const file = files[i];
        const fileLastModified = file.lastModified;
        const fileName = file.name;
        const fileSize = file.size;
        const fileType = file.type;
        const imageBlob = URL.createObjectURL(file);
        dispatch(
          handleAddImageToUploads({
            lastModified: fileLastModified,
            name: fileName,
            size: fileSize,
            type: fileType,
            imageBlob,
          })
        );
      });
    } else {
      console.log("Что-то пошло не так");
    }
  };

  const handleImageDelete = (imageId) => {
    dispatch(handleDeleteImageFromUploads(imageId));
  };
  const handleSelectPage = (pageId) => {
    dispatch(handleChangeSelectedPage(pageId));
  };

  const handleAddPage = (e, selectedPageId) => {
    e.stopPropagation();
    dispatch(handleAddPageToPages(selectedPageId));
  };

  const handleDeletePage = (e, pageId) => {
    e.stopPropagation();

    dispatch(handleDeletePageFromPages(pageId));
  };



  return (
    <div className="pages__preview">
      <div className="pages__selector">
        <Swiper
          modules={[Scrollbar, Autoplay, Grid, Navigation]}
          navigation={{

          }}
          slidesPerView={"auto"}
          spaceBetween={20}
          grid={{ rows: 1, fill: "row" }}
          autoplay={{ delay: 2000 }}
        >
          {pages.papers.pages.map((page, idx) => (
            <SwiperSlide
              onClick={() => handleSelectPage(page.id)}
              key={`${page.id}:${idx}`}
            >
              <div
                className={`pages__selector_page ${pages.papers.selectedPage === page.id &&
                  "pages__selector_page--active"
                  }`}
              >
                <span>{page.id + 1}</span>
                <div
                  onClick={(e) => handleDeletePage(e, page.id)}
                  className="pages__selector_page_delete"
                >
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.802495 5.08652L2.5 3.28951L0.685547 1.57552L1.27885 0.947439L3.09331 2.66143L4.79082 0.864418L5.43635 1.4742L3.73884 3.27121L5.55329 4.9852L4.95999 5.61328L3.14553 3.8993L1.44802 5.69631L0.802495 5.08652Z"></path>
                  </svg>
                </div>
                {pages.papers.selectedPage === page.id && (
                  <div
                    onClick={(e) => handleAddPage(e, page.id)}
                    className="pages__selector_page_add"
                  >
                    +
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pages__paper">
        {/* Квадратная */}

        {pages.papers.pages[pages.papers.selectedPage]?.selectedSide === "lrside" && size?.selectedType === 0 && <div className="pages__paper_quadratic">
          <div style={{backgroundColor:pages.papers.pages[pages.papers.selectedPage].leftsideHex}} className="pages__paper_quadratic_leftside">
            <div className="pages__paper_quadratic_ls_elements">
              {pages.papers.pages[pages.papers.selectedPage].templates[0].template.elements?.map((tmplElement, idx) =>
                <div style={{
                  width: tmplElement.position.w,
                  height: tmplElement.position.h,
                  left: tmplElement.position.l,
                  top: tmplElement.position.t,
                }} key={`${tmplElement.id}:${idx}`} className="pages__paper_quadratic_ls_element">

                </div>
              )}
            </div>
          </div>
          <div style={{backgroundColor:pages.papers.pages[pages.papers.selectedPage].rightsideHex}} className="pages__paper_quadratic_rightside">
            <div  className="pages__paper_quadratic_ls_elements">
              {pages.papers.pages[pages.papers.selectedPage].templates[1].template.elements?.map((tmplElement, idx) =>
                <div style={{
                  width: tmplElement.position.w,
                  height: tmplElement.position.h,
                  left: tmplElement.position.l,
                  top: tmplElement.position.t,
                }} key={`${tmplElement.id}:${idx}`} className="pages__paper_quadratic_ls_element">

                </div>
              )}
            </div>
          </div>
        </div>}
        {pages.papers.pages[pages.papers.selectedPage]?.selectedSide === "cside" && size?.selectedType === 0 && <div className="pages__paper_quadratic--full">
          <div style={{backgroundColor:pages.papers.pages[pages.papers.selectedPage].leftsideHex}} className="pages__paper_quadratic--full_leftside">

          </div>
          <div style={{backgroundColor:pages.papers.pages[pages.papers.selectedPage].rightsideHex}} className="pages__paper_quadratic--full_rightside">

          </div>
          <div className="pages__paper_quadratic_centerside">
            <div className="pages__paper_quadratic_ls_elements">
              {pages.papers.pages[pages.papers.selectedPage].templates[2].template.elements?.map((tmplElement, idx) =>
                <div style={{
                  width: tmplElement.position.w,
                  height: tmplElement.position.h,
                  left: tmplElement.position.l,
                  top: tmplElement.position.t,
                }} key={`${tmplElement.id}:${idx}`} className="pages__paper_quadratic_cs_element">

                </div>
              )}
            </div>
          </div>
        </div>}


        {/* Альбомная */}
        {/* {size.selectedType === 1 && <div className="pages__paper_landscape">
          landcape
        </div>} */}
      </div>

      <div className="pages__upload">
        <div className="pages__uploader">
          <label onChange={(e) => handleImageUpload(e)} htmlFor="pages_upload">
            <input
              multiple="multiple"
              name=""
              type="file"
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

        <div className="pages__uploads">
          <Swiper
            modules={[Scrollbar, Autoplay, Grid, Navigation]}
            navigation={{
              prevEl: ".pages__arrows_prev",
              nextEl: ".pages__arrows_next",
            }}
            slidesPerView={"auto"}
            spaceBetween={20}
            grid={{ rows: 1, fill: "row" }}
            autoplay={{ delay: 2000 }}
          >
            
          </Swiper>
          {pages.uploads.map((img, idx) => (
                <DragImage key={`${img.id}:${idx}`} imageName={img.name} handleImageDelete={handleImageDelete} img={img} />
            ))}
        </div>
      </div>
    </div>
  );
};
// дочинить swiper и сделать dnd
export default PagesPreview;
