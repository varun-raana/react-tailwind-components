// import Box from "../../components/404/Box";
import Example01 from "../../components/404/Example01";
import Example02 from "../../components/404/Example02";
import Example03 from "../../components/404/Example03";
import Example04 from "../../components/404/Example04";
import Example05 from "../../components/404/Example05";
import BreadCrumb01 from "../../components/breadCrumbs/BreadCrumb01";

function Errors() {
	return (
		<div>
			<BreadCrumb01 param={"404"} />
			<Example01 />
			<Example02 />
			<Example03 />
			<Example04 />
			<Example05 />
		</div>
	);
}

export default Errors;
