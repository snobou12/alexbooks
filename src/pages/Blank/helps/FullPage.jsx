import React from 'react'
import TmplElementBox from '../../Constructor/steps/Pages/TmplElementBox'
import "./FullPage.scss"

const FullPage=({size,page,justPreview})=> {
 
  return (
    <div
            className={`pages__paper pages__paper--${
              size.selectedType === 0 ? "quadratic" : "landscape"
            }`}
          >
            {/* Квадратная */}

            {page.selectedSide === "lrside" &&
              size?.selectedType === 0 && (
                <div className="pages__paper_quadratic">
                  <div
                    style={{
                      backgroundColor: `#${page.leftsideHex}`,
                    }}
                    className="pages__paper_quadratic_leftside"
                  >
                    <div className="pages__paper_quadratic_ls_elements">
                      {page.templates[0].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                          justPreview={justPreview}
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
                      backgroundColor: `#${page.rightsideHex}`,
                    }}
                    className="pages__paper_quadratic_rightside"
                  >
                    <div className="pages__paper_quadratic_ls_elements">
                      {page.templates[1].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                          justPreview={justPreview}
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
            {page?.selectedSide === "cside" &&
              size?.selectedType === 0 && (
                <div className="pages__paper_quadratic--full">
                  <div
                    style={{
                      backgroundColor: `#${page.leftsideHex}`,
                    }}
                    className="pages__paper_quadratic--full_leftside"
                  ></div>
                  <div
                    style={{
                      backgroundColor: `#${page.rightsideHex}`,
                    }}
                    className="pages__paper_quadratic--full_rightside"
                  ></div>
                  <div className="pages__paper_quadratic_centerside">
                    <div className="pages__paper_quadratic_ls_elements">
                      {page.templates[2].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                          justPreview={justPreview}
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
            {page?.selectedSide === "lrside" &&
              size?.selectedType === 1 && (
                <div className="pages__paper_landscape">
                  <div
                    style={{
                      backgroundColor: `#${page.leftsideHex}`,
                    }}
                    className="pages__paper_landscape_leftside"
                  >
                    <div className="pages__paper_landscape_ls_elements">
                      {page.templates[0].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                          justPreview={justPreview}
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
                      backgroundColor: `#${page.rightsideHex}`,
                    }}
                    className="pages__paper_landscape_rightside"
                  >
                    <div className="pages__paper_landscape_ls_elements">
                      {page.templates[1].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                          justPreview={justPreview}
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

            {page?.selectedSide === "cside" &&
              size?.selectedType === 1 && (
                <div className="pages__paper_landscape--full">
                  <div
                    style={{
                      backgroundColor: `#${page.leftsideHex}`,
                    }}
                    className="pages__paper_landscape--full_leftside"
                  ></div>
                  <div
                    style={{
                      backgroundColor: `#${page.rightsideHex}`,
                    }}
                    className="pages__paper_landscape--full_rightside"
                  ></div>
                  <div className="pages__paper_landscape_centerside">
                    <div className="pages__paper_landscape_ls_elements">
                      {page.templates[2].template.elements?.map(
                        (tmplElement, idx) => (
                          <TmplElementBox
                          justPreview={justPreview}
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
  )
}

export default FullPage