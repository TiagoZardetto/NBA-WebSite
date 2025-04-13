import { Outlet } from "react-router";

const IndexLayout = () => {
	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden bg-[#051e4c]">
				<Outlet />
			</div>
		</>
	);
};

export { IndexLayout };
