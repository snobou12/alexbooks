
import React from "react";
import { pathTo } from "../../../../helps/pathes";
import {
	BsFillArrowUpCircleFill,
	BsFillArrowDownCircleFill,
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {
	handleRemoveCoverPhoto,
	handleChangeAxisOptionsCoverPhoto,
} from "../../../../redux/reducers/constructor/constructorSlice";
import "./CoverPreview.scss";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../../../static/variables";
import axios from "axios";
import { toast } from "react-toastify";

const CoverPreview = ({ stageRef, header_content }) => {
	const dispatch = useDispatch();
	//Обложка +
	const [coverColorSrc, setCoverColorSrc] = React.useState(null);
	//Тиснение+
	const [ecoLetteringImg, setEcoLetteringImg] = React.useState(null);
	const [textileLetteringImg, setTextileEcoLetteringImg] = React.useState(null);
	//Фотовставка+
	const [photobidDefaults, setPhotobidDefaults] = React.useState(null);
	const [showPhotobidDefaults, setShowPhotobidDefaults] = React.useState(false);
	const [ecoPhotoBidImg, setEcoPhotoBidImg] = React.useState(null);
	const [textilePhotoBidImg, setTextilePhotoBidImg] = React.useState(null);

	//Металлическая пластина
	const [ecoMetalplateImg, setEcoMetalplateImg] = React.useState(null);
	const [textileMetalplateImg, setTextileMetalplateImg] = React.useState(null);
	const [ecoMetalplate, setEcoMetalplate] = React.useState(null);
	const [textileMetalplate, setTextileMetalplate] = React.useState(null);
	const [ecoMetalplateText, setEcoMetalplateText] = React.useState(null);

	const [textileMetalplateText, setTextileMetalplateText] =
		React.useState(null);

	//Фотообложка+
	const [photoCoverImg, setPhotoCoverImg] = React.useState(null);
	const [photoCoverDefault, setPhotoCoverDefault] = React.useState(false);

	const { cover, size } = useSelector(state => state.constructorSlice);

	//найти цвет по общему typeId и благодаря выбранному цвету(по его id) вытащить из obj title и дать src
	const getCoverColorSrc = coverTypeId => {
		switch (coverTypeId) {
			//Эко кожа
			case 0:
				let ecoColorObj = cover.types[0].features.colors.find(
					color => color.id === cover.types[0].selectedColor
				);
				return pathTo(
					`/images/eco_leather_colors/${ecoColorObj.title}_${ecoColorObj.id}.png`
				);
			//Кожа
			case 1:
				let textileColorObj = cover.types[1].features.colors.find(
					color => color.id === cover.types[1].selectedColor
				);
				return pathTo(
					`/images/textile_colors/${textileColorObj.title}_${textileColorObj.id}.png`
				);

			//Фотообложка
			//Можно сделать как выше, можно брать id вручную
			case 2:
				let colorType = cover.types[2].selectedType;

				let photoCoverColorObj =
					cover.types[2].options[colorType].colors[
						cover.types[2].selectedColor
					];
				switch (colorType) {
					case 0:
						return pathTo(
							`/images/eco_leather_colors/${photoCoverColorObj.title}_${photoCoverColorObj.id}.png`
						);

					case 1:
						return pathTo(
							`/images/textile_colors/${photoCoverColorObj.title}_${photoCoverColorObj.id}.png`
						);
					default:
						break;
				}
			default:
				break;
		}
	};

	//Подгрузить обложку
	React.useEffect(() => {
		let colorSrc = getCoverColorSrc(cover.selectedType);
		setCoverColorSrc(colorSrc);
	}, [
		cover.selectedType,
		cover.types[0].selectedColor,
		cover.types[1].selectedColor,
		cover.types[2].selectedColor,
		cover.types[2].selectedType,
	]);

	//Подрузка картинок тиснения если выбран режим тиснения

	const getLetteringDesignSrcAPosition = coverTypeId => {
		switch (coverTypeId) {
			//Эко кожа
			case 0:
				setTextileEcoLetteringImg(null);
				let ecoLetteringDesignObj =
					cover.types[0].features.decor[0].options[1].designs[
						cover.types[0].features.decor[0].options[1].selectedDesign
					];
				let ecoLetteringDesignColorObj =
					cover.types[0].features.decor[0].options[0].colors[
						cover.types[0].features.decor[0].options[0].selectedColor
					];
				let ecoSrc = pathTo(
					`/images/eco_leather_lettering_designs/${ecoLetteringDesignObj.title}_${ecoLetteringDesignColorObj.title}.png`
				);
				let ecoPosition =
					size.selectedType === 0
						? ecoLetteringDesignObj.position
						: ecoLetteringDesignObj.rectanglePosition;
				return { src: ecoSrc, position: ecoPosition };
			//Ткань
			case 1:
				setEcoLetteringImg(null);
				let textileLetteringDesignObj =
					cover.types[1].features.decor[0].options[1].designs[
						cover.types[1].features.decor[0].options[1].selectedDesign
					];
				let textileLetteringDesignColorObj =
					cover.types[1].features.decor[0].options[0].colors[
						cover.types[1].features.decor[0].options[0].selectedColor
					];
				let textileSrc = pathTo(
					`/images/eco_leather_lettering_designs/${textileLetteringDesignObj.title}_${textileLetteringDesignColorObj.title}.png`
				);
				let textilePosition =
					size.selectedType === 0
						? textileLetteringDesignObj.position
						: textileLetteringDesignObj.rectanglePosition;

				return { src: textileSrc, position: textilePosition };
			default:
				break;
		}
	};

	React.useEffect(() => {
		if (
			(cover.types[0].selectedDecor === 0 && cover.selectedType === 0) ||
			(cover.types[1].selectedDecor === 0 && cover.selectedType === 1)
		) {
			let imageData = getLetteringDesignSrcAPosition(cover.selectedType);

			switch (cover.selectedType) {
				case 0:
					setEcoLetteringImg({
						image: imageData.src,
						position: imageData.position,
					});
					break;
				case 1:
					setTextileEcoLetteringImg({
						image: imageData.src,
						position: imageData.position,
					});
					break;
				default:
					break;
			}
		} else {
			setEcoLetteringImg(null);
			setTextileEcoLetteringImg(null);
		}
	}, [
		cover.selectedType,
		cover.types[0].selectedDecor,
		cover.types[1].selectedDecor,
		cover.types[0].features.decor[0].options[1].selectedDesign,
		cover.types[1].features.decor[0].options[1].selectedDesign,
		cover.types[0].features.decor[0].options[0].selectedColor,
		cover.types[1].features.decor[0].options[0].selectedColor,
	]);
	const [visibleControls, setVisibleControls] = React.useState(false);

	//Фотовставка
	React.useEffect(() => {
		if (
			(cover.types[0].selectedDecor === 1 && cover.selectedType === 0) ||
			(cover.types[1].selectedDecor === 1 && cover.selectedType === 1)
		) {
			setShowPhotobidDefaults(true);
			switch (cover.selectedType) {
				case 0:
					switch (cover.types[0].features.decor[1].selectedSize) {
						case 0:
							setPhotobidDefaults({
								width: 98.75,
								height: 68.75,
								left: 0.625,
								top: 15.625,
							});
							break;
						case 1:
							setPhotobidDefaults({
								width: 56.25,
								height: 100,
								left: 31.25,
								top: 0,
							});

							break;
						case 2:
							setPhotobidDefaults({
								width: 43.75,
								height: 43.75,
								left: 28.125,
								top: 28.125,
							});
							break;

						default:
							break;
					}

					break;
				case 1:
					switch (cover.types[1].features.decor[1].selectedSize) {
						case 0:
							setPhotobidDefaults({
								width: 98.75,
								height: 68.75,
								left: 0.625,
								top: 15.625,
							});
							break;
						case 1:
							setPhotobidDefaults({
								width: 56.25,
								height: 100,
								left: 31.25,
								top: 0,
							});

							break;
						case 2:
							setPhotobidDefaults({
								width: 43.75,
								height: 43.75,
								left: 28.125,
								top: 28.125,
							});
							break;

						default:
							break;
					}
				default:
					break;
			}
			if (
				(cover.selectedType === 0 &&
					cover.types[0].features.decor[1].blobImage) ||
				(cover.selectedType === 1 && cover.types[1].features.decor[1].blobImage)
			) {
				switch (cover.selectedType) {
					case 0:
						setEcoPhotoBidImg(cover.types[0].features.decor[1].blobImage);
						setTextilePhotoBidImg(null);
						break;
					case 1:
						setTextilePhotoBidImg(cover.types[1].features.decor[1].blobImage);
						setEcoPhotoBidImg(null);
						break;
					default:
						break;
				}
				setShowPhotobidDefaults(false);
			} else {
				setEcoPhotoBidImg(null);
				setTextilePhotoBidImg(null);
				setShowPhotobidDefaults(true);
			}
		} else {
			setPhotobidDefaults(null);
			setShowPhotobidDefaults(false);
			setEcoPhotoBidImg(null);
			setTextilePhotoBidImg(null);
		}
	}, [
		cover.selectedType,
		cover.types[0].selectedDecor,
		cover.types[1].selectedDecor,
		cover.types[0].features.decor[1].blobImage,
		cover.types[1].features.decor[1].blobImage,
		cover.types[0].features.decor[1].selectedSize,
		cover.types[1].features.decor[1].selectedSize,
	]);
	///////////////////////////////////////////////////////////////////////////////
	//           \/

	//Металлическая пластина(эмблема)
	React.useEffect(() => {
		if (
			(cover.types[0].selectedDecor === 2 && cover.selectedType === 0) ||
			(cover.types[1].selectedDecor === 2 && cover.selectedType === 1)
		) {
			let metalplateSrc = "";
			switch (cover.selectedType) {
				case 0:
					let ecoMetalplateColorObj =
						cover.types[0].features.decor[2].options[0].colors[
							cover.types[0].features.decor[2].options[0].selectedColor
						];
					let ecoMetalPlateSelectedSizeObj =
						cover.types[0].features.decor[2].options[1].sizes[
							cover.types[0].features.decor[2].options[1].selectedSize
						];

					let ecoMetalplatePosition = {};
					switch (ecoMetalPlateSelectedSizeObj.id) {
						case 0:
							ecoMetalplatePosition = {
								width: size.selectedType === 0 ? 28.5714 : 21.2766,
								height: size.selectedType === 0 ? 28.5714 : 31.25,
								left: size.selectedType === 0 ? 35.7143 : 39.3617,
								top: size.selectedType === 0 ? 21.4286 : 18.75,
							};
							break;
						case 1:
							ecoMetalplatePosition = {
								width: size.selectedType === 0 ? 38.0952 : 34.0426,
								height: size.selectedType === 0 ? 21.4286 : 25,
								left: size.selectedType === 0 ? 50 : 51.0638,
								top: size.selectedType === 0 ? 66.6667 : 53.125,
							};
							break;
						default:
							break;
					}

					metalplateSrc = pathTo(
						`/images/eco_metalplate_colors/${ecoMetalplateColorObj.title}.png`
					);
					setTextileMetalplate(null);
					setEcoMetalplate({
						metalplateSrc,
						position: ecoMetalplatePosition,
					});

					break;
				case 1:
					let textileMetalplateColorObj =
						cover.types[1].features.decor[2].options[0].colors[
							cover.types[1].features.decor[2].options[0].selectedColor
						];
					let textileMetalPlateSelectedSizeObj =
						cover.types[1].features.decor[2].options[1].sizes[
							cover.types[1].features.decor[2].options[1].selectedSize
						];

					let textileMetalplatePosition = {};
					switch (textileMetalPlateSelectedSizeObj.id) {
						case 0:
							textileMetalplatePosition = {
								width: size.selectedType === 0 ? 28.5714 : 21.2766,
								height: size.selectedType === 0 ? 28.5714 : 31.25,
								left: size.selectedType === 0 ? 35.7143 : 39.3617,
								top: size.selectedType === 0 ? 21.4286 : 18.75,
							};
							break;
						case 1:
							textileMetalplatePosition = {
								width: size.selectedType === 0 ? 38.0952 : 34.0426,
								height: size.selectedType === 0 ? 21.4286 : 25,
								left: size.selectedType === 0 ? 50 : 51.0638,
								top: size.selectedType === 0 ? 66.6667 : 53.125,
							};
							break;
						default:
							break;
					}

					metalplateSrc = pathTo(
						`/images/eco_metalplate_colors/${textileMetalplateColorObj.title}.png`
					);
					setEcoMetalplate(null);
					setTextileMetalplate({
						metalplateSrc,
						position: textileMetalplatePosition,
					});

					break;
				default:
					break;
			}
		} else {
			setEcoMetalplate(null);
			setTextileMetalplate(null);
		}
	}, [
		cover.types[0].features.decor[2].options[0].selectedColor,
		cover.types[1].features.decor[2].options[0].selectedColor,
		cover.types[0].features.decor[2].options[1].selectedSize,
		cover.types[1].features.decor[2].options[1].selectedSize,
		cover.types[0].selectedDecor,
		cover.types[1].selectedDecor,
		cover.selectedType,
	]);

	//Металлическая пластина(гравировка)

	React.useEffect(() => {
		if (
			(cover.types[0].selectedDecor === 2 &&
				cover.selectedType === 0 &&
				cover.types[0].features.decor[2].options[2].selectedDecoration === 0) ||
			(cover.types[1].selectedDecor === 2 &&
				cover.selectedType === 1 &&
				cover.types[1].features.decor[2].options[2].selectedDecoration === 0)
		) {
			let metalPlateImageSrc = "";
			//Размер
			switch (cover.selectedType) {
				case 0:
					let ecoMetalPlateSelectedImgObj =
						cover.types[0].features.decor[2].options[2].decors[0].engraves[
							cover.types[0].features.decor[2].options[2].decors[0]
								.selectedEngrave
						];
					let ecoMetalPlateSelectedSizeObj =
						cover.types[0].features.decor[2].options[1].sizes[
							cover.types[0].features.decor[2].options[1].selectedSize
						];

					let ecoMetalplateImagePosition = {};
					switch (ecoMetalPlateSelectedSizeObj.id) {
						case 0:
							ecoMetalplateImagePosition = {
								width: ecoMetalPlateSelectedImgObj.quadraticOptions.width,
								height: ecoMetalPlateSelectedImgObj.quadraticOptions.height,
							};
							break;
						case 1:
							ecoMetalplateImagePosition = {
								width: ecoMetalPlateSelectedImgObj.rectangleOptions.width,
								height: ecoMetalPlateSelectedImgObj.rectangleOptions.height,
							};
							break;
						default:
							break;
					}
					metalPlateImageSrc = pathTo(
						`/images/eco_metalplate_decorations_${ecoMetalPlateSelectedSizeObj.title}/${ecoMetalPlateSelectedImgObj.title}.png`
					);

					setEcoMetalplateImg({
						metalPlateImageSrc,
						position: ecoMetalplateImagePosition,
					});

					setTextileMetalplateImg(null);

					break;
				case 1:
					let textileMetalPlateSelectedImgObj =
						cover.types[1].features.decor[2].options[2].decors[0].engraves[
							cover.types[1].features.decor[2].options[2].decors[0]
								.selectedEngrave
						];
					let textileMetalPlateSelectedSizeObj =
						cover.types[1].features.decor[2].options[1].sizes[
							cover.types[1].features.decor[2].options[1].selectedSize
						];
					let textileMetalplateImagePosition = {};

					switch (textileMetalPlateSelectedSizeObj.id) {
						case 0:
							textileMetalplateImagePosition = {
								width: textileMetalPlateSelectedImgObj.quadraticOptions.width,
								height: textileMetalPlateSelectedImgObj.quadraticOptions.height,
							};
							break;
						case 1:
							textileMetalplateImagePosition = {
								width: textileMetalPlateSelectedImgObj.rectangleOptions.width,
								height: textileMetalPlateSelectedImgObj.rectangleOptions.height,
							};
							break;
						default:
							break;
					}
					metalPlateImageSrc = pathTo(
						`/images/eco_metalplate_decorations_${textileMetalPlateSelectedSizeObj.title}/${textileMetalPlateSelectedImgObj.title}.png`
					);

					setTextileMetalplateImg({
						metalPlateImageSrc,
						position: textileMetalplateImagePosition,
					});

					setEcoMetalplateImg(null);

					break;
				default:
					break;
			}
		} else {
			setEcoMetalplateImg(null);
			setTextileMetalplateImg(null);
		}
	}, [
		cover.types[0].selectedDecor,
		cover.types[1].selectedDecor,
		cover.selectedType,
		cover.types[0].features.decor[2].options[2].selectedDecoration,
		cover.types[1].features.decor[2].options[2].selectedDecoration,
		cover.types[0].features.decor[2].options[2].decors[0].selectedEngrave,
		cover.types[1].features.decor[2].options[2].decors[0].selectedEngrave,
		cover.types[0].features.decor[2].options[1].selectedSize,
		cover.types[1].features.decor[2].options[1].selectedSize,
	]);

	//Металлическая пластина(текст)
	const getMetalplateText = () => {
		if (
			(cover.types[0].selectedDecor === 2 &&
				cover.selectedType === 0 &&
				cover.types[0].features.decor[2].options[2].selectedDecoration === 1) ||
			(cover.types[1].selectedDecor === 2 &&
				cover.selectedType === 1 &&
				cover.types[1].features.decor[2].options[2].selectedDecoration === 1)
		) {
			switch (cover.selectedType) {
				case 0:
					// let ecoMetalplateSizeObj =
					// 	cover.types[0].features.decor[2].options[1].sizes[
					// 		cover.types[0].features.decor[2].options[1].selectedSize
					// 	];

					let ecoMetalplateTextSizeObj =
						cover.types[0].features.decor[2].options[2].decors[1].sizes[
							cover.types[0].features.decor[2].options[2].decors[1].selectedSize
						];
					let ecoMetalplateTextFontObj =
						cover.types[0].features.decor[2].options[2].decors[1].fonts[
							cover.types[0].features.decor[2].options[2].decors[1].selectedFont
						];
					let ecoMetalplateText =
						cover.types[0].features.decor[2].options[2].decors[1].typedText;
					let ecoTextObj = {
						text: ecoMetalplateText,
						fontSize: Number(ecoMetalplateTextSizeObj.value),
						fontFamily: ecoMetalplateTextFontObj.value,
					};

					setEcoMetalplateText(ecoTextObj);
					setTextileMetalplateText(null);
					break;
				case 1:
					// let textileMetalplateSizeObj =
					// 	cover.types[1].features.decor[2].options[1].sizes[
					// 		cover.types[1].features.decor[2].options[1].selectedSize
					// 	];

					let textileMetalplateTextSizeObj =
						cover.types[1].features.decor[2].options[2].decors[1].sizes[
							cover.types[1].features.decor[2].options[2].decors[1].selectedSize
						];
					let textileMetalplateTextFontObj =
						cover.types[1].features.decor[2].options[2].decors[1].fonts[
							cover.types[1].features.decor[2].options[2].decors[1].selectedFont
						];
					let textileMetalplateText =
						cover.types[1].features.decor[2].options[2].decors[1].typedText;
					let textileTextObj = {
						text: textileMetalplateText,
						fontSize: Number(textileMetalplateTextSizeObj.value),
						fontFamily: textileMetalplateTextFontObj.value,
					};

					setTextileMetalplateText(textileTextObj);
					setEcoMetalplateText(null);
					break;
				default:
					break;
			}
		} else {
			setEcoMetalplateText(null);
			setTextileMetalplateText(null);
		}
	};

	React.useEffect(() => {
		getMetalplateText();
	}, [
		cover.types[0].selectedDecor,
		cover.selectedType,
		cover.types[0].features.decor[2].options[2].selectedDecoration,
		cover.types[1].selectedDecor,
		cover.selectedType,
		cover.types[1].features.decor[2].options[2].selectedDecoration,
		cover.types[0].features.decor[2].options[2].decors[1].selectedSize,
		cover.types[1].features.decor[2].options[2].decors[1].selectedSize,
		cover.types[0].features.decor[2].options[2].decors[1].selectedFont,
		cover.types[1].features.decor[2].options[2].decors[1].selectedFont,
		cover.types[0].features.decor[2].options[2].decors[1].typedText,
		cover.types[1].features.decor[2].options[2].decors[1].typedText,
		cover.types[0].features.decor[2].options[1].selectedSize,
		cover.types[1].features.decor[2].options[1].selectedSize,
	]);

	//Фотообложка
	React.useEffect(() => {
		if (cover.selectedType === 2) {
			setPhotoCoverDefault(true);
			if (cover.types[2].blobImage) {
				setPhotoCoverDefault(false);
				setPhotoCoverImg(cover.types[2].blobImage);
			} else {
				setPhotoCoverImg(null);
				setPhotoCoverDefault(true);
			}
		} else {
			setPhotoCoverImg(null);
			setPhotoCoverDefault(false);
		}
	}, [cover.selectedType, cover.types[2].blobImage]);

	//Удаление изображения из eco photobid, textile photobid,photocover
	const handleRemovePhoto = type => {
		let imageKey = "";
		if (type === "eco") {
			imageKey = "eco_photobid";
		} else if (type === "textile") {
			imageKey = "textile_photobid";
		} else {
			imageKey = "photocover";
		}

		axios({
			method: "post",
			url: `${BASE_URL}/designer/?controller=Album&method=remove&album=${header_content.albumId}&image=${imageKey}`,
			headers: { "Content-Type": "application/json" },
		})
			.then(async res => {
				if (res.status === 200) {
					dispatch(handleRemoveCoverPhoto(type));
				}
			})
			.catch(e => {
				console.log(e);
				toast.error("Что-то пошло не так");
			});
	};
	//Поменять position фоток для eco photobid, textile photobid,photocover
	const handleChangeAxisVls = (axis, type) => {
		dispatch(handleChangeAxisOptionsCoverPhoto({ axis, type }));
	};
	return (
		<div className="cover__preview">
			<div
				ref={stageRef}
				style={{
					width: `${size.selectedType === 0 ? "790px" : "1160.31px"}`,
					transform: `scale(${
						size.selectedType === 0 ? size.scale : size.scale - 0.15
					})`,
				}}
				className="cover"
			>
				<div
					style={{ backgroundImage: `url(${coverColorSrc})` }}
					className="cover__binding"
				></div>
				<div
					style={{ backgroundImage: `url(${coverColorSrc})` }}
					className="cover__book"
				>
					{/* Тиснение */}
					{ecoLetteringImg && (
						<div className="cover__embossing">
							<img
								style={{
									width: `${ecoLetteringImg?.position?.width}%`,
									height: `${ecoLetteringImg?.position?.height}%`,
									left: `${ecoLetteringImg?.position?.left}%`,
									top: `${ecoLetteringImg?.position?.top}%`,
								}}
								src={ecoLetteringImg.image}
								alt="eco_lettering_img"
							/>
						</div>
					)}

					{textileLetteringImg && (
						<div className="cover__embossing">
							<img
								style={{
									width: `${textileLetteringImg?.position.width}%`,
									height: `${textileLetteringImg?.position.height}%`,
									left: `${textileLetteringImg?.position.left}%`,
									top: `${textileLetteringImg?.position.top}%`,
								}}
								src={textileLetteringImg.image}
								alt=""
							/>
						</div>
					)}
					{/* Фотовставка дефолтные темы */}
					{showPhotobidDefaults && photobidDefaults && (
						<div
							style={{
								width: `${photobidDefaults.width}%`,
								height: `${photobidDefaults.height}%`,
								left: `${photobidDefaults?.left}%`,
								top: `${photobidDefaults.top}%`,
							}}
							className="cover__photobid_default"
						></div>
					)}
					{/* Фотовставка */}
					{ecoPhotoBidImg && (
						<div
							style={{
								width: `${photobidDefaults.width}%`,
								height: `${photobidDefaults.height}%`,
								left: `${photobidDefaults.left}%`,
								top: `${photobidDefaults.top}%`,
							}}
							onMouseEnter={() => setVisibleControls(true)}
							onMouseLeave={() => setVisibleControls(false)}
							className="cover__photobid"
						>
							<img
								style={{
									objectFit: "cover",
									objectPosition: `${cover.types[0].features.decor[1].directionOptions.axisX}% ${cover.types[0].features.decor[1].directionOptions.axisY}%`,
									transition: "all ease 0.5s",
								}}
								src={ecoPhotoBidImg}
								alt="photobid_img"
							/>
							<div
								style={{
									width: photobidDefaults.width,
									height: photobidDefaults.height,
									left: photobidDefaults.left,
									top: photobidDefaults.top,
								}}
								className={`photobid_image_controls ${
									(!visibleControls || !ecoPhotoBidImg) &&
									"photobid_image_controls--hidden"
								}`}
							>
								<div className="photobid_image_control photobid_image_control--dragging">
									<div
										onClick={() => handleChangeAxisVls("up", "eco")}
										className="tmpl__dragging_part tmpl__dragging_part--up"
									>
										<BsFillArrowUpCircleFill />
									</div>
									<div className="tmpl__dragging_row">
										<div
											onClick={() => handleChangeAxisVls("left", "eco")}
											className="tmpl__dragging_part tmpl__dragging_part--left"
										>
											<BsFillArrowLeftCircleFill />
										</div>
										<div
											onClick={() => handleChangeAxisVls("right", "eco")}
											className="tmpl__dragging_part tmpl__dragging_part--right"
										>
											<BsFillArrowRightCircleFill />
										</div>
									</div>
									<div
										onClick={() => handleChangeAxisVls("down", "eco")}
										className="tmpl__dragging_part tmpl__dragging_part--down"
									>
										<BsFillArrowDownCircleFill />
									</div>
								</div>

								<div
									className="photobid_image_control photobid_image_control--delete"
									onClick={() => handleRemovePhoto("eco")}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="none"
										viewBox="0 0 10 12"
									>
										<path
											fill="#393939"
											fillRule="evenodd"
											d="M1.82 11.185S2 12 2.92 12h4.16a1.09 1.09 0 001.098-.815L9 3.2H1l.82 7.985zM6.6 4.4a.4.4 0 11.8 0l-.4 6a.4.4 0 11-.8 0l.4-6zm-2 0a.4.4 0 11.8 0v6a.4.4 0 11-.8 0v-6zM3 4c.22 0 .4.18.4.4l.4 6a.4.4 0 01-.8 0l-.4-6c0-.22.179-.4.4-.4zm5.76-2.4H7V.8c0-.607-.197-.8-.8-.8H3.8c-.554 0-.8.268-.8.8v.8H1.24c-.354 0-.64.27-.64.601 0 .332.286.6.64.6h7.52c.353 0 .64-.268.64-.6 0-.332-.287-.6-.64-.6zm-2.56 0H3.8V.8h2.4v.8z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
							</div>
						</div>
					)}

					{textilePhotoBidImg && (
						<div
							onMouseEnter={() => setVisibleControls(true)}
							onMouseLeave={() => setVisibleControls(false)}
							style={{
								width: `${photobidDefaults.width}%`,
								height: `${photobidDefaults.height}%`,
								left: `${photobidDefaults.left}%`,
								top: `${photobidDefaults.top}%`,
							}}
							className="cover__photobid"
						>
							<img
								style={{
									objectFit: "cover",
									objectPosition: `${cover.types[1].features.decor[1].directionOptions.axisX}% ${cover.types[1].features.decor[1].directionOptions.axisY}%`,
									transition: "all ease 0.5s",
								}}
								src={textilePhotoBidImg}
								alt="photobid_img"
							/>
							<div
								style={{
									width: photobidDefaults.width,
									height: photobidDefaults.height,
									left: photobidDefaults.left,
									top: photobidDefaults.top,
								}}
								className={`photobid_image_controls ${
									(!visibleControls || !textilePhotoBidImg) &&
									"photobid_image_controls--hidden"
								}`}
							>
								<div className="photobid_image_control photobid_image_control--dragging">
									<div
										onClick={() => handleChangeAxisVls("up", "textile")}
										className="tmpl__dragging_part tmpl__dragging_part--up"
									>
										<BsFillArrowUpCircleFill />
									</div>
									<div className="tmpl__dragging_row">
										<div
											onClick={() => handleChangeAxisVls("left", "textile")}
											className="tmpl__dragging_part tmpl__dragging_part--left"
										>
											<BsFillArrowLeftCircleFill />
										</div>
										<div
											onClick={() => handleChangeAxisVls("right", "textile")}
											className="tmpl__dragging_part tmpl__dragging_part--right"
										>
											<BsFillArrowRightCircleFill />
										</div>
									</div>
									<div
										onClick={() => handleChangeAxisVls("down", "textile")}
										className="tmpl__dragging_part tmpl__dragging_part--down"
									>
										<BsFillArrowDownCircleFill />
									</div>
								</div>

								<div
									className="photobid_image_control photobid_image_control--delete"
									onClick={() => handleRemovePhoto("textile")}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="none"
										viewBox="0 0 10 12"
									>
										<path
											fill="#393939"
											fillRule="evenodd"
											d="M1.82 11.185S2 12 2.92 12h4.16a1.09 1.09 0 001.098-.815L9 3.2H1l.82 7.985zM6.6 4.4a.4.4 0 11.8 0l-.4 6a.4.4 0 11-.8 0l.4-6zm-2 0a.4.4 0 11.8 0v6a.4.4 0 11-.8 0v-6zM3 4c.22 0 .4.18.4.4l.4 6a.4.4 0 01-.8 0l-.4-6c0-.22.179-.4.4-.4zm5.76-2.4H7V.8c0-.607-.197-.8-.8-.8H3.8c-.554 0-.8.268-.8.8v.8H1.24c-.354 0-.64.27-.64.601 0 .332.286.6.64.6h7.52c.353 0 .64-.268.64-.6 0-.332-.287-.6-.64-.6zm-2.56 0H3.8V.8h2.4v.8z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
							</div>
						</div>
					)}

					{/* Фотообложка */}
					{photoCoverDefault && <div className="photocover_default"> </div>}
					{photoCoverImg && (
						<div
							onMouseEnter={() => setVisibleControls(true)}
							onMouseLeave={() => setVisibleControls(false)}
							style={{
								width: "100%",
								height: "100%",
							}}
							className="cover__photocover"
						>
							<img
								style={{
									objectFit: "cover",
									objectPosition: `${cover.types[2].directionOptions.axisX}% ${cover.types[2].directionOptions.axisY}%`,
									transition: "all ease 0.5s",
								}}
								src={photoCoverImg}
								alt="photocover_img"
							/>
							<div
								style={{
									width: "100%",
									height: "100%",
									left: "0",
									top: "0",
								}}
								className={`photobid_image_controls ${
									(!visibleControls || !photoCoverImg) &&
									"photobid_image_controls--hidden"
								}`}
							>
								<div className="photobid_image_control photobid_image_control--dragging">
									<div
										onClick={() => handleChangeAxisVls("up", "photocover")}
										className="tmpl__dragging_part tmpl__dragging_part--up"
									>
										<BsFillArrowUpCircleFill />
									</div>
									<div className="tmpl__dragging_row">
										<div
											onClick={() => handleChangeAxisVls("left", "photocover")}
											className="tmpl__dragging_part tmpl__dragging_part--left"
										>
											<BsFillArrowLeftCircleFill />
										</div>
										<div
											onClick={() => handleChangeAxisVls("right", "photocover")}
											className="tmpl__dragging_part tmpl__dragging_part--right"
										>
											<BsFillArrowRightCircleFill />
										</div>
									</div>
									<div
										onClick={() => handleChangeAxisVls("down", "photocover")}
										className="tmpl__dragging_part tmpl__dragging_part--down"
									>
										<BsFillArrowDownCircleFill />
									</div>
								</div>

								<div
									className="photobid_image_control photobid_image_control--delete"
									onClick={() => handleRemovePhoto("photocover")}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="none"
										viewBox="0 0 10 12"
									>
										<path
											fill="#393939"
											fillRule="evenodd"
											d="M1.82 11.185S2 12 2.92 12h4.16a1.09 1.09 0 001.098-.815L9 3.2H1l.82 7.985zM6.6 4.4a.4.4 0 11.8 0l-.4 6a.4.4 0 11-.8 0l.4-6zm-2 0a.4.4 0 11.8 0v6a.4.4 0 11-.8 0v-6zM3 4c.22 0 .4.18.4.4l.4 6a.4.4 0 01-.8 0l-.4-6c0-.22.179-.4.4-.4zm5.76-2.4H7V.8c0-.607-.197-.8-.8-.8H3.8c-.554 0-.8.268-.8.8v.8H1.24c-.354 0-.64.27-.64.601 0 .332.286.6.64.6h7.52c.353 0 .64-.268.64-.6 0-.332-.287-.6-.64-.6zm-2.56 0H3.8V.8h2.4v.8z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
							</div>
						</div>
					)}
					{/* Металлическая пластина (эмблема,гравировка,текст) эко-кожа */}
					{ecoMetalplate && (
						<div
							style={{
								width: `${ecoMetalplate.position.width}%`,
								height: `${ecoMetalplate.position.height}%`,
								left: `${ecoMetalplate.position.left}%`,
								top: `${ecoMetalplate.position.top}%`,
								backgroundImage: `url(${ecoMetalplate.metalplateSrc})`,
							}}
							className="metalplate"
						>
							{ecoMetalplateImg && (
								<div className="plate_etching">
									<img
										src={ecoMetalplateImg.metalPlateImageSrc}
										style={{
											width: `${ecoMetalplateImg.position.width}%`,
											height: `${ecoMetalplateImg.position.height}%`,
										}}
										alt="metalplate_engrave_img"
									/>
								</div>
							)}
							{ecoMetalplateText && (
								<div className="plate__text_container">
									<div
										style={{
											fontSize: `${ecoMetalplateText.fontSize}px`,
											fontFamily: `${ecoMetalplateText.fontFamily}`,
										}}
										className="plate__text"
									>
										{ecoMetalplateText.text}
									</div>
								</div>
							)}
						</div>
					)}

					{/* Металлическая пластина (эмблема,гравировка,текст) ткань */}

					{textileMetalplate && (
						<div
							style={{
								width: `${textileMetalplate.position.width}%`,
								height: `${textileMetalplate.position.height}%`,
								left: `${textileMetalplate.position.left}%`,
								top: `${textileMetalplate.position.top}%`,
								backgroundImage: `url(${textileMetalplate.metalplateSrc})`,
							}}
							className="metalplate"
						>
							{textileMetalplateImg && (
								<div className="plate_etching">
									<img
										src={textileMetalplateImg.metalPlateImageSrc}
										style={{
											width: `${textileMetalplateImg.position.width}%`,
											height: `${textileMetalplateImg.position.height}%`,
										}}
										alt="metalplate_engrave_img"
									/>
								</div>
							)}
							{textileMetalplateText && (
								<div className="plate__text_container">
									<div
										style={{
											fontSize: `${textileMetalplateText.fontSize}px`,
											fontFamily: `${textileMetalplateText.fontFamily}`,
										}}
										className="plate__text"
									>
										{textileMetalplateText.text}
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CoverPreview;
