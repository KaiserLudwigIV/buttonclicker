import React from "react";
import { ShopItem } from "./ShopItem";
import {
	Air,
	Heart,
	EyeSlashed,
	Planet,
	CirclePlusFill,
	Utensils,
	LightBulb,
} from "akar-icons";

interface Props {
	buyItem: (e: number, a: number) => void;
}

const EmergencyShop = (props: Props) => {
	return (
		<div id="emergencyShopContainer">
			<h1>Emergency Shop</h1>
			<div>
				<ShopItem
					imgSrc={<Air size={42} />}
					imgAlt="Air"
					itemText="Double Blower"
					itemPrice={10}
					buyItem={props.buyItem}
					upgradeResult={0.1}
				/>
				<ShopItem
					imgSrc={<EyeSlashed size={42} />}
					imgAlt="EyeSlashed"
					itemText="Terminator Spirit"
					itemPrice={50}
					buyItem={props.buyItem}
					upgradeResult={0.2}
				/>
				<ShopItem
					imgSrc={<Heart size={42} />}
					imgAlt="Heart"
					itemText="Live Waster"
					itemPrice={400}
					buyItem={props.buyItem}
					upgradeResult={0.4}
				/>
				<ShopItem
					imgSrc={<Planet size={42} />}
					imgAlt="Planet"
					itemText="Planet Destroyer"
					itemPrice={1000}
					buyItem={props.buyItem}
					upgradeResult={0.8}
				/>
				<ShopItem
					imgSrc={<CirclePlusFill size={42} />}
					imgAlt="CirclePlusFill"
					itemText="Bigger Button"
					itemPrice={2000}
					buyItem={props.buyItem}
					upgradeResult={1.5}
				/>
				<ShopItem
					imgSrc={<Utensils size={42} />}
					imgAlt="Utensils"
					itemText="Soul eater"
					itemPrice={5000}
					buyItem={props.buyItem}
					upgradeResult={3}
				/>
				<ShopItem
					imgSrc={<LightBulb size={42} />}
					imgAlt="LightBulb "
					itemText="Last Light"
					itemPrice={10000}
					buyItem={props.buyItem}
					upgradeResult={5}
				/>
			</div>
		</div>
	);
};

export { EmergencyShop };
