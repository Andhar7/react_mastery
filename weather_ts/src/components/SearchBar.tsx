import {useState} from "react";
import * as React from "react";

interface SearchBarProps {

    onSearch: (city:string) => void;
    isLoading: boolean;

}

export const SearchBar = ({onSearch, isLoading}: SearchBarProps) => {

    const [city, setCity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        if (city.trim()) {
            onSearch(city.trim());
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="relative">
                <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city..."
                disabled={isLoading}
                className="w-full px-4 py-3 pr-12 "
                />
            </div>
        </form>
    )

}



















