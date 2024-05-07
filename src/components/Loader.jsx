import { RotatingLines } from "react-loader-spinner";

import styles from "./Loader.module.css";

function Loader() {
	return (
		<>
			<div className={styles.loader}>
				<RotatingLines
					height="95px"
					width="95px"
					strokeColor="#22578f"
					strokeWidth="1"
				/>
			</div>
		</>
	);
}

export default Loader;
