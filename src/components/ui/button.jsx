const Button = ({ children, className, variant = "primary", onClick }) => {
	const base =
		"font-dm cursor-pointer text-sm font-semibold tracking-wider transition-all duration-300 rounded-sm";

	const variants = {
		primary:
			"bg-nba-gold text-nba-deep border-2 border-nba-gold px-7 py-3 hover:bg-transparent hover:text-nba-gold",
		secondary:
			"bg-transparent text-nba-silver border border-nba-silver/30 px-7 py-3 hover:border-nba-gold/50 hover:text-nba-gold",
		ghost:
			"bg-transparent text-nba-gold border-none px-4 py-2 hover:text-nba-white",
	};

	return (
		<button
			className={`${base} ${variants[variant]} ${className || ""}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export { Button };
