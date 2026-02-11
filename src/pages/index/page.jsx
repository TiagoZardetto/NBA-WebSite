import { useState, useEffect, useRef } from "react";
import Modal from "../../components/ui/modal";
import { Hero } from "../../components/ui/hero";
import { Navbar } from "../../components/ui/navbar";
import { StatsTicker } from "../../components/ui/stats-ticker";
import { ExploreSection } from "../../components/ui/explore-section";
import { GreatestMoments } from "../../components/ui/greatest-moments";
import { Timeline } from "../../components/ui/timeline";
import { LeagueSection } from "../../components/ui/league-section";
import { Footer } from "../../components/ui/footer";

const nbaHeadshot = (id) =>
	`https://cdn.nba.com/headshots/nba/latest/1040x760/${id}.png`;

const players = [
	{
		img: nbaHeadshot(2544),
		title: "LEBRON JAMES",
		subtitle: "THE KING",
		number: "23",
		bio: "O Rei. King James é considerado um dos maiores jogadores de todos os tempos. Com 4 títulos da NBA, 4 MVPs e o recorde de maior pontuador da história, LeBron redefiniu o que significa grandeza no basquete.",
		stats: [
			{ value: "40K+", label: "PONTOS" },
			{ value: "4x", label: "CAMPEÃO" },
			{ value: "4x", label: "MVP" },
		],
	},
	{
		img: nbaHeadshot(203507),
		title: "GIANNIS ANTETOKOUNMPO",
		subtitle: "THE GREEK FREAK",
		number: "34",
		bio: "O Monstro Grego. Com 2.11m de envergadura sobre-humana, Giannis transformou-se de prospecto desconhecido em duas vezes MVP e campeão da NBA em 2021, dominando a liga com pura força e determinação.",
		stats: [
			{ value: "2x", label: "MVP" },
			{ value: "1x", label: "CAMPEÃO" },
			{ value: "1x", label: "DPOY" },
		],
	},
	{
		img: nbaHeadshot(201939),
		title: "STEPHEN CURRY",
		subtitle: "CHEF CURRY",
		number: "30",
		bio: "O maior arremessador da história da NBA. Stephen Curry revolucionou o basquete moderno e liderou o Golden State Warriors a 4 títulos, mudando para sempre como o jogo é jogado.",
		stats: [
			{ value: "3.7K+", label: "BOLAS DE 3" },
			{ value: "4x", label: "CAMPEÃO" },
			{ value: "2x", label: "MVP" },
		],
	},
	{
		img: nbaHeadshot(203999),
		title: "NIKOLA JOKIĆ",
		subtitle: "THE JOKER",
		number: "15",
		bio: "Nikola Jokić é o pivô mais habilidoso da história, com visão de armador num corpo de 2.11m, revolucionou a posição em que joga. Três vezes MVP e campeão em 2023, ele redefiniu a posição de pivô.",
		stats: [
			{ value: "3x", label: "MVP" },
			{ value: "1x", label: "CAMPEÃO" },
			{ value: "1x", label: "MVP FINAIS" },
		],
	},
	{
		img: nbaHeadshot(1629029),
		title: "LUKA DONČIĆ",
		subtitle: "THE MAGICIAN",
		number: "77",
		bio: "O mágico esloveno que conquistou a Europa antes dos 20 anos e agora domina a NBA. Luka combina visão de jogo com habilidades de pontuação que lembram os maiores de todos os tempos.",
		stats: [
			{ value: "28.7", label: "PPG" },
			{ value: "8.3", label: "RPG" },
			{ value: "8.0", label: "APG" },
		],
	},
	{
		img: nbaHeadshot(1628983),
		title: "SHAI GILGEOUS-ALEXANDER",
		subtitle: "SGA",
		number: "2",
		bio: "SGA é o líder do jovem Thunder com um jogo elegante e imparável. Seu mid-range mortal e capacidade de criar jogadas o tornaram o principal candidato a MVP da liga.",
		stats: [
			{ value: "31.1", label: "PPG" },
			{ value: "5.5", label: "RPG" },
			{ value: "6.2", label: "APG" },
		],
	},
	{
		img: nbaHeadshot(201142),
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
	{
		img: nbaHeadshot(1628369),
		title: "JAYSON TATUM",
		subtitle: "THE PROBLEM",
		number: "0",
		bio: "Jayson Tatum liderou Boston ao 18º título em 2024, consolidando-se como um dos jovens melhores jogadores da liga com seu jogo completo dos dois lados da quadra.",
		stats: [
			{ value: "26.9", label: "PPG" },
			{ value: "1x", label: "CAMPEÃO" },
			{ value: "5x", label: "ALL-STAR" },
		],
	},
	{
		img: nbaHeadshot(1630162),
		title: "ANTHONY EDWARDS",
		subtitle: "ANT-MAN",
		number: "5",
		bio: "Anthony Edwards combina atleticismo,  com trashtalk, sendo comparado aos maiores craques da história com apenas 23 anos. Enterradas impossíveis são sua assinatura.",
		stats: [
			{ value: "25.4", label: "PPG" },
			{ value: "5.8", label: "RPG" },
			{ value: "5.1", label: "APG" },
		],
	},
	{
		img: nbaHeadshot(1629630),
		title: "JA MORANT",
		subtitle: "TOO SMALL",
		number: "12",
		bio: "O rei das enterradas, Ja Morant desafia a gravidade e joga com uma intensidade que eletriza qualquer arena. Seu atleticismo é de outro planeta.",
		stats: [
			{ value: "24.7", label: "PPG" },
			{ value: "5.6", label: "RPG" },
			{ value: "8.1", label: "APG" },
		],
	},
	{
		img: nbaHeadshot(1641705),
		title: "VICTOR WEMBANYAMA",
		subtitle: "THE ALIEN",
		number: "1",
		bio: "O alienígena. Com 2.24m de altura e habilidades de um armador, Victor Wembanyama é considerado o maior prospecto da história do basquete. Ele bloqueia arremessos e acerta de três com a mesma facilidade.",
		stats: [
			{ value: "21.4", label: "PPG" },
			{ value: "10.6", label: "RPG" },
			{ value: "3.9", label: "BPG" },
		],
	},
	{
		img: nbaHeadshot(1626164),
		title: "DEVIN BOOKER",
		subtitle: "D-BOOK",
		number: "1",
		bio: "Devin Booker é um pontuador de elite com sangue frio nos momentos decisivos. Autor de 70 pontos em um jogo, ele honra o legado dos maiores scorers da história.",
		stats: [
			{ value: "70", label: "PTS RECORDE" },
			{ value: "26.4", label: "PPG" },
			{ value: "4x", label: "ALL-STAR" },
		],
	},
];

const CarouselCard = ({ player, onClick }) => (
	<div
		onClick={onClick}
		className="group relative flex h-[24rem] w-[17rem] flex-shrink-0 cursor-pointer flex-col justify-end overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.04] md:h-[30rem] md:w-[20rem]"
	>
		{/* Gradient background — visible through headshot transparency */}
		<div className="from-nba-blue/30 via-nba-deep to-nba-navy absolute inset-0 bg-gradient-to-b" />

		{/* Imagens Jogadores */}
		<img
			src={player.img}
			alt={player.title}
			className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
			loading="lazy"
		/>

		{/* Cinematic gradient overlay */}
		<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10 transition-opacity duration-500" />

		{/* Vignette edges */}
		<div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />

		{/* Marca d´agua Numero */}
		{player.number && (
			<div className="font-bebas group-hover:text-nba-gold/15 absolute top-3 right-4 text-6xl leading-none text-white/[0.04] transition-all duration-500 md:text-7xl">
				{player.number}
			</div>
		)}

		{/* Conteudo */}
		<div className="relative z-10 p-5">
			{player.subtitle && (
				<span className="font-dm text-nba-gold mb-1 inline-block translate-y-3 text-[10px] font-medium tracking-[0.2em] opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
					{player.subtitle}
				</span>
			)}

			<h3 className="font-bebas text-nba-white translate-y-3 text-2xl leading-tight tracking-wide transition-all duration-500 group-hover:translate-y-0 md:text-3xl">
				{player.title}
			</h3>

			<div className="bg-nba-red mt-2 h-[2px] w-0 transition-all delay-150 duration-500 group-hover:w-12" />

			<div className="font-dm text-nba-silver/70 mt-3 flex translate-y-3 items-center gap-2 text-[10px] tracking-wider opacity-0 transition-all delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
				<span>VER PERFIL</span>
				<span className="transition-transform duration-300 group-hover:translate-x-1">
					→
				</span>
			</div>
		</div>

		{/* Bottom accent line */}
		<div className="from-nba-red via-nba-gold to-nba-red absolute right-0 bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r transition-all delay-100 duration-500 group-hover:w-full" />
	</div>
);

const PlayersSection = ({ onSelectPlayer, isModalOpen }) => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

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

	const paused = isPaused || isModalOpen;

	return (
		<section id="players" ref={ref} className="bg-nba-deep relative py-32">
			{/* Background accents */}
			<div className="from-nba-blue/5 pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l to-transparent" />
			<div className="from-nba-red/3 pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/4 bg-gradient-to-tr to-transparent" />

			{/* Header dos Cards - Titulo */}
			<div className="mx-auto max-w-7xl px-6">
				<div
					className={`mb-20 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
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
								<span className="text-nba-gold">{players.length}</span> ESTRELAS
								EM DESTAQUE
							</div>
						</div>
					</div>
					<div className="from-nba-gold/30 via-nba-gold/10 mt-4 h-px w-full bg-gradient-to-r to-transparent" />
				</div>
			</div>

			{/* Carrosel Infinito*/}
			<div
				className={`relative overflow-hidden transition-all delay-300 duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
				onMouseLeave={() => setIsPaused(false)}
			>
				{/* Bordas Desbotadas */}
				<div className="from-nba-deep pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent md:w-40" />
				<div className="from-nba-deep pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l to-transparent md:w-40" />

				{/* Scrolling track */}
				<div
					className="flex w-max gap-5"
					style={{
						animation: "ticker 90s linear infinite",
						animationPlayState: paused ? "paused" : "running",
					}}
				>
					{[...players, ...players].map((p, i) => (
						<CarouselCard
							key={`${p.title}-${i}`}
							player={p}
							onClick={() => onSelectPlayer(p)}
						/>
					))}
				</div>
			</div>

			{/* Texto abaixo dos Players Cards */}
			<div
				className={`mt-10 text-center transition-all delay-500 duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
			>
				<span className="font-dm text-nba-white/75 text-[10px] tracking-[0.4em]">
					• CLIQUE PARA VER PERFIL DO JOGADOR •
				</span>
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
			<PlayersSection onSelectPlayer={setSelected} isModalOpen={!!selected} />
			<ExploreSection />
			<GreatestMoments />
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
