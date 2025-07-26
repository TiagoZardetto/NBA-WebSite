import { Button } from "../../components/ui/button";
import { Cards } from "../../components/ui/cards";
import { Information } from "../../components/ui/information-card";

const IndexPage = () => {
	return (
		<div className="flex size-full flex-col justify-start gap-4 p-4">
			<div className="my-4 flex justify-center">
				<div className="grid w-full max-w-[80%] grid-flow-col grid-cols-4 justify-items-center p-2">
					<Button>HISTÓRIA</Button>
					<Button>A LIGA</Button>
					<Button>JOGADORES</Button>
					<Button>PORTFÓLIO</Button>
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
					<div className="absolute inset-0 bg-[url(/images/doncic-teste.webp)] bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"></div>
					<div className="font-exo z-10 text-end text-lg text-[#FFBF47] transition-all duration-500 group-hover:hue-rotate-15">
						Magician
					</div>
				</Cards>
				<Cards className="group relative hover:brightness-100">
					<div className="absolute inset-0 bg-[url(/images/curry-teste1.jpg)] bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"></div>
					<div className="font-exo z-10 text-end text-lg text-[#FFBF47] transition-all duration-500 group-hover:hue-rotate-15">
						Chef Curry
					</div>
				</Cards>
				<Cards className="group relative hover:brightness-100">
					<div className="absolute inset-0 bg-[url(/images/durant-teste1.jpg)] bg-cover bg-center brightness-[0.3] transition-all duration-400 ease-out group-hover:scale-125 group-hover:brightness-[0.6]"></div>
					<div className="font-exo z-10 text-end text-lg text-[#FFBF47] transition-all duration-500 group-hover:hue-rotate-15">
						Money Sniper
					</div>
				</Cards>
			</div>
			<div className="mt-30 flex justify-center p-4">
				<div className="font-anton justify-items-center text-7xl text-[#DCE0D9]">
					EXPLORE O MUNDO DA LIGA
					<p className="font-russo pt-2 text-xl text-[#DCE0D9]">
						Fique por dentro do mundo do basquete
					</p>
				</div>
			</div>
			<div className="flex justify-center p-4 pb-4">
				<div className="grid w-full grid-flow-col grid-cols-4 justify-items-center gap-4">
					<Information className="bg-[url(/images/durant-teste1.jpg)] bg-cover bg-center p-4 text-xl text-[#DCE0D9] transition-all duration-400 ease-out">
						<p>Maiores Campeões</p>
					</Information>
					<Information className="p-4 text-xl text-[#DCE0D9]">
						<p>Jogos Históricos</p>
					</Information>
					<Information className="p-4 text-xl text-[#DCE0D9]">
						<p>Jogadores Lendários</p>
					</Information>
					<Information className="p-4 text-xl text-[#DCE0D9]">
						<p>Jogadores Lendários</p>
					</Information>
				</div>
			</div>
			<div className="font-anton ml-3 flex justify-start pt-30 text-6xl">
				HISTÓRIA
			</div>
			<p className="font-russo ml-3 flex justify-start text-justify text-xl">
				A NBA foi fundada em 6 de junho de 1946, originalmente chamada de
				Basketball Association of America (BAA), em Nova York. Seus primeiros
				anos foram marcados por desafios, incluindo a concorrência com a
				National Basketball League (NBL), com a qual se fundiu em 1949 para
				formar a NBA conhecida hoje. Como já era de se imaginar, as mudanças de
				regras surtiram efeito e tornaram a liga mais atrativa para o público.
				Dessa forma a liga se consolidou, já no final dos anos 50 e começo dos
				60. Esse período também foi marcado pela forte hegemonia do Boston
				Celtics que acumulou 9 títulos em 10 anos, se consagrando como um dos
				times mais vitoriosos da NBA. Em meio a tudo isso, em 1967 surgiu a
				American Basketball Association (ABA), uma outra organização com a
				intenção de desafiar a NBA. Para isso, a liga apostou em um jogo mais
				ousado e inovador, usando a bola colorida e criando a conhecida linha de
				três pontos. Os anos seguintes foram de forte disputa entre as ligas,
				que visavam atrair os melhores jogadores, árbitros e técnicos para as
				suas competições. No fim, quem saiu ganhando foram justamente os
				jogadores, que tiveram um belo aumento salarial a partir da disputa.
				Ambas as associações conseguiram se expandir com o passar dos anos, com
				a NBA saindo de 9 para 18 franquias. A rivalidade se manteve até 1976,
				quando ambas as ligas chegaram a um acordo para se fundirem, e a NBA
				absorveu mais 4 equipes da ABA, chegando a 22 times. Em 3 de agosto de
				1949, a BAA aceitou se fundir com a NBL, criando a nova National
				Basketball Association (NBA).[7] A nova liga tinha 17 franquias
				localizadas em uma mistura de cidades grandes e pequenas,[7] bem como
				grandes e pequenos ginásios. Em 1950, a NBA se consolidou em 11
				franquias, um processo que continuou até 1953-54, quando o campeonato
				atingiu o seu menor tamanho de oito franquias, os quais todos ainda
				estão na liga (New York Knicks, Boston Celtics, Golden State Warriors,
				Los Angeles Lakers, Sacramento Kings, Detroit Pistons, Atlanta Hawks, e
				Philadelphia 76ers). O processo de contração fez com que as franquias
				das menores cidades se movessem para grandes mercados. Os Hawks saíram
				de Tri-Cities (conhecidas como Quad Cities) para Milwaukee em 1951 e
				então para St. Louis, Missouri em 1955; os Royals foram de Rochester
				para Cincinnati (em 1957); e os Pistons de Fort Wayne, Indiana para
				Detroit (em 1957). Enquanto isso, o Nipo-americano Wataru Misaka quebrou
				a barreira de raças na NBA na temporada 1948-49 quando jogou pelos New
				York Knicks, 1950 é conhecido como o ano em que a NBA se integrou. Em 26
				de Abril de 1950, Harold Hunter assinou com os Washington Capitols, se
				tornando o primeiro Afro-americano a assinar um contrato com qualquer
				time na NBA na história.[8][9] Hunter foi cortado durante o training
				camp,[8][10] porém vários Afro-americanos começaram a jogar na liga no
				final daquele ano, como Chuck Cooper com os Celtics, Nathaniel Clifton
				com os Knicks e Earl Lloyd com os Washington Capitols. Nesse meio tempo,
				os Minneapolis Lakers, liderados pelo pivô George Mikan, ganhou 5
				títulos da NBA e estabilizou o time pela primeira dinastia da NBA.[11]
				Para encorajar os arremessos e desencorajar calmaria, a NBA criou o
				cronômetro de 24 segundos em 1954.[12] Se um time não tentar um
				arremesso (ou não encostar no aro), em 24 segundos de jogada, a jogada
				acaba e a posse de bola passa para seu oponente.
			</p>
			<div className="font-anton ml-3 flex justify-start pt-30 text-6xl">
				A LIGA
				<p className="font-russo mr-5 ml-3 flex justify-end pl-4 text-justify text-xl">
					A NBA foi fundada em 6 de junho de 1946, originalmente chamada de
					Basketball Association of America (BAA), em Nova York. Seus primeiros
					anos foram marcados por desafios, incluindo a concorrência com a
					National Basketball League (NBL), com a qual se fundiu em 1949 para
					formar a NBA conhecida hoje. Como já era de se imaginar, as mudanças
					de regras surtiram efeito e tornaram a liga mais atrativa para o
					público. Dessa forma a liga se consolidou, já no final dos anos 50 e
					começo dos 60. Esse período também foi marcado pela forte hegemonia do
					Boston Celtics que acumulou 9 títulos em 10 anos, se consagrando como
					um dos times mais vitoriosos da NBA. Em meio a tudo isso, em 1967
					surgiu a American Basketball Association (ABA), uma outra organização
					com a intenção de desafiar a NBA. Para isso, a liga apostou em um jogo
					mais ousado e inovador, usando a bola colorida e criando a conhecida
					linha de três pontos. Os anos seguintes foram de forte disputa entre
					as ligas, que visavam atrair os melhores jogadores, árbitros e
					técnicos para as suas competições. No fim, quem saiu ganhando foram
					justamente os jogadores, que tiveram um belo aumento salarial a partir
					da disputa. Ambas as associações conseguiram se expandir com o passar
					dos anos, com a NBA saindo de 9 para 18 franquias. A rivalidade se
					manteve até 1976, quando ambas as ligas chegaram a um acordo para se
					fundirem, e a NBA absorveu mais 4 equipes da ABA, chegando a 22 times.
				</p>
			</div>
		</div>
	);
};

export { IndexPage };
