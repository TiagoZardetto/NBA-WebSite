import { useEffect, useRef, useState } from "react";
import { Information } from "./information-card";

const ExploreSection = () => {
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

	const categories = [
		{
			icon: "🏆",
			title: "Maiores Campeões",
			description:
				"Conheça as dinastias que dominaram a liga e definiram eras inteiras do basquete profissional.",
		},
		{
			icon: "🔥",
			title: "Finais Históricas",
			description:
				"Reviva os confrontos mais épicos das Finais da NBA que ficaram marcados na história.",
		},
		{
			icon: "⭐",
			title: "Jogadores Lendários",
			description:
				"De Jordan a LeBron, os atletas que transcenderam o esporte e se tornaram ícones globais.",
		},
		{
			icon: "📊",
			title: "Recordes da NBA",
			description:
				"Os números mais impressionantes já registrados nas quadras da maior liga do mundo.",
		},
	];

	return (
		<section ref={ref} className="bg-nba-deep relative py-32">
			{/* Decorative line */}
			<div className="from-nba-gold/30 absolute top-0 left-1/2 h-20 w-px -translate-x-1/2 bg-gradient-to-b to-transparent" />

			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div
					className={`mb-16 text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
				>
					<span className="font-dm text-nba-gold mb-4 inline-block text-xs tracking-[0.3em]">
						DESCUBRA MAIS
					</span>
					<h2 className="font-bebas text-nba-white text-7xl tracking-tight md:text-8xl">
						EXPLORE O MUNDO
						<br />
						<span className="text-outline">DA LIGA</span>
					</h2>
					<p className="font-dm text-nba-silver/50 mx-auto mt-6 max-w-lg text-base">
						Fique por dentro do universo do basquete profissional. Histórias,
						recordes e muito mais.
					</p>
				</div>

				{/* Cards grid */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{categories.map((cat, i) => (
						<div
							key={cat.title}
							className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
							style={{ transitionDelay: `${200 + i * 100}ms` }}
						>
							<Information
								icon={cat.icon}
								title={cat.title}
								description={cat.description}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export { ExploreSection };
