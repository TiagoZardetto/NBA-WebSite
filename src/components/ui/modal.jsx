import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, title, subtitle, img, bio, stats }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			requestAnimationFrame(() => setShow(true));
		} else {
			setShow(false);
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleClose = () => {
		setShow(false);
		setTimeout(onClose, 300);
	};

	return (
		<div
			className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
				show ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
			}`}
			onClick={handleClose}
		>
			<div
				className={`bg-nba-deep relative w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl shadow-black/50 transition-all duration-500 ${
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

				<div className="flex flex-col md:flex-row">
					{/* Image side */}
					<div className="relative h-64 w-full flex-shrink-0 md:h-auto md:w-2/5">
						<img src={img} alt={title} className="h-full w-full object-cover" />
						<div className="to-nba-deep/90 absolute inset-0 bg-gradient-to-r from-transparent max-md:hidden" />
						<div className="from-nba-deep absolute inset-0 bg-gradient-to-t to-transparent md:hidden" />
					</div>

					{/* Content side */}
					<div className="relative flex-1 p-8">
						{subtitle && (
							<span className="font-dm text-nba-red mb-2 inline-block text-xs font-medium tracking-[0.2em]">
								{subtitle}
							</span>
						)}
						<h2 className="font-bebas text-nba-gold text-5xl tracking-wide">
							{title}
						</h2>

						<div className="bg-nba-gold/30 my-4 h-px w-12" />

						<p className="font-dm text-nba-silver/70 text-base leading-relaxed">
							{bio}
						</p>

						{/* Stats grid */}
						{stats && stats.length > 0 && (
							<div className="mt-6 grid grid-cols-3 gap-4">
								{stats.map((stat) => (
									<div
										key={stat.label}
										className="border-nba-silver/10 bg-nba-navy/50 rounded-lg border p-3 text-center"
									>
										<div className="font-bebas text-nba-gold text-2xl">
											{stat.value}
										</div>
										<div className="font-dm text-nba-silver/50 text-[10px] tracking-wider">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
