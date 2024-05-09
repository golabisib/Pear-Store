import PropTypes from "prop-types";
import { LuSearch } from "react-icons/lu";
import { createQueryObject } from "../helpers/helper";

function SearchBox({ search, setSearch, setQuery }) {
	const searchHandler = () => {
		setQuery((query) => createQueryObject(query, { search }));
	};

	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Search"
					value={search}
					onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
				/>
				<button type="button" onClick={searchHandler}>
					<LuSearch />
				</button>
			</div>
		</div>
	);
}

SearchBox.propTypes = {
	search: PropTypes.any,
	setQuery: PropTypes.func,
	setSearch: PropTypes.func,
};

export default SearchBox;
