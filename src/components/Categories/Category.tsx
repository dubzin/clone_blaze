interface CategoryProps {
	active?: boolean;
	title: string;
}

const Category = ({ active, title }: CategoryProps) => {
	return (
		<div
			className={`flex items-center justify-between gap-2 ${
				active === true ? "bg-red" : "bg-[#1A242D]"
			} h-10 px-7 py-2 rounded-full text-sm font-semibold shadow-md shadow-{#060a0e26} cursor-pointer`}
		>
			{title}
		</div>
	);
};

export default Category;
