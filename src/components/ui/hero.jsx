import { useEffect, useState } from "react";

const Hero = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoaded(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section
			id="hero"
			className="grain-overlay diagonal-lines bg-nba-deep relative flex min-h-screen items-center justify-center overflow-hidden"
		>
			{/* Ambient background shapes */}
			<div className="pointer-events-none absolute inset-0">
				<div className="animate-float bg-nba-blue/10 absolute top-20 left-[10%] h-96 w-96 rounded-full blur-[120px]" />
				<div
					className="animate-float bg-nba-red/8 absolute right-[15%] bottom-32 h-80 w-80 rounded-full blur-[100px]"
					style={{ animationDelay: "2s" }}
				/>
				<div
					className="animate-float bg-nba-gold/5 absolute top-1/3 left-1/2 h-64 w-64 rounded-full blur-[80px]"
					style={{ animationDelay: "4s" }}
				/>
			</div>

			{/* Court lines decoration */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.04]">
				<div className="border-nba-gold absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2" />
				<div className="bg-nba-gold absolute top-0 left-1/2 h-full w-px" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
				{/* Overline */}
				<div
					className={`transition-all duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
				>
					<span className="font-dm border-nba-gold/30 text-nba-gold inline-block rounded-full border px-5 py-1.5 text-xs font-medium tracking-[0.3em]">
						TEMPORADA 2024-2025
					</span>
				</div>

				{/* Main Heading */}
				<h1
					className={`font-bebas mt-8 text-[clamp(4rem,12vw,11rem)] leading-[0.85] tracking-tight transition-all delay-200 duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<span className="text-nba-white block">ONDE LENDAS</span>
					<span className="text-nba-gold relative block">
						NASCEM
						<svg
							className="absolute -bottom-2 left-0 w-full"
							viewBox="0 0 300 12"
							fill="none"
							preserveAspectRatio="none"
						>
							<path
								d="M0 8 Q75 0 150 6 Q225 12 300 4"
								stroke="#c8102e"
								strokeWidth="3"
								strokeLinecap="round"
								className={`transition-all delay-700 duration-1000 ${loaded ? "[stroke-dashoffset:0]" : "[stroke-dashoffset:600]"}`}
								strokeDasharray="600"
							/>
						</svg>
					</span>
				</h1>

				{/* Subtext */}
				<p
					className={`font-dm text-nba-silver mx-auto mt-10 max-w-xl text-lg leading-relaxed font-light transition-all delay-500 duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
				>
					Explore a história, os jogadores lendários e a paixão que transformou
					o basquete na maior liga do mundo.
				</p>

				{/* CTA Buttons */}
				<div
					className={`mt-12 flex flex-wrap items-center justify-center gap-4 transition-all delay-700 duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
				>
					<button
						onClick={() =>
							document
								.querySelector("#players")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="font-dm group border-nba-gold bg-nba-gold text-nba-deep hover:text-nba-gold relative cursor-pointer overflow-hidden rounded-sm border-2 px-8 py-3.5 text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-transparent"
					>
						EXPLORAR JOGADORES
					</button>
					<button
						onClick={() =>
							document
								.querySelector("#history")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="font-dm border-nba-silver/30 text-nba-silver hover:border-nba-gold/50 hover:text-nba-gold cursor-pointer rounded-sm border bg-transparent px-8 py-3.5 text-sm font-medium tracking-wider transition-all duration-300"
					>
						HISTÓRIA DA NBA
					</button>
				</div>

				{/* Stats row */}
				<div
					className={`border-nba-silver/10 mt-20 grid grid-cols-3 gap-8 border-t pt-10 transition-all delay-1000 duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
				>
					{[
						{ value: "78", label: "TEMPORADAS" },
						{ value: "30", label: "FRANQUIAS" },
						{ value: "∞", label: "LENDAS" },
					].map((stat) => (
						<div key={stat.label} className="text-center">
							<div className="font-bebas text-nba-gold text-5xl md:text-6xl">
								{stat.value}
							</div>
							<div className="font-dm text-nba-silver/60 mt-1 text-xs tracking-[0.25em]">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="animate-bounce-subtle absolute bottom-8 left-1/2 -translate-x-1/2">
				<div className="flex flex-col items-center gap-2">
					<span className="font-dm text-nba-silver/40 text-[10px] tracking-[0.3em]">
						SCROLL
					</span>
					<div className="from-nba-gold/50 h-10 w-px bg-gradient-to-b to-transparent" />
				</div>
			</div>
		</section>
	);
};

export { Hero };
