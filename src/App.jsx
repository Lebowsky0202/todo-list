import { useState } from 'react'
import Modal from './components/Modal'
import Tasks from './components/Tasks'

function App() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<h1>To Do List</h1>
			<div>
				<input type='text' placeholder='Search tasks' />
				<button onClick={() => setIsOpen(true)}>+</button>
			</div>
			<Tasks />
			<Modal isOpen={isOpen} isClose={() => setIsOpen(false)} />
		</div>
	)
}

export default App
