import React from "react";
import { useState, useEffect } from "react";
import releasedbutton from "../../imgs/releasedbutton.svg";
import pressedbutton from "../../imgs/pressedbutton.svg";

interface Props {
	mainButtonClick: () => void;
}

const MainButton = (props: Props) => {
	const [button, setbutton] = useState(false);
	useEffect(() => {
		const img = new Image();
		img.src = pressedbutton;
	});

	return (
		<button
			id="mainButton"
			onClick={props.mainButtonClick}
			onMouseDown={(e: any) => setbutton(true)}
			onMouseUp={(e: any) => setbutton(false)}
		>
			<img
				src={button === true ? pressedbutton : releasedbutton}
				style={{ width: "100%", height: "100%" }}
				alt="Button"
			/>
		</button>
	);
};

export { MainButton };
