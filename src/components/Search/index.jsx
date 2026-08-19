import { useState } from 'react'
import cls from './Search.module.css'

const Search = ({ setIsOpen }) => {
	const [searchName, setSearchName] = useState('')

	function handleSearchName(value) {
		setSearchName(value)
	}

	return (
		<div className={cls.search}>
			<input
				type='text'
				placeholder='Search tasks'
				onChange={e => handleSearchName(e.target.value)}
			/>
			<button onClick={() => setIsOpen(true)}>+</button>
		</div>
	)
}

export default Search
