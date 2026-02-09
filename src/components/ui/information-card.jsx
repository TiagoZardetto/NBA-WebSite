const Information = ({ title, description, icon, className }) => {
	return (
		<div
			className={`group border-nba-silver/10 bg-nba-navy/40 hover:border-nba-gold/30 hover:shadow-nba-gold/5 relative flex h-64 w-full flex-col justify-end overflow-hidden rounded-lg border p-6 transition-all duration-500 hover:shadow-lg ${className || ""}`}
		>
			{/* Hover glow */}
			<div className="from-nba-gold/5 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			{/* Icon / emoji */}
			{icon && (
				<span className="relative z-10 mb-4 text-3xl transition-transform duration-500 group-hover:scale-110">
					{icon}
				</span>
			)}

			{/* Content */}
			<div className="relative z-10">
				<h4 className="font-bebas text-nba-white group-hover:text-nba-gold text-xl tracking-wide transition-colors duration-300">
					{title}
				</h4>
				{description && (
					<p className="font-dm text-nba-silver/50 group-hover:text-nba-silver/70 mt-2 text-sm leading-relaxed transition-colors duration-300">
						{description}
					</p>
				)}
			</div>

			{/* Bottom accent */}
			<div className="bg-nba-gold absolute right-0 bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
		</div>
	);
};

export { Information };
