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

	const conferences = [
		{
			name: "CONFERÊNCIA LESTE",
			teams: [
				"Boston Celtics",
				"Milwaukee Bucks",
				"Philadelphia 76ers",
				"Miami Heat",
				"New York Knicks",
				"Cleveland Cavaliers",
				"Brooklyn Nets",
				"Atlanta Hawks",
			],
		},
		{
			name: "CONFERÊNCIA OESTE",
			teams: [
				"Denver Nuggets",
				"Los Angeles Lakers",
				"Golden State Warriors",
				"Phoenix Suns",
				"Dallas Mavericks",
				"Oklahoma City Thunder",
				"Minnesota Timberwolves",
				"Sacramento Kings",
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
										key={team}
										className="font-dm group border-nba-silver/5 bg-nba-deep/50 text-nba-silver/60 hover:border-nba-gold/20 hover:text-nba-white flex items-center gap-3 rounded-md border px-4 py-3 text-sm transition-all duration-300"
										style={{
											transitionDelay: `${400 + ti * 50}ms`,
										}}
									>
										<span className="bg-nba-red group-hover:bg-nba-gold h-1.5 w-1.5 rounded-full transition-colors duration-300" />
										{team}
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
