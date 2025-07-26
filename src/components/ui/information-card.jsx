const Information = ({ children, className }) => {
	return (
		<div
			className={`font-exo flex h-[20rem] w-[70%] justify-around rounded-lg bg-[#6B0F1A] hover:bg-blue-700 hover:shadow-md hover:shadow-blue-700 ${className}`}
		>
			{children}
		</div>
	);
};
export { Information };
