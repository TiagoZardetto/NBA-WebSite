import { useState, useEffect, useRef } from "react";
import { Cards } from "../../components/ui/cards";
import Modal from "../../components/ui/modal";
import { Hero } from "../../components/ui/hero";
import { Navbar } from "../../components/ui/navbar";
import { StatsTicker } from "../../components/ui/stats-ticker";
import { ExploreSection } from "../../components/ui/explore-section";
import { Timeline } from "../../components/ui/timeline";
import { LeagueSection } from "../../components/ui/league-section";
import { Footer } from "../../components/ui/footer";

const players = [
	{
		img: "/images/lebron-3.jpg",
		title: "LEBRON JAMES",
		subtitle: "THE KING",
		number: "23",
		bio: "O Rei. LeBron Raymone James é considerado um dos maiores jogadores de todos os tempos. Com 4 títulos da NBA, 4 MVPs e o recorde de maior pontuador da história, LeBron redefiniu o que significa grandeza no basquete.",
		stats: [
			{ value: "40K+", label: "PONTOS" },
			{ value: "4x", label: "CAMPEÃO" },
			{ value: "4x", label: "MVP" },
		],
	},
	{
		img: "/images/doncic-teste.webp",
		title: "LUKA DONČIĆ",
		subtitle: "THE MAGICIAN",
		number: "77",
		bio: "O mágico esloveno que conquistou a Europa antes dos 20 anos e agora domina a NBA. Luka combina visão de jogo excepcional com habilidade de pontuação que lembra os maiores de todos os tempos.",
		stats: [
			{ value: "28.7", label: "PPG" },
			{ value: "8.3", label: "RPG" },
			{ value: "8.0", label: "APG" },
		],
	},
	{
		img: "/images/curry-teste1.jpg",
		title: "STEPHEN CURRY",
		subtitle: "CHEF CURRY",
		number: "30",
		bio: "O maior arremessador de três pontos da história da NBA. Stephen Curry revolucionou o basquete moderno e liderou o Golden State Warriors a 4 títulos, mudando para sempre como o jogo é jogado.",
		stats: [
			{ value: "3.7K+", label: "BOLAS DE 3" },
			{ value: "4x", label: "CAMPEÃO" },
			{ value: "2x", label: "MVP" },
		],
	},
	{
		img: "/images/durant-teste1.jpg",
		title: "KEVIN DURANT",
		subtitle: "THE SLIM REAPER",
		number: "35",
		bio: "O pontuador mais puro que o basquete já viu. Com 2.13m de altura e habilidade de armador, Kevin Durant é virtualmente indefensável. Slim Reaper, Easy Money Sniper — as lendas têm muitos nomes.",
		stats: [
			{ value: "27.3", label: "PPG CARREIRA" },
			{ value: "2x", label: "CAMPEÃO" },
			{ value: "2x", label: "MVP FINAIS" },
		],
	},
];

const PlayersSection = ({ onSelectPlayer }) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold: 0.1 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section id="players" ref={ref} className="bg-nba-deep relative py-32">
			{/* Background accent */}
			<div className="from-nba-blue/5 pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l to-transparent" />

			<div className="mx-auto max-w-7xl px-6">
				{/* Section header */}
				<div
					className={`mb-16 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
				>
					<div className="flex items-end justify-between">
						<div>
							<span className="font-dm text-nba-red mb-4 inline-block text-xs tracking-[0.3em]">
								DESTAQUES
							</span>
							<h2 className="font-bebas text-nba-white text-7xl tracking-tight md:text-8xl">
								JOGADORES
							</h2>
						</div>
						<div className="hidden md:block">
							<div className="font-dm text-nba-silver/30 text-right text-sm">
								<span className="text-nba-gold">4</span> ESTRELAS EM DESTAQUE
							</div>
						</div>
					</div>
					<div className="from-nba-gold/30 via-nba-gold/10 mt-4 h-px w-full bg-gradient-to-r to-transparent" />
				</div>

				{/* Player cards grid */}
				<div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{players.map((p, i) => (
						<div
							key={i}
							className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
							style={{ transitionDelay: `${200 + i * 150}ms` }}
						>
							<Cards
								img={p.img}
								title={p.title}
								subtitle={p.subtitle}
								number={p.number}
								onClick={() => onSelectPlayer(p)}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const IndexPage = () => {
	const [selected, setSelected] = useState(null);

	return (
		<div className="flex w-full flex-col">
			<Navbar />
			<Hero />
			<StatsTicker />
			<PlayersSection onSelectPlayer={setSelected} />
			<ExploreSection />
			<Timeline />
			<LeagueSection />
			<Footer />

			<Modal
				isOpen={!!selected}
				onClose={() => setSelected(null)}
				title={selected?.title}
				subtitle={selected?.subtitle}
				img={selected?.img}
				bio={selected?.bio}
				stats={selected?.stats}
			/>
		</div>
	);
};

export { IndexPage };
