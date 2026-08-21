import { useEffect, useState } from 'react'
import Modal from './components/Modal'
import Search from './components/Search'
import Tasks from './components/Tasks'

function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')

		return savedTasks ? JSON.parse(savedTasks) : []
	})

	const [search, setSearch] = useState('')

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	console.log('tasks:', tasks)
	console.log('is array:', Array.isArray(tasks))
	const filteredTasks = tasks.filter(task =>
		task.name.toLowerCase().includes(search.toLowerCase()),
	)

	function handleCompleteTask(id) {
		setTasks(prevTasks => {
			return prevTasks.filter(task => task.id !== id)
		})
	}

	return (
		<div>
			<h1>To Do List</h1>
			<Search setIsOpen={setIsOpen} search={search} setSearch={setSearch} />
			<Tasks
				tasks={filteredTasks}
				setTasks={setTasks}
				onComplete={handleCompleteTask}
			/>
			<Modal
				isOpen={isOpen}
				isClose={() => setIsOpen(false)}
				tasks={tasks}
				setTasks={setTasks}
			/>
		</div>
	)
}

export default App
