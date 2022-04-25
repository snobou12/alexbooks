import React from 'react'
import {CoverPreview} from '../'
import PagesPreview from '../Pages/PagesPreview'
import "./FullPreview.scss"
const FullPreview=({selectedType,pages,size})=> {
  return (
    <>
    {selectedType === 0  && <CoverPreview />}
    {selectedType === 1  && <CoverPreview />}
    {selectedType === 2  && <PagesPreview pages={pages} size={size} justPreview={true} />}

    </>
  )
}

export default FullPreview