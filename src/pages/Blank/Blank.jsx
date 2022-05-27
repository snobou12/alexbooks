
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlankInfo } from "../../redux/reducers/blank/actionBlankCreator";
import {
	handleChangeAlbumABlankId,
	handleChangeSelectedPage,
} from "../../redux/reducers/blank/blankSlice";
import { BASE_URL } from "../../static/variables";
import { PagesPreview } from "../Constructor/steps";
import FullPage from "./helps/FullPage";
import "./Blank.scss";
const Blank = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { size } = useSelector(state => state.constructorSlice);

	const { deliveryInfo, targetAlbum, isLoading, blankId, albumId } =
		useSelector(state => state.blankSlice);

	React.useEffect(() => {
		dispatch(
			handleChangeAlbumABlankId({
				blankId: params.blankId,
				albumId: params.albumId,
			})
		);
	}, []);
	React.useEffect(() => {
		if (blankId && albumId) {
			dispatch(getBlankInfo(blankId));
		}
	}, [blankId, albumId]);
	function getPersonalisation(coverType) {
		if (coverType === 0) {
			switch (targetAlbum.data.coverData.ecoLeather.ecoLeatherSelectedDecor) {
				case 0:
					return "Тиснение";
				case 1:
					return "Фотовставка";
				case 2:
					return "Металлическая пластина";
				case 3:
					return "Без всего";

				default:
					break;
			}
		} else {
			switch (targetAlbum.data.coverData.textile.textileSelectedDecor) {
				case 0:
					return "Тиснение";
				case 1:
					return "Фотовставка";
				case 2:
					return "Металлическая пластина";
				case 3:
					return "Без всего";

				default:
					break;
			}
		}
	}
	const handleChangePage = pageId => {
		dispatch(handleChangeSelectedPage(pageId));
	};
	
	return (
		<>
			{Object.keys(targetAlbum).length !== 0 ? (
				<div className="blank">
					<div className="blank__meta_information_preview">
						<div className="blank__meta_information">
							<div className="blank__meta_basket_id blank__meta_info">
								<span>№ заказа</span>
								<span>{params.blankId}</span>
							</div>
							<div className="blank__meta_date blank__meta_info">
								<span>Дата заказа</span>
								<span>{deliveryInfo.date}</span>
							</div>
							<div className="blank__meta_name blank__meta_info">
								<span>Имя</span>
								<span>{deliveryInfo.name}</span>
							</div>
							<div className="blank__meta_phone blank__meta_info">
								<span>Телефон</span>
								<span>{deliveryInfo.phone}</span>
							</div>

							<div className="blank__meta_email blank__meta_info">
								<span>Электронная почта</span>
								<span>{deliveryInfo.email}</span>
							</div>
							<div className="blank__meta_delivery_type blank__meta_info">
								<span>Тип доставки</span>
								<span>{deliveryInfo.deliveryType}</span>
							</div>
							<div className="blank__meta_city blank__meta_info">
								<span>Город</span>
								<span>{deliveryInfo.city}</span>
							</div>
							<div className="blank__meta_delivery_street blank__meta_info">
								<span>Улица</span>
								<span>{deliveryInfo.street}</span>
							</div>
							<div className="blank__meta_delivery_number_house blank__meta_info">
								<span>Дом</span>
								<span>{deliveryInfo.houseNumber}</span>
							</div>
							<div className="blank__meta_delivery_number_flat blank__meta_info">
								<span>Квартира</span>
								<span>{deliveryInfo.flat}</span>
							</div>
							<div className="blank__meta_delivery_zipcode blank__meta_info">
								<span>Индекс</span>
								<span>{deliveryInfo.zipcode}</span>
							</div>
							<div className="blank__meta_delivery_cover_size blank__meta_info">
								<span>Формат книги</span>
								<span>
									{
										size.types[targetAlbum.data.mainData.selectedType].sizes[
											size.types[targetAlbum.data.mainData.selectedType]
												.selectedSize
										].size
									}
								</span>
							</div>
							<div className="blank__meta_delivery_count_of_pages blank__meta_info">
								<span>Количество разворотов</span>
								<span>{targetAlbum.data.pagesData.pages.length}</span>
							</div>

							<div className="blank__meta_delivery_cover_type blank__meta_info">
								<span>Обложка</span>
								<span>
									{targetAlbum.data.coverData.coverSelectedType === 0
										? "Эко-кожа"
										: targetAlbum.data.coverData.coverSelectedType === 1
										? "Ткань"
										: "Фотообложка"}
								</span>
							</div>
							{(targetAlbum.data.coverData.coverSelectedType === 0 ||
								targetAlbum.data.coverData.coverSelectedType === 1) && (
								<div className="blank__meta_delivery_cover_personalisation blank__meta_info">
									<span>Персонализация</span>
									<span>
										{getPersonalisation(
											targetAlbum.data.coverData.coverSelectedType
										)}
									</span>
								</div>
							)}
							<div className="next__step_btn blank__meta_link" onClick={()=>window.open(BASE_URL + `/designer/Album/zip/${targetAlbum.data.mainData.albumId}`,"_blank")}>Ссылка на скачивание альбома</div>
						</div>
						<div className="blank__meta_preview">
							<img
								src={`${BASE_URL}${targetAlbum.images?.cover_preview}`}
								alt="blank_preview"
							/>
						</div>
						
					</div>
					<div className="blank__pages">
						<PagesPreview
							handleChangePage={handleChangePage}
							size={{selectedType:targetAlbum.data.mainData.selectedType}}
							pages={targetAlbum.data.pagesData.pages}
							justPreview
							selectedPage={targetAlbum.data.pagesData.selectedPage}
						/>
					</div>
					<div className="blank__all_pages">
                       {targetAlbum.data.pagesData.pages && targetAlbum.data.pagesData.pages.map((page,idx)=>
					<div style={{width:"100%"}} className="blank__all_pages_page" key={idx} >
						<span>Разворот. {idx + 1}</span>
						<FullPage justPreview page={page} size={{selectedType:targetAlbum.data.mainData.selectedType}}   /> 
						 </div> 
					   )}
					   
					</div>
				</div>
			) : (
				<div className="blank__empty_msg">
					"Заказ или альбом заказа не найден"
				</div>
			)}
		</>
	);
};

export default Blank;
