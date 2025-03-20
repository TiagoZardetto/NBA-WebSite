const Cards = ({ children, className, texto, image }) => {
	return (
		<div
			className={`flex h-[33rem] w-full max-w-80 flex-col justify-center overflow-hidden rounded-lg p-5 ${className}`}
		>
			{children}
		</div>
	);
};
export { Cards };
