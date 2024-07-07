"use client"
import { useEffect, useState } from "react"
import SearchbarDesktop from "./components/SearchbarDesktop"
import SearchbarMobile from "./components/SearchbarMobile"
import axios from '../../../data/config'

const Searchbar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [dropdownSuggestions, setDropdownSuggestions] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [showDropdown, setShowDropdown] = useState(true)

    const fetchSearchSuggestions = async () => {
        try {
            // By default this URL is fetching 20 itens, offset 0
            // The amount of itens displayed can be changed by parameter limit
            // ex.: [...]/frequent?limit=10&offset=5
            const response = await axios.get("/api/search-suggestions/frequent")
            setSearchResults(response.data)
        } catch (error) {
            console.error("Error fetching search suggestions results", error)   
        }
    }

    useEffect(() => {
        fetchSearchSuggestions()
    }, [])

    useEffect(() => {
        // Defining the maximum suggestions elements to 4
        const maxElements = 5
        // Slicing the array, limiting to maxElements
        const slicedSuggestions = searchResults.slice(0, maxElements)
        setDropdownSuggestions(slicedSuggestions)
    },[searchTerm])

    const handleInputChange = (event) => {
        setShowDropdown(true)
        const value = event.target.value
        setSearchTerm(value)
    }

    const handleInputFocus = () => {
        setShowDropdown(true)
    }


    // Here lis a bug, must be fixed..
    // onBlur event unstack the handleOptionClick
    const handleInputBlur = () => {
        setTimeout(() => {
            setShowDropdown(false)
        }, 200)
    }

    const handleOptionClick = (option) => {
        const value = option.target.innerText
        setSearchTerm(value)
        setShowDropdown(false)
    }



    return (
        <>
        <SearchbarDesktop props={{searchTerm, setSearchTerm, dropdownSuggestions, setDropdownSuggestions, searchResults, setSearchResults, showDropdown, setShowDropdown, handleInputChange, handleInputFocus, handleInputBlur, handleOptionClick}} />
        <SearchbarMobile props={{searchTerm, setSearchTerm, dropdownSuggestions, setDropdownSuggestions, searchResults, setSearchResults, showDropdown, setShowDropdown, handleInputChange, handleInputFocus, handleInputBlur, handleOptionClick}} />
        </>
    )
} 

export default Searchbar