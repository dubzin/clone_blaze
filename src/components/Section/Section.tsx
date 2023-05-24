import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SectionProps {
	title: string;
}

const Section = ({ title }: SectionProps) => {
	const [isSectionOpen, setIsSectionOpen] = useState<boolean>(false);

	return (
		<div className="text-text w-full">
			{/* Section name */}
			<div
				onClick={() => setIsSectionOpen(!isSectionOpen)}
				className="uppercase font-bold text-xs flex items-center justify-between cursor-pointer
                px-8 pb-4 w-full h-[40px]"
			>
				{title}
				<ChevronDown className="h-4 w-4" />
			</div>
			{/* Section content */}
			{isSectionOpen && (
				<div className="mt-1 mb-5 space-y-4 px-9 font-semibold text-sm text-text/75">
					<div className="flex items-center justify-start gap-5">
						Crash
					</div>
					<div className="flex items-center justify-start gap-5">
						Crash
					</div>
					<div className="flex items-center justify-start gap-5">
						Crash
					</div>
					<div className="flex items-center justify-start gap-5">
						Crash
					</div>
					<div className="flex items-center justify-start gap-5">
						Crash
					</div>
				</div>
			)}
			{/* Section line */}

			<div className="h-[1px] bg-border mt-2 w-full top-7" />
		</div>
	);
};

export default Section;
