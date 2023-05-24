import { useState } from "react";
import ButtonRed from "../Buttons/ButtonRed";

const Card = ({ }) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const onHoverButton = () => {
		setIsHovered(!isHovered);
	};

	return (
		<>
			{/* Card container */}
			<div
				onMouseEnter={onHoverButton}
				onMouseLeave={onHoverButton}
				className="h-44 w-36 bg-red rounded-md cursor-pointer"
			>
				{isHovered && (
					<div className="h-full w-full bg-black/40 flex items-center justify-center">
						<ButtonRed>Entre</ButtonRed>
					</div>
				)}
			</div>
		</>
	);
};

export default Card;
