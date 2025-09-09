const Cards = ({ img, title, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="group relative flex h-[46rem] w-full max-w-90 cursor-pointer flex-col justify-end overflow-hidden rounded-lg p-5 shadow-inner shadow-black/30"
		>
			<div
				className="absolute inset-0 bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<div className="font-exo z-10 translate-y-10 text-end text-xl text-[#FFBF47] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
				{title}
			</div>
		</div>
	);
};
export { Cards };
