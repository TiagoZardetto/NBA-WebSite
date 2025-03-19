const Cards = ({ children, className, titulo, texto, image }) => {
	return (
		<div className="overflow-hidden rounded-lg bg-white shadow-md">
			{image && (
				<div className="h-40">
					<img
						src={image}
						alt={titulo}
						className="h-full w-full object-cover"
					/>
				</div>
			)}
			<div className="p-4">
				<h3 className="mb-2 text-lg font-medium">{titulo}</h3>
				<p className="text-gray-600">{texto}</p>
			</div>
			{children}
		</div>
	);
};
export { Cards };
