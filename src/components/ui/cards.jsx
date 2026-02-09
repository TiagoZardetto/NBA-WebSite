const Cards = ({ img, title, subtitle, number, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="animate-glow-pulse group relative flex h-[32rem] w-full max-w-[22rem] cursor-pointer flex-col justify-end overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.03] md:h-[40rem]"
		>
			{/* Background image with parallax-like hover */}
			<div
				className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110"
				style={{ backgroundImage: `url(${img})` }}
			/>

			{/* Dark gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500" />

			{/* Top corner accent */}
			<div className="from-nba-gold/20 absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

			{/* Jersey number watermark */}
			{number && (
				<div className="font-bebas group-hover:text-nba-gold/15 absolute top-4 right-4 text-7xl leading-none text-white/5 transition-all duration-500 md:text-8xl">
					{number}
				</div>
			)}

			{/* Content */}
			<div className="relative z-10 p-6">
				{/* Subtitle */}
				{subtitle && (
					<span className="font-dm text-nba-gold mb-2 inline-block translate-y-4 text-xs font-medium tracking-[0.2em] opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
						{subtitle}
					</span>
				)}

				{/* Title */}
				<h3 className="font-bebas text-nba-white translate-y-4 text-4xl leading-tight tracking-wide transition-all duration-500 group-hover:translate-y-0 md:text-5xl">
					{title}
				</h3>

				{/* Accent line */}
				<div className="bg-nba-red mt-3 h-[2px] w-0 transition-all delay-200 duration-500 group-hover:w-16" />

				{/* View prompt */}
				<div className="font-dm text-nba-silver/70 mt-4 flex translate-y-4 items-center gap-2 text-xs tracking-wider opacity-0 transition-all delay-300 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
					<span>VER PERFIL</span>
					<span className="transition-transform duration-300 group-hover:translate-x-1">
						→
					</span>
				</div>
			</div>

			{/* Bottom border accent */}
			<div className="from-nba-red via-nba-gold to-nba-red absolute right-0 bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r transition-all delay-100 duration-500 group-hover:w-full" />
		</div>
	);
};

export { Cards };
