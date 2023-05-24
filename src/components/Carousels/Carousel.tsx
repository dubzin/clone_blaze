import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
	title: string;
	children: React.ReactNode;
}

const Carousel = ({ title, children }: CarouselProps) => {
	return (
		<>
			{/* Carousel Container */}
			<div className="flex flex-col items-start justify-center space-y-3 w-full">
				{/* Carousel header */}
				<div className="flex items-center justify-between w-full mb-5">
					{/* left */}
					<div className="flex items-center space-x-5 ">
						<h1 className="text-xl font-medium">{title}</h1>
						{/* Carousel Controls */}
						<div className="flex items-center text-text w-10">
							<ChevronLeft />
							<ChevronRight />
						</div>
					</div>
					{/* Right */}
					<div className="flex items-center space-x-1 cursor-pointer">
						<span className="text-text text-xs font-semibold">
							Ver todos
						</span>{" "}
						<ChevronRight />
					</div>
				</div>
				{/* Carousel content */}
				<div className="max-w-full flex items-center justify-start space-x-5 overflow-x-auto shrink-0 scroll-smooth">
					{children}
				</div>
			</div>
		</>
	);
};

export default Carousel;
