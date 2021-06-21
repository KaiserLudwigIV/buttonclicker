import React from "react";
import logo from "../../imgs/button.svg";

interface Props {
	mainButtonClick: () => void;
}

const MainButton = (props: Props) => {
	return (
		<button
			id="mainButton"
			onClick={props.mainButtonClick}
			onMouseDown={(e: any) =>
				e.currentTarget.firstChild.classList.add("little")
			}
			onMouseUp={(e: any) =>
				e.currentTarget.firstChild.classList.remove("little")
			}
		>
			<img
				src={logo}
				style={{ width: "100%", height: "100%" }}
				alt="Button"
			/>
		</button>
	);
};

export { MainButton };
