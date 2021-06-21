import React from "react";
import { Coin } from "akar-icons";

interface Props {
	faultAmount: number;
}

const FaultDisplay = (props: Props) => {
	return (
		<div id="faultContainer">
			<h1>Faults:</h1>
			<h1>
				{" "}
				{Math.round(props.faultAmount)}
				<Coin
					size={40}
					style={{ display: "inline", marginLeft: "1rem" }}
				/>
			</h1>
		</div>
	);
};

export { FaultDisplay };
