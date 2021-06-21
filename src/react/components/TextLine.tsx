import React from "react";

interface Props {
	viewedText: string;
}

const TextLine = (props: Props) => {
	return (
		<div className="textContainer">
			<h1>{props.viewedText}</h1>
		</div>
	);
};

export { TextLine };
