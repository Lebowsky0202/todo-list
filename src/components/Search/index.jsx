import cls from './Search.module.css'

const Search = ({ setIsOpen, search, setSearch }) => {
	// const [searchName, setSearchName] = useState('')

	function handleSearchName(value) {
		setSearch(value)
	}

	return (
		<div className={cls.search}>
			<input
				type='text'
				value={search}
				placeholder='Search tasks'
				onChange={e => handleSearchName(e.target.value)}
			/>
			<button onClick={() => setIsOpen(true)}>+</button>
		</div>
	)
}

export default Search
