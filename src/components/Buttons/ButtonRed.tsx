interface ButtonRedProps {
	children: React.ReactNode;
}

const ButtonRed = ({ children }: ButtonRedProps) => {
	return (
		<button
			className="bg-gradient-to-br bg-red bg-red/95 h-[40px] px-7 font-bold text-[.8em] rounded-[3px] flex items-center justify-center transition-colors hover:bg-red/75"
		>
			{children}
		</button>
	);
};

export default ButtonRed;
