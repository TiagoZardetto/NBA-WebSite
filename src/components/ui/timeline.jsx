import { useEffect, useRef, useState } from "react";

const milestones = [
	{
		year: "1946",
		title: "O Nascimento",
		text: "A Basketball Association of America (BAA) é fundada em Nova York, plantando a semente do que se tornaria a NBA.",
	},
	{
		year: "1949",
		title: "A Fusão",
		text: "BAA e NBL se fundem, criando oficialmente a National Basketball Association com 17 franquias.",
	},
	{
		year: "1954",
		title: "Relógio de 24s",
		text: "A criação do relógio de 24 segundos revoluciona o jogo, tornando-o mais rápido e emocionante para os fãs.",
	},
	{
		year: "1962",
		title: "100 Pontos",
		text: "Wilt Chamberlain anota 100 pontos em um único jogo pelos Philadelphia Warriors — recorde que permanece até hoje.",
	},
	{
		year: "1979",
		title: "Magic & Bird",
		text: "A rivalidade entre Magic Johnson e Larry Bird começa, salvando a NBA de uma crise de audiência.",
	},
	{
		year: "1984",
		title: "A Era Jordan",
		text: "Michael Jordan é draftado pelo Chicago Bulls, dando início à maior carreira individual do basquete.",
	},
	{
		year: "1992",
		title: "Dream Team",
		text: "O Dream Team domina as Olimpíadas de Barcelona, apresentando a NBA ao mundo inteiro.",
	},
	{
		year: "2003",
		title: "LeBron Chega",
		text: "LeBron James, com apenas 18 anos, é a primeira escolha do draft e inicia sua jornada para se tornar lenda.",
	},
	{
		year: "2016",
		title: "O Impossível",
		text: "Cleveland Cavaliers revertem 3-1 nas Finais contra o Warriors com 73 vitórias, o maior retorno da história.",
	},
	{
		year: "2024",
		title: "Nova Era",
		text: "Uma nova geração de estrelas como Luka Dončić, Wemby e Shai lidera a NBA para o futuro.",
	},
];

const TimelineItem = ({ milestone, index }) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold: 0.3 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const isLeft = index % 2 === 0;

	return (
		<div ref={ref} className="relative flex min-h-[180px] items-center">
			{/* Center line dot */}
			<div className="absolute left-1/2 z-10 -translate-x-1/2">
				<div
					className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-700 ${
						visible
							? "border-nba-gold bg-nba-deep shadow-[0_0_20px_rgba(253,185,39,0.3)]"
							: "border-nba-silver/20 bg-nba-deep"
					}`}
				>
					<span
						className={`font-bebas text-sm transition-colors duration-700 ${visible ? "text-nba-gold" : "text-nba-silver/40"}`}
					>
						{milestone.year}
					</span>
				</div>
			</div>

			{/* Content card */}
			<div
				className={`w-[calc(50%-3rem)] transition-all duration-700 ${
					isLeft ? "pr-4 text-right" : "ml-auto pl-4 text-left"
				} ${visible ? "translate-x-0 opacity-100" : isLeft ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0"}`}
			>
				<h3 className="font-bebas text-nba-gold text-2xl tracking-wide">
					{milestone.title}
				</h3>
				<p className="font-dm text-nba-silver/70 mt-2 text-sm leading-relaxed">
					{milestone.text}
				</p>
			</div>
		</div>
	);
};

const Timeline = () => {
	return (
		<section id="history" className="bg-nba-deep relative py-32">
			{/* Section header */}
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-20 text-center">
					<span className="font-dm text-nba-red mb-4 inline-block text-xs tracking-[0.3em]">
						DESDE 1946
					</span>
					<h2 className="font-bebas text-nba-white text-7xl tracking-tight md:text-8xl">
						HISTÓRIA
					</h2>
					<div className="via-nba-gold mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Center line */}
					<div className="from-nba-gold/40 via-nba-gold/20 absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b to-transparent" />

					<div className="flex flex-col gap-12">
						{milestones.map((m, i) => (
							<TimelineItem key={m.year} milestone={m} index={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export { Timeline };
