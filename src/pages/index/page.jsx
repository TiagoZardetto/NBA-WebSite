import { Button } from "../../components/ui/button";
import { Cards } from "../../components/ui/cards";
import { Information } from "../../components/ui/information-card";

const IndexPage = () => {
	return (
		<div className="flex size-full flex-col justify-start gap-4 p-4">
			<div className="my-4 flex justify-center">
				<div className="grid w-full max-w-[80%] grid-flow-col grid-cols-3 justify-items-center">
					<Button>HOME</Button>
					<Button>A LIGA</Button>
					<Button>JOGADORES</Button>
				</div>
			</div>
			<div className="grid-col-1 grid w-full max-w-[90%] grid-flow-row justify-items-center gap-2 place-self-center pt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<Cards className="group relative hover:brightness-100">
					<div className="absolute inset-0 bg-[url(/images/lebron-3.jpg)] bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"></div>
					<div className="font-exo z-10 text-end text-lg text-[#FFBF47] transition-all duration-500 group-hover:hue-rotate-15">
						The King
					</div>
				</Cards>
				<Cards className="group relative hover:brightness-100">
					<div className="absolute inset-0 bg-[url(/images/doncic.webp)] bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"></div>
					<div className="font-exo z-10 text-end text-lg text-[#FFBF47] transition-all duration-500 group-hover:hue-rotate-15">
						Magician
					</div>
				</Cards>
				<Cards className="group relative hover:brightness-100">
					<div className="absolute inset-0 bg-[url(/images/curryteste.webp)] bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"></div>
					<div className="font-exo z-10 text-end text-lg text-[#FFBF47] transition-all duration-500 group-hover:hue-rotate-15">
						Chef Curry
					</div>
				</Cards>
				<Cards className="group relative hover:brightness-100">
					<div className="absolute inset-0 bg-[url(/images/durant.jpg)] bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"></div>
					<div className="font-exo z-10 text-end text-lg text-[#FFBF47] transition-all duration-500 group-hover:hue-rotate-15">
						Money Sniper
					</div>
				</Cards>
			</div>
			<div className="mt-15 flex justify-center p-4">
				<div className="font-anton text-6xl text-[#DCE0D9]">
					EXPLORE O MUNDO DA LIGA
					<p className="font-russo pt-2 text-lg text-[#DCE0D9]">
						Fique por dentro do mundo da liga
					</p>
				</div>
			</div>
			<div className="my-4 flex justify-center pb-4">
				<div className="grid w-full grid-flow-col grid-cols-3 justify-items-center">
					<Information className="font-exo text-md text-[#DCE0D9]">
						<button className="font-anton">show de bola</button>
					</Information>
					<Information className="font-exo text-md text-[#DCE0D9]">
						<button>show de bola</button>
					</Information>
					<Information className="font-exo text-md text-[#DCE0D9]">
						<button>show de bola</button>
					</Information>
				</div>
			</div>
		</div>
	);
};

export { IndexPage };
