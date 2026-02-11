import { useEffect, useRef, useState } from "react";

const moments = [
	{
		id: "VkGT5XMEetQ",
		title: "THE LAST SHOT",
		description:
			"O arremesso final de Jordan nas Finais de 1998 selou seu sexto título e encerrou a era mais dominante da história da NBA.",
		year: "1998",
		player: "MICHAEL JORDAN",
	},
	{
		id: "wV9CMVdY3dM",
		title: "81 POINTS",
		description:
			"Kobe Bryant marcou 81 pontos contra o Toronto Raptors, a segunda maior pontuação individual em um único jogo na história da NBA.",
		year: "2006",
		player: "KOBE BRYANT",
	},
	{
		id: "wgVOgGLtPtc",
		title: "THE BLOCK",
		description:
			"O bloqueio de LeBron sobre Iguodala no Game 7 das Finais de 2016 ajudou Cleveland a conquistar seu primeiro título.",
		year: "2016",
		player: "LEBRON JAMES",
	},
	{
		id: "GEMVGHoenXM",
		title: "BANG! BANG!",
		description:
			"O arremesso de três pontos de Curry no overtime contra o Oklahoma City Thunder arrancou o icônico 'Bang! Bang!' de Mike Breen.",
		year: "2016",
		player: "STEPHEN CURRY",
	},
	{
		id: "FVYPsEDWcXs",
		title: "RAY ALLEN'S MIRACLE",
		description:
			"O arremesso de três de Ray Allen no canto da quadra no Game 6 das Finais de 2013 salvou o Miami Heat da eliminação.",
		year: "2013",
		player: "RAY ALLEN",
	},
	{
		id: "ChT3ewZXTfM",
		title: "THE BUZZER BEATER",
		description:
			"O arremesso de Kawhi que quicou quatro vezes no aro antes de entrar, eliminando os 76ers nas semifinais de 2019.",
		year: "2019",
		player: "KAWHI LEONARD",
	},
	{
		id: "XMrPjl-927Q",
		title: "DUNK OF DEATH",
		description:
			"Vince Carter saltou sobre o francês de 2.18m Frédéric Weis nas Olimpíadas de 2000, criando a enterrada mais icônica da história.",
		year: "2000",
		player: "VINCE CARTER",
	},
	{
		id: "22O2lApCBBs",
		title: "THE DREAM SHAKE",
		description:
			"Os movimentos de Hakeem Olajuwon nas Finais de 1995 contra o Orlando Magic mostraram o footwork mais letal da história.",
		year: "1995",
		player: "HAKEEM OLAJUWON",
	},
];

const MomentCard = ({ moment, index, visible, onClick }) => (
	<div
		onClick={onClick}
		className={`group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ${
			visible
				? "translate-y-0 opacity-100"
				: "translate-y-8 opacity-0"
		}`}
		style={{ transitionDelay: `${200 + index * 100}ms` }}
	>
		{/* Thumbnail */}
		<div className="relative aspect-video overflow-hidden">
			<img
				src={`https://img.youtube.com/vi/${moment.id}/maxresdefault.jpg`}
				alt={`${moment.player} — ${moment.title}`}
				className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
				loading="lazy"
				onError={(e) => {
					if (!e.target.dataset.fallback) {
						e.target.dataset.fallback = "true";
						e.target.src = `https://img.youtube.com/vi/${moment.id}/hqdefault.jpg`;
					}
				}}
			/>

			{/* Cinematic gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500" />

			{/* Vignette edges */}
			<div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />

			{/* Year watermark */}
			<div className="font-bebas group-hover:text-nba-gold/15 absolute top-3 right-4 text-5xl leading-none text-white/[0.04] transition-all duration-500 md:text-6xl">
				{moment.year}
			</div>

			{/* Play button */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="border-nba-gold/60 bg-nba-gold/10 flex h-14 w-14 items-center justify-center rounded-full border-2 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 md:h-16 md:w-16">
					<svg
						className="text-nba-gold ml-1 h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M8 5v14l11-7z" />
					</svg>
				</div>
			</div>

			{/* Content overlay */}
			<div className="absolute right-0 bottom-0 left-0 p-5">
				<span className="font-dm text-nba-gold mb-1 inline-block translate-y-3 text-[10px] font-medium tracking-[0.2em] opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
					{moment.player}
				</span>

				<h3 className="font-bebas text-nba-white translate-y-3 text-xl leading-tight tracking-wide transition-all duration-500 group-hover:translate-y-0 md:text-2xl">
					{moment.title}
				</h3>

				<div className="bg-nba-red mt-2 h-[2px] w-0 transition-all delay-150 duration-500 group-hover:w-12" />

				<div className="font-dm text-nba-silver/70 mt-3 flex translate-y-3 items-center gap-2 text-[10px] tracking-wider opacity-0 transition-all delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
					<span>ASSISTIR</span>
					<span className="transition-transform duration-300 group-hover:translate-x-1">
						→
					</span>
				</div>
			</div>
		</div>

		{/* Bottom accent line */}
		<div className="from-nba-red via-nba-gold to-nba-red absolute right-0 bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r transition-all delay-100 duration-500 group-hover:w-full" />
	</div>
);

const VideoModal = ({ moment, onClose }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		requestAnimationFrame(() => setShow(true));
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	const handleClose = () => {
		setShow(false);
		setTimeout(onClose, 300);
	};

	return (
		<div
			className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
				show
					? "bg-black/90 backdrop-blur-md"
					: "bg-transparent backdrop-blur-none"
			}`}
			onClick={handleClose}
		>
			<div
				className={`relative w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl shadow-black/50 transition-all duration-500 ${
					show
						? "translate-y-0 scale-100 opacity-100"
						: "translate-y-8 scale-95 opacity-0"
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Top accent bar */}
				<div className="from-nba-red via-nba-gold to-nba-blue h-1 w-full bg-gradient-to-r" />

				{/* Close button */}
				<button
					className="border-nba-silver/20 bg-nba-deep/80 text-nba-silver hover:border-nba-gold hover:text-nba-gold absolute top-5 right-5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all duration-300"
					onClick={handleClose}
				>
					✕
				</button>

				{/* 16:9 Video embed */}
				<div
					className="relative w-full bg-black"
					style={{ paddingBottom: "56.25%" }}
				>
					<iframe
						className="absolute inset-0 h-full w-full"
						src={`https://www.youtube.com/embed/${moment.id}?autoplay=1&rel=0`}
						title={`${moment.player} — ${moment.title}`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>

				{/* Bottom info bar */}
				<div className="bg-nba-deep flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<div className="flex items-center gap-3">
							<h3 className="font-bebas text-nba-white text-2xl tracking-wide">
								{moment.title}
							</h3>
							<span className="font-dm text-nba-gold text-xs tracking-[0.2em]">
								{moment.year}
							</span>
						</div>
						<span className="font-dm text-nba-silver/50 text-xs tracking-wider">
							{moment.player}
						</span>
					</div>
					<p className="font-dm text-nba-silver/40 max-w-md text-xs leading-relaxed">
						{moment.description}
					</p>
				</div>
			</div>
		</div>
	);
};

const GreatestMoments = () => {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const [selected, setSelected] = useState(null);

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
		<section id="moments" ref={ref} className="bg-nba-deep relative py-32">
			{/* Background accents */}
			<div className="from-nba-red/5 pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r to-transparent" />
			<div className="from-nba-blue/5 pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/4 bg-gradient-to-tl to-transparent" />

			<div className="mx-auto max-w-7xl px-6">
				{/* Header */}
				<div
					className={`mb-20 transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
				>
					<div className="flex items-end justify-between">
						<div>
							<span className="font-dm text-nba-red mb-4 inline-block text-xs tracking-[0.3em]">
								MOMENTOS ICÔNICOS
							</span>
							<h2 className="font-bebas text-nba-white text-7xl tracking-tight md:text-8xl">
								GRANDES MOMENTOS
							</h2>
						</div>
						<div className="hidden md:block">
							<div className="font-dm text-nba-silver/30 text-right text-sm">
								<span className="text-nba-gold">{moments.length}</span>{" "}
								MOMENTOS LENDÁRIOS
							</div>
						</div>
					</div>
					<div className="from-nba-gold/30 via-nba-gold/10 mt-4 h-px w-full bg-gradient-to-r to-transparent" />
				</div>

				{/* Cards grid */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{moments.map((moment, i) => (
						<MomentCard
							key={moment.id}
							moment={moment}
							index={i}
							visible={visible}
							onClick={() => setSelected(moment)}
						/>
					))}
				</div>

				{/* Bottom text */}
				<div
					className={`mt-10 text-center transition-all delay-500 duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
				>
					<span className="font-dm text-nba-white/75 text-[10px] tracking-[0.4em]">
						• CLIQUE PARA ASSISTIR O MOMENTO •
					</span>
				</div>
			</div>

			{/* Video Modal */}
			{selected && (
				<VideoModal
					moment={selected}
					onClose={() => setSelected(null)}
				/>
			)}
		</section>
	);
};

export { GreatestMoments };
