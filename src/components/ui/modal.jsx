const Modal = ({ isOpen, onClose, title, img, bio }) => {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
			onClick={onClose}
		>
			<div
				className="relative w-[90%] max-w-lg rounded-2xl bg-[#1e1e1e] p-6 text-white shadow-lg"
				onClick={(e) => e.stopPropagation()} // impede fechar clicando dentro
			>
				<button
					className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
					onClick={onClose}
				>
					[ X ]
				</button>
				<div className="mb-4 flex justify-center">
					<img
						src={img}
						alt={title}
						className="h-64 w-full rounded-xl object-cover"
					/>
				</div>
				<h2 className="font-anton text-3xl text-[#FFBF47]">{title}</h2>
				<p className="font-russo mt-3 text-lg text-gray-300">{bio}</p>
			</div>
		</div>
	);
};

export default Modal;
