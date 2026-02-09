const StatsTicker = () => {
	const stats = [
		"🏀 LeBron James — 40.474 pontos na carreira",
		"🏆 Boston Celtics — 18 títulos da NBA",
		"⭐ Stephen Curry — 3.747 cestas de 3 pontos",
		"👑 Michael Jordan — 6x campeão, 6x MVP das Finais",
		"📊 Wilt Chamberlain — 100 pontos em um único jogo",
		"🔥 Kobe Bryant — 81 pontos contra os Raptors",
		"💎 Tim Duncan — 5 títulos com o Spurs",
		"🎯 Kevin Durant — 4x líder em pontuação",
	];

	return (
		<div className="border-nba-gold/20 bg-nba-navy/80 relative overflow-hidden border-y py-4 backdrop-blur-sm">
			{/* Fade edges */}
			<div className="from-nba-navy pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent" />
			<div className="from-nba-navy pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l to-transparent" />

			<div className="animate-ticker flex w-max gap-12">
				{[...stats, ...stats].map((stat, i) => (
					<span
						key={i}
						className="font-dm text-nba-silver flex-shrink-0 text-sm font-medium tracking-wide whitespace-nowrap"
					>
						{stat}
						<span className="text-nba-gold/30 ml-12">◆</span>
					</span>
				))}
			</div>
		</div>
	);
};

export { StatsTicker };
