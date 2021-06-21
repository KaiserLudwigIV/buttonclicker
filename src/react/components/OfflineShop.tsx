import React from "react";
import { ShopItem } from "./ShopItem";
import {
	ChatAdd,
	CloudDownload,
	Moon,
	Lifesaver,
	Coffee,
	Radish,
} from "akar-icons";

interface Props {
	buyItem: (e: number, a: number) => void;
}

const OfflineShop = (props: Props) => {
	return (
		<div id="offlineShopContainer">
			<h1>Offline Shop</h1>
			<div>
				<ShopItem
					imgSrc={<ChatAdd size={42} />}
					imgAlt="ChatAdd "
					itemText="Automatic Chat"
					itemPrice={10}
					buyItem={props.buyItem}
					upgradeResult={0.1}
				/>
				<ShopItem
					imgSrc={<CloudDownload size={42} />}
					imgAlt="CloudDownload"
					itemText="Money Download"
					itemPrice={10}
					buyItem={props.buyItem}
					upgradeResult={0.1}
				/>
				<ShopItem
					imgSrc={<Moon size={42} />}
					imgAlt="Moon"
					itemText="Night Worker"
					itemPrice={10}
					buyItem={props.buyItem}
					upgradeResult={0.1}
				/>
				<ShopItem
					imgSrc={<Lifesaver size={42} />}
					imgAlt="Lifesaver "
					itemText="Lifesaver"
					itemPrice={10}
					buyItem={props.buyItem}
					upgradeResult={0.1}
				/>
				<ShopItem
					imgSrc={<Coffee size={42} />}
					imgAlt="Coffee"
					itemText="Speed it up!"
					itemPrice={10}
					buyItem={props.buyItem}
					upgradeResult={0.1}
				/>
				<ShopItem
					imgSrc={<Radish size={42} />}
					imgAlt="Radish"
					itemText="Growing Seeds"
					itemPrice={10}
					buyItem={props.buyItem}
					upgradeResult={0.1}
				/>
			</div>
		</div>
	);
};

export { OfflineShop };
