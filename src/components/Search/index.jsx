
import "../style.css"
import React, { useState } from "react"
import FeatherIcon from "feather-icons-react"
import { useSearchParams } from "react-router-dom"

export default function Search({ placeholder }) {

    const [search, setSearch] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()

    function handleClick() {
        setSearchParams({ search: search })
        setSearch('')
    }

    return (
        <div className="flex items-center justify-center">
            <input

                className="search-area box-border"
                type="text"
                placeholder={placeholder}
                value={search} onChange={event => setSearch(event.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleClick()}

            />
            <div className="relative">
                <FeatherIcon
                    className="absolute top-[-16px] right-2 py-1 px-4 box-content cursor-pointer"
                    icon="search"
                    onClick={handleClick}>

                </FeatherIcon>
            </div>

        </div>
    )
}