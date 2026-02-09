const Footer = () => {
	return (
		<footer className="border-nba-gold/10 bg-nba-dark relative border-t">
			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-4">
					{/* Brand */}
					<div className="md:col-span-1">
						<div className="mb-4 flex items-center gap-3">
							<img src="/images/nba-6.svg" alt="NBA" className="h-8 w-8" />
							<span className="font-bebas text-nba-white text-xl tracking-widest">
								NBA <span className="text-nba-gold">JOURNEY</span>
							</span>
						</div>
						<p className="font-dm text-nba-silver/50 text-sm leading-relaxed">
							Explorando a maior liga de basquete do mundo. Uma jornada pelos
							momentos que definiram gerações.
						</p>
					</div>

					{/* Links */}
					<div>
						<h4 className="font-bebas text-nba-gold mb-4 text-lg tracking-wider">
							EXPLORAR
						</h4>
						<ul className="font-dm text-nba-silver/50 flex flex-col gap-2 text-sm">
							<li>
								<a
									href="#players"
									className="hover:text-nba-gold transition-colors"
								>
									Jogadores
								</a>
							</li>
							<li>
								<a
									href="#history"
									className="hover:text-nba-gold transition-colors"
								>
									História
								</a>
							</li>
							<li>
								<a
									href="#league"
									className="hover:text-nba-gold transition-colors"
								>
									A Liga
								</a>
							</li>
						</ul>
					</div>

					{/* Categories */}
					<div>
						<h4 className="font-bebas text-nba-gold mb-4 text-lg tracking-wider">
							CATEGORIAS
						</h4>
						<ul className="font-dm text-nba-silver/50 flex flex-col gap-2 text-sm">
							<li>Maiores Campeões</li>
							<li>Finais Históricas</li>
							<li>Jogadores Lendários</li>
							<li>Recordes da NBA</li>
						</ul>
					</div>

					{/* Newsletter / social placeholder */}
					<div>
						<h4 className="font-bebas text-nba-gold mb-4 text-lg tracking-wider">
							CONECTE-SE
						</h4>
						<p className="font-dm text-nba-silver/50 mb-4 text-sm">
							Siga a jornada do basquete profissional.
						</p>
						<div className="flex gap-3">
							{["X", "IG", "YT"].map((platform) => (
								<span
									key={platform}
									className="font-dm border-nba-silver/20 text-nba-silver/50 hover:border-nba-gold hover:text-nba-gold flex h-10 w-10 items-center justify-center rounded-sm border text-xs font-bold transition-all duration-300"
								>
									{platform}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-nba-silver/10 mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
					<p className="font-dm text-nba-silver/30 text-xs">
						© 2025 NBA Journey — Projeto educacional. Não afiliado à NBA.
					</p>
					<div className="flex gap-6">
						<span className="font-dm text-nba-silver/30 text-xs">
							React + Tailwind
						</span>
						<span className="font-dm text-nba-silver/30 text-xs">
							Feito com 🏀
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
