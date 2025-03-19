import { Outlet } from "react-router";

const IndexLayout = () => {
	return (
		<>
			<div className="flex h-screen w-screen flex-col bg-[#17408b]">
				<Outlet />
			</div>
		</>
	);
};

export { IndexLayout };
