import cls from './Search.module.css'

const Search = ({ setIsOpen }) => {
	return (
		<div className={cls.search}>
			<input type='text' placeholder='Search tasks' />
			<button onClick={() => setIsOpen(true)}>+</button>
		</div>
	)
}

export default Search
