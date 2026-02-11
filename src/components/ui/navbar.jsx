import { useState, useEffect } from "react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: "INÍCIO", href: "#hero" },
		{ label: "JOGADORES", href: "#players" },
		{ label: "MOMENTOS", href: "#moments" },
		{ label: "HISTÓRIA", href: "#history" },
		{ label: "A LIGA", href: "#league" },
	];

	const scrollTo = (href) => {
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: "smooth" });
		setMenuOpen(false);
	};

	return (
		<nav
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
				scrolled
					? "bg-nba-deep/90 shadow-lg shadow-black/30 backdrop-blur-xl"
					: "bg-transparent"
			}`}
		>
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				{/* Logo */}
				<button
					onClick={() => scrollTo("#hero")}
					className="group flex cursor-pointer items-center gap-3"
				>
					<div className="relative flex h-10 w-10 items-center justify-center">
						<img
							src="/images/nba-6.svg"
							alt="NBA"
							className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
						/>
					</div>
					<span className="font-bebas text-nba-white text-2xl tracking-widest">
						NBA
						<span className="text-nba-gold"> JOURNEY</span>
					</span>
				</button>

				{/* Desktop Links */}
				<div className="hidden items-center gap-1 md:flex">
					{navLinks.map((link) => (
						<button
							key={link.href}
							onClick={() => scrollTo(link.href)}
							className="font-dm group text-nba-silver hover:text-nba-gold relative cursor-pointer border-none bg-transparent px-5 py-2 text-sm font-medium tracking-wider transition-colors duration-300"
						>
							{link.label}
							<span className="bg-nba-gold absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-3/4" />
						</button>
					))}
				</div>

				{/* Mobile Toggle */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 md:hidden"
					aria-label="Menu"
				>
					<span
						className={`bg-nba-gold block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
					/>
					<span
						className={`bg-nba-gold block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "scale-0 opacity-0" : ""}`}
					/>
					<span
						className={`bg-nba-gold block h-0.5 w-6 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`border-nba-gold/10 bg-nba-deep/95 overflow-hidden border-t backdrop-blur-xl transition-all duration-500 md:hidden ${
					menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="flex flex-col px-6 py-4">
					{navLinks.map((link, i) => (
						<button
							key={link.href}
							onClick={() => scrollTo(link.href)}
							className="font-dm text-nba-silver hover:text-nba-gold cursor-pointer border-none bg-transparent py-3 text-left text-base tracking-wider transition-colors"
							style={{ animationDelay: `${i * 0.05}s` }}
						>
							{link.label}
						</button>
					))}
				</div>
			</div>
		</nav>
	);
};

export { Navbar };
