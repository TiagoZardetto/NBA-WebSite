import { Button } from "../../components/ui/button";
import { Cards } from "../../components/ui/cards";

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
			<div className="grid w-full max-w-[80%] grid-flow-row grid-cols-3 justify-items-center gap-3 place-self-center pt-8">
				<Cards className="relative">
					<div className="absolute inset-0 bg-[url(/images/lebronteste.webp)] bg-cover bg-center brightness-[0.4] transition-all duration-400 ease-out hover:scale-125 hover:blur-[1px]"></div>
					<div className="font-exo z-10 text-end text-sm text-[#FFBF47] transition-all duration-500 hover:hue-rotate-15">
						dqwdqwdqwdwq
					</div>
				</Cards>
				<Cards className="relative">
					<div className="absolute inset-0 bg-[url(/images/curryteste.webp)] bg-cover bg-center brightness-[0.4] transition-all duration-400 ease-out hover:scale-125 hover:blur-[1px]"></div>
					<div className="font-exo z-10 text-end text-sm text-[#FFBF47] transition-all duration-500 hover:hue-rotate-15">
						dqwdqwdqwdwq
					</div>
				</Cards>
				<Cards className="relative">
					<div className="absolute inset-0 bg-[url(/images/durant.jpg)] bg-cover bg-center brightness-[0.4] transition-all duration-400 ease-out hover:scale-125 hover:blur-[1px]"></div>
					<div className="font-exo z-10 text-end text-sm text-[#FFBF47] transition-all duration-500 hover:hue-rotate-15">
						dqwdqwdqwdwq
					</div>
				</Cards>
			</div>
		</div>
	);
};

export { IndexPage };
