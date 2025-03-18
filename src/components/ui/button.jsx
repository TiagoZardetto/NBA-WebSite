const Button = ({ children, className }) => {
	return (
		<button
			className={`m-2 rounded-xl border-1 border-red-600 bg-[#6B0F1A] p-1 text-[#DCE0D9] outline-1 ${className}`}
		>
			{children}
		</button>
	);
};

export { Button };
