const Button = ({ children, className }) => {
	return (
		<button
			className={`py-0.15 font-russo active:bg-outline-blue-600 w-40 cursor-pointer rounded-lg bg-[#6B0F1A] px-1 text-xl text-[#DCE0D9] shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-500 focus:outline-blue-600 ${className}`}
		>
			{children}
		</button>
	);
};
export { Button };
