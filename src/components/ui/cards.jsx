const Cards = ({ children, className }) => {
	return (
		<div
			className={`flex h-[46rem] w-full max-w-90 flex-col justify-end overflow-hidden rounded-lg p-5 ${className}`}
		>
			{children}
		</div>
	);
};
export { Cards };
