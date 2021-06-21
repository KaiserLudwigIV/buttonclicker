import React from "react";
import { useState } from "react";

import { MainButton } from "./components/MainButton";
import { TextLine } from "./components/TextLine";
import { FaultDisplay } from "./components/FaultDisplay";
import { EmergencyShop } from "./components/EmergencyShop";
import { OfflineShop } from "./components/OfflineShop";
import { Gear } from "akar-icons";

const textList = [
	"Are you brave enough to press the button?",
	"Oh no, you pressed the button!",
	"Bro you need to stop or you will blow us up!",
	"The damage has been done, stop it now!",
	"F*#k, I cant change your mind, right?",
	"Yeah go on, you will see where its taking you!",
	"You really had to click the big red button hu?",
	"You stupid piece! You need to stop!",
	"",
	"",
	"See! You did so bad you got a emergency shop!",
	"Button Clicker",
];

const App = () => {
	const [textCounter, setTextCounter] = useState(0);
	const [faultCounter, setFaultCounter] = useState(0);
	const [multiplier, setMultiplier] = useState(1);

	const doOnClick = () => {
		textCounter === 11 ? "" : setTextCounter(textCounter + 1);
		setFaultCounter(faultCounter + 1 * multiplier);
	};

	const tryBuyItem = async (price: number, mltp: number) => {
		if (faultCounter >= price) {
			setFaultCounter(faultCounter - price);
			setMultiplier(multiplier + mltp);
			return;
		}
		document.getElementsByTagName("body")[0].style.animation =
			".8s buyFailed";
		await new Promise((r) => setTimeout(r, 800));
		document.getElementsByTagName("body")[0].style.animation = "";
	};

	return (
		<div>
			<Gear size={60} className="settings" />
			<TextLine viewedText={textList[textCounter]} />

			<EmergencyShop buyItem={tryBuyItem} />
			<OfflineShop buyItem={tryBuyItem} />

			<MainButton mainButtonClick={doOnClick} />
			<FaultDisplay faultAmount={faultCounter} />
		</div>
	);
};

export { App };
