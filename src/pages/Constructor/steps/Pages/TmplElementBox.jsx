/** @format */

import React from "react";
import { useDrop, useDrag } from "react-dnd";
import {
	BsFillArrowUpCircleFill,
	BsFillArrowDownCircleFill,
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import TmplElmBoxComponent from "./ui/TmplElmBoxComponent/TmplElmBoxComponent";

const TmplElementBox = ({
	isUploadingImages,
	pageId,
	justPreview,
	tmplElement,
	cn,
	sideToChange,
	image,
	handleDeleteImageFromElement,
	handleSetContainToImage,
	handleRotateImage,
	handleChangeAxisValues,
	handleSwapImages,
}) => {
	//justPreview
	const [visibleControls, setVisibleControls] = React.useState(false);
	const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
		accept: "TMPL_EL_BOX",
		drop: () => ({
			options: {
				tmplElementId: tmplElement.id,
				sideToChange,
				pageId,
			},
		}),
		//
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));
	const [{ isDragging }, dragRef] = useDrag(
		{
			type: "TMPL_EL_BOX",
			canDrag: !!image && !isUploadingImages,

			item: { pageId, tmplElementId: tmplElement.id, sideToChange },
			end: (item, monitor) => {
				const dropResult = monitor.getDropResult();
				if (item && dropResult) {
					let triggerInfo = {
						pageId: item.pageId,
						sideToChange: item.sideToChange,
						tmplElementId: item.tmplElementId,
					};
					let targetInfo = {
						pageId: dropResult.options.pageId,
						sideToChange: dropResult.options.sideToChange,
						tmplElementId: dropResult.options.tmplElementId,
					};
					if (
						triggerInfo.pageId === targetInfo.pageId &&
						triggerInfo.sideToChange === targetInfo.sideToChange &&
						triggerInfo.tmplElementId === targetInfo.tmplElementId
					) {
					} else {
						handleSwapImages({ triggerInfo, targetInfo });
					}
				}
			},
		},
		[isUploadingImages, image]
	);
	const isActive = canDrop && isOver;
	let backgroundColor = "rgb(225, 225, 225)";
	if (isActive) {
		backgroundColor = "rgb(53, 250, 96)";
	} else if (canDrop) {
		backgroundColor = "rgb(189, 189, 189)";
	}

	const handleDelete = () => {
		handleDeleteImageFromElement({ tmplElement, sideToChange, image, pageId });
	};
	const handleSetContain = () => {
		handleSetContainToImage({ tmplElement, sideToChange, image, pageId });
	};
	const handleRotate = () => {
		handleRotateImage({ tmplElement, sideToChange, image, pageId });
	};
	const handleChangeAxisVls = direction => {
		handleChangeAxisValues({
			tmplElement,
			sideToChange,
			image,
			pageId,
			direction,
		});
	};

	const onMouseEnterHandler = () => {
		setVisibleControls(true);
	};

	const ref = React.useRef(null);
	const dragDropRef = dragRef(dropRef(ref));
	return (
		<div ref={dragDropRef}>
			<TmplElmBoxComponent
				cn={cn}
				onMouseEnterHandler={onMouseEnterHandler}
				tmplElement={tmplElement}
				backgroundColor={backgroundColor}
				image={image}
			/>

			<div
				onMouseLeave={() => setVisibleControls(false)}
				style={{
					width: tmplElement.position.w,
					height: tmplElement.position.h,
					left: tmplElement.position.l,
					top: tmplElement.position.t,
				}}
				className={`tmpl__image_controls ${
					(!visibleControls || !tmplElement.image || justPreview) &&
					"tmpl__image_controls--hidden"
				}`}
			>
				<div
					onClick={handleRotate}
					className="tmpl__image_control tmpl__image_control--rotate"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="none"
						viewBox="0 0 12 11"
					>
						<path
							fill="#393939"
							d="M9.073 1.773a5.307 5.307 0 00-7.431.995 5.308 5.308 0 00.995 7.431.314.314 0 00.382-.5 4.678 4.678 0 01-.877-6.55 4.678 4.678 0 016.55-.876 4.678 4.678 0 01.876 6.55l-.331.433-.22-1.15a.314.314 0 00-.618.118l.315 1.644c.052.27.296.456.57.435l1.668-.128a.314.314 0 10-.048-.627l-1.167.09.33-.434a5.307 5.307 0 00-.994-7.43z"
						></path>
					</svg>
				</div>
				{!image?.directionOptions.contain && (
					<div className="tmpl__image_control tmpl__image_control--dragging">
						<div
							onClick={() => handleChangeAxisVls("up")}
							className="tmpl__dragging_part tmpl__dragging_part--up"
						>
							<BsFillArrowUpCircleFill />
						</div>
						<div className="tmpl__dragging_row">
							<div
								onClick={() => handleChangeAxisVls("left")}
								className="tmpl__dragging_part tmpl__dragging_part--left"
							>
								<BsFillArrowLeftCircleFill />
							</div>
							<div
								onClick={() => handleChangeAxisVls("right")}
								className="tmpl__dragging_part tmpl__dragging_part--right"
							>
								<BsFillArrowRightCircleFill />
							</div>
						</div>
						<div
							onClick={() => handleChangeAxisVls("down")}
							className="tmpl__dragging_part tmpl__dragging_part--down"
						>
							<BsFillArrowDownCircleFill />
						</div>
					</div>
				)}

				<div
					onClick={handleDelete}
					className="tmpl__image_control tmpl__image_control--delete"
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
				<div
					className="tmpl__image_control tmpl__image_control--contain"
					onClick={handleSetContain}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="none"
						viewBox="0 0 12 12"
					>
						<path
							fill="#393939"
							d="M2.14 10.39l2.735-2.735v.97a.375.375 0 00.75 0V6.75a.375.375 0 00-.375-.375H3.375a.375.375 0 000 .75h.97L1.61 9.86a.375.375 0 10.53.53zM6.75 5.625h1.875a.375.375 0 000-.75h-.97L10.39 2.14a.375.375 0 00-.53-.53L7.125 4.345v-.97a.375.375 0 00-.75 0V5.25c0 .207.168.375.375.375z"
						></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default TmplElementBox;
