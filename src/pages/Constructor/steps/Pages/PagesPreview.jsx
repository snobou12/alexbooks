
import React from "react";
import { useDispatch } from "react-redux";
import {
  handleChangeSelectedPage,
  handleAddPageToPages,
  handleDeletePageFromPages,
  handleDeleteImageFromUploads,
} from "../../../../redux/reducers/constructor/constructorSlice";
import DragImage from "./DragImage";
import PagesUploader from "./PagesUploader";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../../static/values";
import TmplElementBox from "./TmplElementBox";
import { Scrollbar, Autoplay, Grid, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import "swiper/css";
import "./PagesPreview.scss";


const PagesPreview = ({
  albumId,
  pages,
  size,
  justPreview,
  selectedPage,
  handleChangePage,
  pagesValid,
}) => {
  const dispatch = useDispatch();
  const swiperRef = React.useRef();
  const [isUploadingImages, setIsUploadingImages] = React.useState(false);
  const [uploadPercent, setUploadPercent] = React.useState(0);
  const handleSetIsUploadingImages = (bool) => {
    setIsUploadingImages(bool);
  };
  const handleSetUploadPercent = (value) => {
    setUploadPercent(value);
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
  const deleteImageFromUploads = (imageId) => {
    // Добавить удаление на сервер
    axios({
      method: "post",
      url: `${BASE_URL}/designer/?controller=Album&method=remove&album=${albumId}&image=${imageId}`,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        dispatch(handleDeleteImageFromUploads(imageId));
      }
      else{
        toast.error("Что-то пошло не так");
      }
    }).catch((e)=>{
      toast.error("Что-то пошло не так")
    })
  };
  function uploadsMap() {
    if (!isUploadingImages) {
      return pages.uploads;
    } else {
      let uploadPreview = {
        blob: require("../../../../assets/pages_preview/upload_preview.jpg"),
        id: null,
        uploadPercent,
      };
      return [...pages.uploads, { ...uploadPreview }];
    }
  }
  const handleSwipeToEnd = () => {
    let lastIndex = swiperRef.current.swiper.imagesLoaded;
    swiperRef.current.swiper.slideTo(lastIndex);
  };
  return (
    <>
      {justPreview ? (
        <div className="pages__preview">
          <div className="pages__selector">
            <Swiper
              modules={[Scrollbar, Autoplay, Grid, Navigation]}
              slidesPerView={"auto"}
              spaceBetween={20}
              grid={{ rows: 1, fill: "row" }}
              autoplay={{ delay: 2000 }}
            >
              {pages.map((page, idx) => (
                <SwiperSlide
                  onClick={() => handleChangePage(page.id)}
                  key={`${page.id}:${idx}`}
                >
                  <div
                    className={`pages__selector_page ${
                      selectedPage === page.id && "pages__selector_page--active"
                    } ${justPreview && "pages__selector_page--justPreview"}`}
                  >
                    <span>{page.id + 1}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className={`pages__paper pages__paper--${
              size.selectedType === 0 ? "quadratic" : "landscape"
            }`}
          >
            {/* Квадратная */}

            {pages[selectedPage]?.selectedSide === "lrside" &&
              size?.selectedType === 0 && (
                <div className="pages__paper_quadratic">
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].leftsideHex}`,
                    }}
                    className="pages__paper_quadratic_leftside"
                  >
                    <div className="pages__paper_quadratic_ls_elements">
                      {pages[selectedPage].templates[0].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"leftside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_quadratic_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].rightsideHex}`,
                    }}
                    className="pages__paper_quadratic_rightside"
                  >
                    <div className="pages__paper_quadratic_ls_elements">
                      {pages[selectedPage].templates[1].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"rightside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_quadratic_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            {pages[selectedPage]?.selectedSide === "cside" &&
              size?.selectedType === 0 && (
                <div className="pages__paper_quadratic--full">
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].leftsideHex}`,
                    }}
                    className="pages__paper_quadratic--full_leftside"
                  ></div>
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].rightsideHex}`,
                    }}
                    className="pages__paper_quadratic--full_rightside"
                  ></div>
                  <div className="pages__paper_quadratic_centerside">
                    <div className="pages__paper_quadratic_ls_elements">
                      {pages[selectedPage].templates[2].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"centerside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_quadratic_cs_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

            {/* Альбомная */}
            {pages[selectedPage]?.selectedSide === "lrside" &&
              size?.selectedType === 1 && (
                <div className="pages__paper_landscape">
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].leftsideHex}`,
                    }}
                    className="pages__paper_landscape_leftside"
                  >
                    <div className="pages__paper_landscape_ls_elements">
                      {pages[selectedPage].templates[0].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"leftside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_landscape_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].rightsideHex}`,
                    }}
                    className="pages__paper_landscape_rightside"
                  >
                    <div className="pages__paper_landscape_ls_elements">
                      {pages[selectedPage].templates[1].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"rightside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_landscape_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

            {pages[selectedPage]?.selectedSide === "cside" &&
              size?.selectedType === 1 && (
                <div className="pages__paper_landscape--full">
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].leftsideHex}`,
                    }}
                    className="pages__paper_landscape--full_leftside"
                  ></div>
                  <div
                    style={{
                      backgroundColor: `#${pages[selectedPage].rightsideHex}`,
                    }}
                    className="pages__paper_landscape--full_rightside"
                  ></div>
                  <div className="pages__paper_landscape_centerside">
                    <div className="pages__paper_landscape_ls_elements">
                      {pages[selectedPage].templates[2].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"centerside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_landscape_cs_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      ) : (
        <div className="pages__preview">
          <div className="pages__selector">
            <Swiper
              modules={[Scrollbar, Autoplay, Grid, Navigation]}
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
                    className={`pages__selector_page ${
                      pages.papers.selectedPage === page.id &&
                      "pages__selector_page--active"
                    } ${
                      pagesValid.length > 0 &&
                      !pagesValid[idx].isValid &&
                      "pages__selector_page--noValid"
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
          <div
            className={`pages__paper pages__paper--${
              size.selectedType === 0 ? "quadratic" : "landscape"
            }`}
          >
            {/* Квадратная */}

            {pages.papers.pages[pages.papers.selectedPage]?.selectedSide ===
              "lrside" &&
              size?.selectedType === 0 && (
                <div className="pages__paper_quadratic">
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .leftsideHex
                      }`,
                    }}
                    className="pages__paper_quadratic_leftside"
                  >
                    <div className="pages__paper_quadratic_ls_elements">
                      {pages.papers.pages[
                        pages.papers.selectedPage
                      ].templates[0].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            // image options после загрузки в uploads понимать какая ширина высота
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"leftside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_quadratic_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .rightsideHex
                      }`,
                    }}
                    className="pages__paper_quadratic_rightside"
                  >
                    <div className="pages__paper_quadratic_ls_elements">
                      {pages.papers.pages[
                        pages.papers.selectedPage
                      ].templates[1].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"rightside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_quadratic_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            {pages.papers.pages[pages.papers.selectedPage]?.selectedSide ===
              "cside" &&
              size?.selectedType === 0 && (
                <div className="pages__paper_quadratic--full">
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .leftsideHex
                      }`,
                    }}
                    className="pages__paper_quadratic--full_leftside"
                  ></div>
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .rightsideHex
                      }`,
                    }}
                    className="pages__paper_quadratic--full_rightside"
                  ></div>
                  <div className="pages__paper_quadratic_centerside">
                    <div className="pages__paper_quadratic_ls_elements">
                      {pages.papers.pages[
                        pages.papers.selectedPage
                      ].templates[2].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"centerside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_quadratic_cs_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

            {/* Альбомная */}
            {pages.papers.pages[pages.papers.selectedPage]?.selectedSide ===
              "lrside" &&
              size?.selectedType === 1 && (
                <div className="pages__paper_landscape">
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .leftsideHex
                      }`,
                    }}
                    className="pages__paper_landscape_leftside"
                  >
                    <div className="pages__paper_landscape_ls_elements">
                      {pages.papers.pages[
                        pages.papers.selectedPage
                      ].templates[0].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"leftside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_landscape_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .rightsideHex
                      }`,
                    }}
                    className="pages__paper_landscape_rightside"
                  >
                    <div className="pages__paper_landscape_ls_elements">
                      {pages.papers.pages[
                        pages.papers.selectedPage
                      ].templates[1].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"rightside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_landscape_ls_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

            {pages.papers.pages[pages.papers.selectedPage]?.selectedSide ===
              "cside" &&
              size?.selectedType === 1 && (
                <div className="pages__paper_landscape--full">
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .leftsideHex
                      }`,
                    }}
                    className="pages__paper_landscape--full_leftside"
                  ></div>
                  <div
                    style={{
                      backgroundColor: `#${
                        pages.papers.pages[pages.papers.selectedPage]
                          .rightsideHex
                      }`,
                    }}
                    className="pages__paper_landscape--full_rightside"
                  ></div>
                  <div className="pages__paper_landscape_centerside">
                    <div className="pages__paper_landscape_ls_elements">
                      {pages.papers.pages[
                        pages.papers.selectedPage
                      ].templates[2].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                            image={tmplElement?.image}
                            key={`${tmplElement.id}:${idx}`}
                            sideToChange={"centerside"}
                            tmplElement={tmplElement}
                            cn="pages__paper_landscape_cs_element"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
          </div>

          <div className={`pages__upload`}>
            <PagesUploader
              handleSwipeToEnd={handleSwipeToEnd}
              handleSetIsUploadingImages={handleSetIsUploadingImages}
              handleSetUploadPercent={handleSetUploadPercent}
              albumId={albumId}
            />
            <Swiper
              ref={swiperRef}
              modules={[Scrollbar, Autoplay, Grid, Navigation]}
              navigation={{
                prevEl: ".pages__arrows_prev",
                nextEl: ".pages__arrows_next",
              }}
              simulateTouch={false}
              slidesPerView={"auto"}
              spaceBetween={20}
              grid={{ rows: 1, fill: "row" }}
              autoplay={{ delay: 2000 }}
            >
              {uploadsMap().map((img, idx) => (
                <SwiperSlide key={`${img.id}:${idx}`}>
                  <DragImage
                    uploadPercent={uploadPercent}
                    baseItem={img.id == null}
                    deleteImageFromUploads={deleteImageFromUploads}
                    isUploadingImages={isUploadingImages}
                    img={img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};
export default PagesPreview;
