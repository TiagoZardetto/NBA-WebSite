import { useEffect, useRef, useState } from "react";

const LeagueSection = () => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold: 0.2 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const nbaLogoUrl = (teamId) =>
		`https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`;

	const conferences = [
		{
			name: "CONFERÊNCIA LESTE",
			teams: [
				{ name: "Boston Celtics", logo: nbaLogoUrl(1610612738) },
				{ name: "Milwaukee Bucks", logo: nbaLogoUrl(1610612749) },
				{ name: "Philadelphia 76ers", logo: nbaLogoUrl(1610612755) },
				{ name: "Miami Heat", logo: nbaLogoUrl(1610612748) },
				{ name: "New York Knicks", logo: nbaLogoUrl(1610612752) },
				{ name: "Cleveland Cavaliers", logo: nbaLogoUrl(1610612739) },
				{ name: "Brooklyn Nets", logo: nbaLogoUrl(1610612751) },
				{ name: "Atlanta Hawks", logo: nbaLogoUrl(1610612737) },
			],
		},
		{
			name: "CONFERÊNCIA OESTE",
			teams: [
				{ name: "Denver Nuggets", logo: nbaLogoUrl(1610612743) },
				{ name: "Los Angeles Lakers", logo: nbaLogoUrl(1610612747) },
				{ name: "Golden State Warriors", logo: nbaLogoUrl(1610612744) },
				{ name: "Phoenix Suns", logo: nbaLogoUrl(1610612756) },
				{ name: "Dallas Mavericks", logo: nbaLogoUrl(1610612742) },
				{ name: "Oklahoma City Thunder", logo: nbaLogoUrl(1610612760) },
				{ name: "Minnesota Timberwolves", logo: nbaLogoUrl(1610612750) },
				{ name: "Sacramento Kings", logo: nbaLogoUrl(1610612758) },
			],
		},
	];

	return (
		<section
			id="league"
			ref={ref}
			className="bg-nba-navy relative overflow-hidden py-32"
		>
			{/* Background pattern */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.03]">
				<div className="border-nba-gold absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
				<div className="border-nba-gold absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
			</div>

			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div
					className={`mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
				>
					<span className="font-dm text-nba-blue mb-4 inline-block text-xs tracking-[0.3em]">
						30 FRANQUIAS
					</span>
					<h2 className="font-bebas text-nba-white text-7xl tracking-tight md:text-8xl">
						A LIGA
					</h2>
					<div className="from-nba-gold mt-4 h-px w-24 bg-gradient-to-r to-transparent" />
				</div>

				{/* Intro text */}
				<div
					className={`mb-16 max-w-3xl transition-all delay-200 duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
				>
					<p className="font-dm text-nba-silver/70 text-lg leading-relaxed">
						A NBA é composta por 30 franquias divididas em duas conferências —
						Leste e Oeste. Cada conferência possui três divisões com cinco times
						cada. A temporada regular vai de outubro a abril, seguida pelos
						playoffs que culminam nas Finais da NBA em junho.
					</p>
				</div>

				{/* Conferences grid */}
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{conferences.map((conf, ci) => (
						<div
							key={conf.name}
							className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
							style={{ transitionDelay: `${300 + ci * 200}ms` }}
						>
							<h3 className="font-bebas text-nba-gold mb-6 text-2xl tracking-wider">
								{conf.name}
							</h3>
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
								{conf.teams.map((team, ti) => (
									<div
										key={team.name}
										className="font-dm group border-nba-silver/5 bg-nba-deep/50 text-nba-silver/60 hover:border-nba-gold/20 hover:text-nba-white flex items-center gap-3 rounded-md border px-4 py-3 text-sm transition-all duration-300"
										style={{
											transitionDelay: `${400 + ti * 50}ms`,
										}}
									>
										<img
											src={team.logo}
											alt={team.name}
											className="h-6 w-6 object-contain"
										/>
										{team.name}
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Fun facts */}
				<div
					className={`mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
					style={{ transitionDelay: "800ms", transitionDuration: "700ms" }}
				>
					{[
						{ value: "82", label: "JOGOS POR TEMPORADA" },
						{ value: "48", label: "MINUTOS POR JOGO" },
						{ value: "16", label: "TIMES NOS PLAYOFFS" },
						{ value: "4", label: "VITÓRIAS PRA AVANÇAR" },
					].map((fact) => (
						<div
							key={fact.label}
							className="border-nba-silver/5 bg-nba-deep/30 rounded-lg border p-6 text-center"
						>
							<div className="font-bebas text-nba-gold text-4xl">
								{fact.value}
							</div>
							<div className="font-dm text-nba-silver/40 mt-1 text-[10px] tracking-[0.2em]">
								{fact.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export { LeagueSection };
