const Button = ({ children, className }) => {
	return (
		<button
			className={`py-0.15 font-anton w-64 cursor-pointer rounded-lg bg-[#6B0F1A] px-1 text-[#DCE0D9] hover:bg-yellow-800 focus:outline-yellow-800 active:bg-[#FFBF47] ${className}`}
		>
			{children}
		</button>
	);
};

export { Button };
