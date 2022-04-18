/** @format */

import React from "react";
import { handleChangePagesType,handleSetTemplateToPage } from "../../../../redux/reducers/constructor/constructorSlice";
import { useDispatch } from "react-redux";
import "./Pages.scss";
const Pages = ({ selectedSize, pages }) => {
  const dispatch = useDispatch();
  
  function getTypeSvg(typeId) {
    switch (typeId) {
      case 0:
        return (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.4333 1H1.56667C1.25372 1 1 1.25372 1 1.56667V34.4333C1 34.7463 1.25372 35 1.56667 35H34.4333C34.7463 35 35 34.7463 35 34.4333V1.56667C35 1.25372 34.7463 1 34.4333 1ZM16.8667 33.8667H2.13333V21.4H16.8667V33.8667ZM16.8667 20.2667H2.13333V2.13333H16.8667V20.2667ZM33.8667 33.8667H18V13.4667H33.8667V33.8667ZM33.8667 12.3333H18V2.13333H33.8667V12.3333Z"></path>
          </svg>
        );
      case 1:
        return (
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.8301 12.7506C23.7462 12.7506 22.0508 14.446 22.0508 16.5299C22.0508 18.6138 23.7462 20.3092 25.8301 20.3092C27.914 20.3092 29.6094 18.6138 29.6094 16.5299C29.6094 14.446 27.914 12.7506 25.8301 12.7506ZM25.8301 17.7897C25.1354 17.7897 24.5703 17.2246 24.5703 16.5299C24.5703 15.8353 25.1354 15.2702 25.8301 15.2702C26.5247 15.2702 27.0898 15.8353 27.0898 16.5299C27.0898 17.2246 26.5247 17.7897 25.8301 17.7897Z"></path>
            <path d="M15.752 19.0495C17.8359 19.0495 19.5312 17.3541 19.5312 15.2702C19.5312 13.1863 17.8359 11.4909 15.752 11.4909C13.668 11.4909 11.9727 13.1863 11.9727 15.2702C11.9727 17.3541 13.668 19.0495 15.752 19.0495ZM15.752 14.0104C16.4466 14.0104 17.0117 14.5755 17.0117 15.2702C17.0117 15.9648 16.4466 16.5299 15.752 16.5299C15.0573 16.5299 14.4922 15.9648 14.4922 15.2702C14.4922 14.5755 15.0573 14.0104 15.752 14.0104Z"></path>
            <path d="M14.4922 25.3483C14.4922 23.2644 12.7968 21.569 10.7129 21.569C8.62899 21.569 6.93359 23.2644 6.93359 25.3483C6.93359 27.4322 8.62899 29.1276 10.7129 29.1276C12.7968 29.1276 14.4922 27.4322 14.4922 25.3483ZM10.7129 26.6081C10.0183 26.6081 9.45312 26.0429 9.45312 25.3483C9.45312 24.6537 10.0183 24.0885 10.7129 24.0885C11.4075 24.0885 11.9727 24.6537 11.9727 25.3483C11.9727 26.0429 11.4075 26.6081 10.7129 26.6081Z"></path>
            <path d="M17.0117 30.3874C14.9278 30.3874 13.2324 32.0828 13.2324 34.1667C13.2324 36.2506 14.9278 37.946 17.0117 37.946C19.0956 37.946 20.791 36.2506 20.791 34.1667C20.791 32.0828 19.0956 30.3874 17.0117 30.3874ZM17.0117 35.4264C16.3171 35.4264 15.752 34.8613 15.752 34.1667C15.752 33.472 16.3171 32.9069 17.0117 32.9069C17.7064 32.9069 18.2715 33.472 18.2715 34.1667C18.2715 34.8613 17.7064 35.4264 17.0117 35.4264Z"></path>
            <path d="M41.1079 10.0781C41.1079 9.03537 40.2048 6.82785 37.6568 1.64198C37.2369 0.787605 37.0189 0 36.0688 0C35.1189 0 34.9006 0.787689 34.4813 1.64122C32.8459 4.96969 31.8888 7.07006 31.4124 8.4243C29.2973 6.98758 26.9188 5.99892 24.4311 5.53323C11.2144 3.0593 -0.255329 14.4251 2.23498 27.7294C3.5988 35.0152 9.38305 40.9648 16.6284 42.5341C18.2862 42.8933 19.7042 43 20.9181 42.9999C25.1348 42.9997 26.8791 41.2168 27.584 39.9245C28.7047 37.87 28.2772 35.138 26.5674 33.4281C25.5831 32.4446 25.5823 30.8505 26.5677 29.8659C27.5527 28.8809 29.1452 28.8807 30.1303 29.8659C30.8069 30.5424 31.6134 31.018 32.5017 31.273C32.9932 40.4831 34.2231 41.8541 34.6408 42.3195C35.1455 42.8819 35.6959 43 36.0688 43C37.4857 43 38.0359 41.3707 38.2431 40.7574C39.8913 35.8771 40.2577 22.5506 39.3867 13.8659C40.4406 12.9417 41.1079 11.5867 41.1079 10.0781ZM36.0688 4.13002C36.4725 4.9623 38.5031 9.15656 38.5884 10.0897C38.5821 11.4736 37.4542 12.5977 36.0688 12.5977C34.6834 12.5977 33.5557 11.4736 33.5493 10.0897C33.6351 9.1506 35.6924 4.90586 36.0688 4.13002ZM24.7865 28.084C22.8168 30.052 22.8158 33.2414 24.7861 35.2101C25.5811 36.0051 26.0177 37.5346 25.3721 38.7181C24.97 39.4553 24.2096 39.9768 23.1118 40.2682C21.6085 40.6674 19.6065 40.6013 17.1618 40.0718C10.8945 38.7143 5.89115 33.5681 4.71151 27.2659C2.5558 15.7495 12.4112 5.84657 23.9675 8.00976C26.6043 8.50333 29.1012 9.68172 31.2132 11.4222C31.4793 12.3822 32.0226 13.2274 32.7516 13.8666C32.3171 18.2967 32.2491 24 32.3852 28.4729C32.2256 28.3666 32.0664 28.239 31.9117 28.0844C29.9428 26.1153 26.7563 26.1141 24.7865 28.084ZM36.0247 39.3825C34.8216 34.8992 34.7623 24.8954 34.8972 20.2548C35.2851 20.3 35.6761 20.3241 36.0688 20.3241C36.4706 20.3241 36.8708 20.2989 37.2676 20.2516C37.4337 25.4345 37.2608 34.8412 36.0247 39.3825ZM37.1572 17.7251C36.4429 17.8278 35.7122 17.8288 34.9977 17.7278C35.0462 16.7808 35.1056 15.8781 35.1757 15.0364C35.4658 15.0885 35.764 15.1173 36.0689 15.1173C36.375 15.1173 36.6744 15.0883 36.9655 15.0358C37.0408 15.8966 37.1049 16.7951 37.1572 17.7251Z"></path>
          </svg>
        );
      default:
        break;
    }
  }

  const handleSelectTemplate=(sideToChange,tmplId,selectedSide,pageType)=>{
    dispatch(handleSetTemplateToPage({sideToChange,tmplId,selectedSide,pageType}))
  }

  function getTypeContent(typeId) {
    switch (typeId) {
      //Шаблоны
      case 0:
        switch (selectedSize) {
          //Квадратная
          case 0:
            return (
              <div className="pages__type_content">
                <div className="pages__type_templates_side pages__type_templates_leftside">
                  <div className="pages__type_title">Левая страница</div>
                  <div className="pages__type_description">
                    Расположение фото:
                  </div>
                  <div className="pages__type_templates">
                    {pages.templates[selectedSize].templates.leftside.map(
                      (tmpl, idx) => (
                        <div
                          onClick={()=>handleSelectTemplate("leftside",tmpl.id,"lrside",selectedSize)}
                          key={`${tmpl.id}:${idx}`}
                          className="pages__type_tmpl"
                        >
                          {tmpl.elements.map((tmplElement, idx) => (
                            <div
                              style={{
                                width: tmplElement.position.w,
                                height: tmplElement.position.h,
                                left: tmplElement.position.l,
                                top: tmplElement.position.t,
                              }}
                              key={`${tmplElement.id}:${idx}`}
                              className="pages__type_element"
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="pages__type_templates_side pages__type_templates_rightside">
                  <div className="pages__type_title">Правая страница</div>
                  <div className="pages__type_description">
                    Расположение фото:
                  </div>
                  <div className="pages__type_templates">
                    {pages.templates[selectedSize].templates.rightside.map(
                      (tmpl, idx) => (
                        <div
                        onClick={()=>handleSelectTemplate("rightside",tmpl.id,"lrside",selectedSize)}
                          key={`${tmpl.id}:${idx}`}
                          className="pages__type_tmpl"
                        >
                          {tmpl.elements.map((tmplElement, idx) => (
                            <div
                              style={{
                                width: tmplElement.position.w,
                                height: tmplElement.position.h,
                                left: tmplElement.position.l,
                                top: tmplElement.position.t,
                              }}
                              key={`${tmplElement.id}:${idx}`}
                              className="pages__type_element"
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="pages__type_templates_centerside">
                  <div className="pages__type_title">Разворот</div>
                  <div className="pages__type_description">
                    Расположение фото:
                  </div>
                  <div className="pages__type_templates">
                    {pages.templates[selectedSize].templates.centerside.map(
                      (tmpl, idx) => (
                        <div
                        onClick={()=>handleSelectTemplate("centerside",tmpl.id,"cside",selectedSize)}
                          key={`${tmpl.id}:${idx}`}
                          className="pages__type_centerside_tmpl"
                        >
                          {tmpl.elements.map((tmplElement, idx) => (
                            <div
                              style={{
                                width: tmplElement.position.w,
                                height: tmplElement.position.h,
                                left: tmplElement.position.l,
                                top: tmplElement.position.t,
                              }}
                              key={`${tmplElement.id}:${idx}`}
                              className="pages__type_element"
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            );

          //альбомная
          case 1:
            return (
              <div className="pages__type_content">
                <div className="pages__type_templates_side pages__type_templates_leftside">
                  <div className="pages__type_title">Левая страница</div>
                  <div className="pages__type_description">
                    Расположение фото:
                  </div>
                  <div className="pages__type_templates ">
                    {pages.templates[selectedSize].templates.leftside.map(
                      (tmpl, idx) => (
                        <div
                          key={`${tmpl.id}:${idx}`}
                          className="pages__type_centerside_tmpl_landscape"
                        >
                          {tmpl.elements.map((tmplElement, idx) => (
                            <div
                              style={{
                                width: tmplElement.position.w,
                                height: tmplElement.position.h,
                                left: tmplElement.position.l,
                                top: tmplElement.position.t,
                              }}
                              key={`${tmplElement.id}:${idx}`}
                              className="pages__type_element"
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="pages__type_templates_side pages__type_templates_rightside">
                  <div className="pages__type_title">Правая страница</div>
                  <div className="pages__type_description">
                    Расположение фото:
                  </div>
                  <div className="pages__type_templates">
                    {pages.templates[selectedSize].templates.rightside.map(
                      (tmpl, idx) => (
                        <div
                          key={`${tmpl.id}:${idx}`}
                          className="pages__type_centerside_tmpl_landscape"
                        >
                          {tmpl.elements.map((tmplElement, idx) => (
                            <div
                              style={{
                                width: tmplElement.position.w,
                                height: tmplElement.position.h,
                                left: tmplElement.position.l,
                                top: tmplElement.position.t,
                              }}
                              key={`${tmplElement.id}:${idx}`}
                              className="pages__type_element"
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="pages__type_templates_centerside">
                  <div className="pages__type_title">Разворот</div>
                  <div className="pages__type_description">
                    Расположение фото:
                  </div>
                  <div className="pages__type_templates">
                    {pages.templates[selectedSize].templates.centerside.map(
                      (tmpl, idx) => (
                        <div
                          key={`${tmpl.id}:${idx}`}
                          className="pages__type_centerside_tmpl_landscape"
                        >
                          {tmpl.elements.map((tmplElement, idx) => (
                            <div
                              style={{
                                width: tmplElement.position.w,
                                height: tmplElement.position.h,
                                left: tmplElement.position.l,
                                top: tmplElement.position.t,
                              }}
                              key={`${tmplElement.id}:${idx}`}
                              className="pages__type_element"
                            ></div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          default:
            break;
        }

      //Фон
      case 1:

        return <div className={`pages__type_content_color ${selectedSize === 0 && "pages__type_content_color--quadratic"}`}>
            <div className="pages__colors_content">
                <div className="pages__colors_leftside">
                    <div className="pages__colors_title">
                        Левая страница
                    </div>
                    <div className="pages__colors_description">
                        Выберете цвет страницы
                    </div>
                    <div className="pages__colors">
                        {pages.colors.map((color,idx)=>
                        <div style={{backgroundColor:color.hex}} key={`${color.id}:${idx}`} className="pages__colors_item">
                            
                        </div>
                        )}
                    </div>
                </div>
                <div className="pages__colors_righside">
                    <div className="pages__colors_title">
                        Правая страница
                    </div>
                    <div className="pages__colors_description">
                        Выберете цвет страницы
                    </div>
                    <div className="pages__colors">
                        {pages.colors.map((color,idx)=>
                        <div style={{backgroundColor:color.hex}} key={`${color.id}:${idx}`} className="pages__colors_item">
                            
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

      default:
        break;
    }
  }
  const handleChangeType = (typeId) => {
    dispatch(handleChangePagesType(typeId));
  };
  return (
    <div className="cnsr__pages">
      <div className="cnsr__pages_leftside">
        <div className="cnsr__pages_types">
          <div
            onClick={() => handleChangeType(0)}
            className={`pages__types_item ${
              pages.selectedType === 0 && "pages__types_item--active"
            }`}
          >
            <div className="pages__types_img">{getTypeSvg(0)}</div>
            <div className="pages__types_title">
              <span>Шаблоны</span>
            </div>
          </div>

          <div
            onClick={() => handleChangeType(1)}
            className={`pages__types_item ${
              pages.selectedType === 1 && "pages__types_item--active"
            }`}
          >
            <div className="pages__types_img">{getTypeSvg(1)}</div>
            <div className="pages__types_title">
              <span>Фон</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`cnsr__pages_rightside ${
          selectedSize === 1 && pages.selectedType === 0 && "cnsr__pages_rightside--landscape"
        }`}
      >
        {getTypeContent(pages.selectedType)}
      </div>
    </div>
  );
};

export default Pages;
