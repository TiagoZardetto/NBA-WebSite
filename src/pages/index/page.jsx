import { Button } from "../../components/ui/button";
import { Cards } from "../../components/ui/cards";

const IndexPage = () => {
	return (
		<>
			<div className="flex justify-center">
				<div className="grid grid-flow-col grid-cols-3 gap-50 p-10">
					<Button>HOME</Button>
					<Button>A LIGA</Button>
					<Button>JOGADORES</Button>
				</div>
			</div>
			<div className="grid grid-cols-3 justify-center gap-4">
				<Cards
					titulo="card-lebron"
					texto="lebronlebronlebronlebronlebronlebronlebron"
					image=""
				/>
				<Cards
					titulo="card-curry"
					texto="currycurrycurrycurrycurrycurrycurrycurrycu"
					image=""
				/>
				<Cards
					titulo="card-durant"
					texto="durantdurantdurantdurantdurantdurantdurant"
					image=""
				/>
			</div>
		</>
	);
};

export { IndexPage };
