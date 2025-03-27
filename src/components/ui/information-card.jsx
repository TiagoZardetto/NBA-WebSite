const Information = ({ children, className }) => {
	return (
		<button
			className={`flex h-[20rem] w-[50%] rounded-lg bg-[#6B0F1A] ${className}`}
		>
			{children}
		</button>
	);
};
export { Information };
