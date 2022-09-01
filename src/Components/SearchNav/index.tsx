import { FaTimes } from "react-icons/fa";
import SearchBar from "./SearchBar";

interface SearchNavProps {
    active :string;
    setActive(item :string) :void;
    query :string;
    setQuery(item :string) :void;
}


const SearchNav = ({active, query, setActive, setQuery} :SearchNavProps) => {

    const NavItem = ({item}: {item: string}) => {
        return (
            <div className={
                "text-sm-center nav-link search-nav-button text-capitalize" +
                " px-3 py-1 " + (active == item? 'active' : 'text-primary')}
                onClick={() => setActive(item)}>
                    {item}
            </div>
        )
    }

    return (
        <nav className="nav nav-pills flex-column flex-sm-row justify-content-between">
            <div className="d-flex py-3">
                {
                    ["all", "music", "album", "artist"].map((item) => (
                        <NavItem item={item} key={item} />
                    ))
                }
            </div>
            <SearchBar query={query} setQuery={setQuery} />
        </nav>
    )
}

export default SearchNav;