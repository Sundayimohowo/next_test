import { FormEvent, useState } from "react";

interface SearchBarProps {
    query :string;
    setQuery(item :string) :void;
}

const SearchBar = ({query, setQuery} :SearchBarProps) => {

    const [ privateQuery, setPrivateQuery ] = useState<string>(query);
    const submitForm = (e :FormEvent) => {
        e.preventDefault();
        setQuery(privateQuery);
    }

    return (
        <div className="py-3">
            <form className="d-flex search-nav-bar rounded" onSubmit={submitForm}>
                <input type="text" name="query" className="form-control d-flex text-white" placeholder="Search..."
                value={privateQuery} onChange={(e) => setPrivateQuery(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar;