import React from "react";

interface Props {
	imgSrc: any;
	imgAlt: string;
	itemText: string;
	itemPrice: number;
	buyItem: (e: number, a: number) => void;
	upgradeResult: number;
}

const ShopItem = (props: Props) => {
	return (
		<div
			className="shopItem"
			onClick={() => props.buyItem(props.itemPrice, props.upgradeResult)}
			onMouseDown={(e) => e.currentTarget.classList.add("little")}
			onMouseUp={(e) => e.currentTarget.classList.remove("little")}
		>
			{props.imgSrc}
			<div className="shopItemTextContainer">
				<h2>{props.itemText}</h2>
				<h2>{props.itemPrice}</h2>
			</div>
			<div className="upgradeText">Click {props.upgradeResult}x</div>
		</div>
	);
};

export { ShopItem };
