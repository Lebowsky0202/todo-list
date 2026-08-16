import { useEffect, useState } from 'react'
import Modal from './components/Modal'
import Tasks from './components/Tasks'

function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')

		return savedTasks ? JSON.parse(savedTasks) : []
	})

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	return (
		<div>
			<h1>To Do List</h1>
			<div>
				<input type='text' placeholder='Search tasks' />
				<button onClick={() => setIsOpen(true)}>+</button>
			</div>
			<Tasks tasks={tasks} setTasks={setTasks} />
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
