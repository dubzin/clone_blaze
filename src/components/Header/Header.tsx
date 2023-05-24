import { useState } from "react";
import logoBlaze from "../../assets/logo-blaze.png";
import ButtonRed from "../Buttons/ButtonRed";
import { Menu } from "lucide-react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleMenuOpen = () => {};

	return (
		<header
			style={{ borderBottom: "1px solid #323B45" }}
			className="fixed flex items-center justify-between h-[70px] w-full py-3 px-6 z-20 bg-bg_color"
		>
			{/* Left header session */}
			<div className="font-semibold text-xs uppercase flex items-center space-x-8">
				<a href="#">Cassino</a>
				<a href="#" className="pr-4 text-white/75">
					Esportes
				</a>
				<div className="flex items-center space-x-5">
					<Menu className="h-8 w-8 rounded-full p-1 transition-colors hover:bg-white/40  cursor-pointer " />
					<img src={logoBlaze} alt="Logo blaze" />
				</div>
			</div>
			{/* Right header session */}
			<div className="flex items-center  gap-5">
				<a href="#" className="font-bold text-[.8em]">
					Entrar
				</a>
				<ButtonRed>Cadastre-se</ButtonRed>
			</div>
		</header>
	);
};

export default Header;
