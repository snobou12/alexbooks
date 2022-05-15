/** @format */

import axios from "axios";
import React from "react";
import NumberFormat from "react-number-format";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
	handleIncrementNavigation,
	handleChangeDataPhone,
	handleChangeDataOtherOptions,
	handleChangeDeliveryService,
	handleChangeDeliveryPlace,
	handleChangeDeliveryAddress,
	handleDecrementNavigation,
} from "../../redux/reducers/checkout/checkoutSlice";
import { BASE_URL } from "../../static/values";

import "./Checkout.scss";

const Checkout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { checkout } = useSelector(state => state.checkoutSlice);
	const { size } = useSelector(state => state.constructorSlice);
	const { basketAlbums } = useSelector(state => state.basketSlice);
	const [successMsg, setSuccessMsg] = React.useState("");
	const handleSetDataPhone = phoneValues => {
		dispatch(handleChangeDataPhone(phoneValues));
	};

	const handleChangeDataOptions = (e, optionTitle) => {
		dispatch(
			handleChangeDataOtherOptions({
				value: e.target.value,
				target: optionTitle,
			})
		);
	};
	const handleIncrementNavs = () => {
		dispatch(handleIncrementNavigation());
	};
	const handleDecrementNavs = () => {
		dispatch(handleDecrementNavigation());
	};

	//Изменить службу доставки
	const handleChangeDelService = serviceId => {
		dispatch(handleChangeDeliveryService(serviceId));
	};
	//Изменить куда доставить
	const handleChangeDelDp = dpId => {
		dispatch(handleChangeDeliveryPlace(dpId));
	};
	const handleChangeDelAddress = (e, optionTitle) => {
		dispatch(
			handleChangeDeliveryAddress({
				value: e.target.value,
				target: optionTitle,
			})
		);
	};
	function getCheckoutContent(selectedNav) {
		switch (selectedNav) {
			//контактные данные
			case 0:
				return (
					<div className="checkout__content_wrapper">
						{checkout.content[0].options.map((option, idx) => (
							<div
								key={`${option.id}:${idx}`}
								className="checkout__content_item"
							>
								<span>{option.transl}</span>
								{option.title !== "phone" ? (
									<input
										onChange={e => handleChangeDataOptions(e, option.title)}
										type="text"
										placeholder={option.ph}
										value={option.value || ""}
									/>
								) : (
									<NumberFormat
										className="field"
										format="+# (###) ###-##-##"
										mask="_"
										placeholder="+7 (999) 333-22-11"
										value={checkout.content[0].options[1].value.value}
										onValueChange={({ formattedValue, value }) =>
											handleSetDataPhone({ formattedValue, value })
										}
									/>
								)}
							</div>
						))}
					</div>
				);
			//способ доставки
			case 1:
				return (
					<div className="checkout__content_wrapper checkout__content_wrapper--delivery">
						<div className="checkout__content_services">
							<div className="checkout__content_title">
								{checkout.content[1].options[0].transl}
							</div>
							<div className="checkout__content_services_content">
								{checkout.content[1].options[0].variables.map(
									(service, idx) => (
										<div
											key={`${service.id}:${idx}`}
											className={`checkout__content_service ${
												checkout.content[1].options[0].selectedVariable ===
													service.id && "checkout__content_service--active"
											}`}
											onClick={() => handleChangeDelService(service.id)}
										>
											<div className={`custom__checkbox`}></div>
											{idx !== 2 ? (
												<img
													src={require(`../../assets/checkout_services/${service.title}_image.png`)}
													alt="service_img"
												/>
											) : (
												<span>{service.transl}</span>
											)}
										</div>
									)
								)}
							</div>
						</div>
						{(checkout.content[1].options[0].selectedVariable === 0 ||
							checkout.content[1].options[0].selectedVariable === 1) && (
							<div className="checkout__content_deliverplace">
								<div className="checkout__content_title">
									{checkout.content[1].options[1].transl}
								</div>
								<div className="checkout__content_deilverplace_content">
									{checkout.content[1].options[1].variables.map((dp, idx) => (
										<div
											key={`${dp.id}:${idx}`}
											className={`checkout__content_dp ${
												checkout.content[1].options[1].selectedVariable ===
													dp.id && "checkout__content_dp--active"
											}`}
											onClick={() => handleChangeDelDp(dp.id)}
										>
											<div className={`custom__checkbox`}></div>
											<span>{dp.transl}</span>
										</div>
									))}
								</div>
							</div>
						)}
						{(checkout.content[1].options[0].selectedVariable === 0 ||
							checkout.content[1].options[0].selectedVariable === 1) && (
							<div className="checkout__content_address">
								<div className="checkout__content_title">
									{checkout.content[1].options[2].transl}
								</div>
								<div className="checkout__content_address_content">
									{checkout.content[1].options[2].data.map((option, idx) => (
										<div
											key={`${option.id}:${idx}`}
											className="checkout__content_address_item"
										>
											<span>{option.transl}</span>
											<input
												onChange={e => handleChangeDelAddress(e, option.title)}
												type={option.type}
												placeholder={option.ph}
												value={option.value || ""}
											/>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				);
			//Мета данные все
			case 2:
				return (
					<div className="checkout__content_wrapper checkout__content_wrapper--result">
						<div className="checkout__content_wrapper_items">
							<div className="checkout__content_wrapper_item">
								<div className="checkout__content_title">
									Информация о заказе
								</div>
								<div
									className={`checkout__content_pricelist ${
										basketAlbums &&
										basketAlbums.length <= 2 &&
										"checkout__content_pricelist--noscroll"
									}`}
								>
									{basketAlbums &&
										basketAlbums.map((album, idx) => (
											<div
												key={`${album.data.mainData.albumId}:${idx}`}
												className="checkout__album"
											>
												<div className="checkout__album_data">
													<div className="checkout__album_data_name_size">
														<span>{album.data.mainData.albumName}</span>
														<span>
															{
																size.types[album.data.mainData.selectedType]
																	.sizes[
																	size.types[album.data.mainData.selectedType]
																		.selectedSize
																].size
															}
														</span>
													</div>
													<div className="checkout__album_data_preview">
														<img
															src={String(
																BASE_URL + album.images.cover_preview
															)}
															alt="preview_img"
														/>
													</div>
													<ul className="checkout__album_data_options">
														<li>
															{album.data.coverData.coverSelectedType === 0
																? "Эко-кожа"
																: album.data.coverData.coverSelectedType === 1
																? "Ткань"
																: "Фотообложка"}
														</li>
														<li>
															{album.data.pagesData.pages.length} разворотов
														</li>
													</ul>
												</div>
												<div className="checkout__album_price">
													{album.data.mainData.price}р *{" "}
													{album.data.mainData.countOfAlbums}
												</div>
											</div>
										))}
								</div>
							</div>
							<div className="checkout__content_wrapper_item">
								<div className="checkout__content_title">Контактные данные</div>
								<div className="checkout_content_metadata">
									<div className="checkout__metadata_name">
										{checkout.content[0].options[0].value}
									</div>
									<div className="checkout__metadata_phone">
										{checkout.content[0].options[1].value.formattedValue}
									</div>
									<div className="checkout__metadata_mail">
										{checkout.content[0].options[2].value}
									</div>
									<div className="checkout__metadata_city">
										{checkout.content[0].options[3].value}
									</div>
									<div className="checkout__metadata_deliverytype">
										{
											checkout.content[1].options[0].variables[
												checkout.content[1].options[0].selectedVariable
											].transl
										}
									</div>
									{(checkout.content[1].options[0].selectedVariable === 0 ||
										checkout.content[1].options[0].selectedVariable === 1) && (
										<div className="checkout__metadata_address">
											<div className="metadata__place">
												{
													checkout.content[1].options[1].variables[
														checkout.content[1].options[1].selectedVariable
													].transl
												}
											</div>
											<div className="metadata__address">
												<div className="metadata__address_zipcode">
													Индекс: {checkout.content[1].options[2].data[0].value}
												</div>
												<div className="metadata__address_street">
													Улица: {checkout.content[1].options[2].data[1].value}
												</div>
												<div className="metadata__address_houseNumber">
													Дом: {checkout.content[1].options[2].data[2].value}
												</div>
												<div className="metadata__address_flat">
													Квартира:{" "}
													{checkout.content[1].options[2].data[3].value}
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						<button onClick={handleSubmit} className="next__step_btn">
							Перейти к оплате ({getFullPrice()} руб)
						</button>
					</div>
				);
			default:
				break;
		}
	}
	//Проверка введенности всех value для data
	const [dataValueChecker, setDataValueChecker] = React.useState(false);
	React.useEffect(() => {
		if (
			!checkout.content[0].options[0].value ||
			checkout.content[0].options[1].value.value.length != 11 ||
			!checkout.content[0].options[2].value ||
			!checkout.content[0].options[3].value
		) {
			setDataValueChecker(false);
		} else {
			setDataValueChecker(true);
		}
	}, [
		checkout.content[0].options[0].value,
		checkout.content[0].options[1].value,
		checkout.content[0].options[2].value,
		checkout.content[0].options[3].value,
	]);
	//Проверка введенности нужных value для delivery
	const [deliveryValueChecker, setDeliveryValueChecker] = React.useState(false);
	React.useEffect(() => {
		if (checkout.content[1].options[0].selectedVariable !== 2) {
			if (
				!checkout.content[1].options[2].data[0].value ||
				!checkout.content[1].options[2].data[1].value ||
				!checkout.content[1].options[2].data[2].value ||
				!checkout.content[1].options[2].data[3].value
			) {
				setDeliveryValueChecker(false);
			} else {
				setDeliveryValueChecker(true);
			}
		} else {
			setDeliveryValueChecker(true);
		}
	}, [
		checkout.content[1].options[2].data[0].value,
		checkout.content[1].options[2].data[1].value,
		checkout.content[1].options[2].data[2].value,
		checkout.content[1].options[2].data[3].value,
		checkout.content[1].options[0].selectedVariable,
	]);
	React.useEffect(() => {
		if (basketAlbums.length === 0) {
			navigate("/basket");
		}
	}, [basketAlbums.length]);

	function getFullPrice() {
		let summ = 0;
		basketAlbums.forEach(album => {
			let albumSumm =
				album.data.mainData.price * album.data.mainData.countOfAlbums;
			summ += albumSumm;
		});
		return summ;
	}
	function padTo2Digits(num) {
		return num.toString().padStart(2, "0");
	}

	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join(".");
	}

	const handleSubmit = () => {
		let formData = new FormData();
		let deliveryInfo = {
			name: checkout.content[0].options[0].value,
			phone: checkout.content[0].options[1].value.formattedValue,
			email: checkout.content[0].options[2].value,
			city: checkout.content[0].options[3].value,
			deliveryType:
				checkout.content[1].options[0].variables[
					checkout.content[1].options[0].selectedVariable
				].transl,
			street: checkout.content[1].options[2].data[1].value,
			houseNumber: checkout.content[1].options[2].data[2].value,
			flat: checkout.content[1].options[2].data[3].value,
			zipcode: checkout.content[1].options[2].data[0].value,
			date: formatDate(new Date()),
		};
		let albumsData = [...basketAlbums];
		let fullData = {
			deliveryInfo,
			albumsData,
		};
		let jsonData = JSON.stringify(fullData);
		formData.append("request", jsonData);
		axios({
			method: "post",
			url: `${BASE_URL}/designer/?controller=Shop&method=save`,
			data: formData,
			headers: { "Content-Type": "application/json" },
		}).then(res => {
			if (res.status === 200) {
				// axios({
				//   method: "post",
				//   url: `${BASE_URL}/designer/?controller=Shop&method=new`,
				//   headers: { "Content-Type": "application/json" },
				// }); // для бланк тестов пока что
				toast.success(
					`Спасибо. Ваш заказ успешно оформлен! Данные об оплате и составе заказа отправлены Вам на электронную почту. Если вы не получили письмо, проверьте папку "Спам" Мы свяжемся с Вами в ближайшее время для уточнения деталей заказа.`
				);
				navigate("/constructor");
			}
		});
	};
	return (
		<div className="checkout">
			<div className="checkout__uper">
				<div onClick={() => navigate(-1)} className="checkout__back">
					<svg
						width="11"
						height="8"
						viewBox="0 0 11 8"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM11 3.5H1V4.5H11V3.5Z"></path>
					</svg>
				</div>
				<div className="checkout__title">Оформление заказа</div>
			</div>
			<div className="checkout__wrapper">
				<div className="checkout__navigation">
					{checkout.navs.map((nav, idx) => (
						<div
							key={`${nav.id}:${idx}`}
							className={`checkout__navigation_item ${
								checkout.selectedNav === nav.id &&
								"checkout__navigation_item--active"
							}`}
						>
							{nav.transl}
						</div>
					))}
				</div>
				<div className="checkout__content">
					{getCheckoutContent(checkout.selectedNav)}
					<div className="checkout__step_btns">
						<button
							onClick={handleDecrementNavs}
							className={`next__step_btn ${
								checkout.selectedNav == 0 && "next__step_btn--disabled"
							}`}
							disabled={checkout.selectedNav == 0}
						>
							Назад
						</button>
						{checkout.selectedNav === 0 && (
							<button
								onClick={handleIncrementNavs}
								className={`next__step_btn ${
									!dataValueChecker && "next__step_btn--disabled"
								}`}
								disabled={!dataValueChecker}
							>
								Далее
							</button>
						)}
						{checkout.selectedNav === 1 && (
							<button
								onClick={handleIncrementNavs}
								className={`next__step_btn ${
									!deliveryValueChecker && "next__step_btn--disabled"
								}`}
								disabled={!deliveryValueChecker}
							>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
