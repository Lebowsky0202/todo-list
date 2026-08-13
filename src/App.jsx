import Tasks from './components/Tasks'

function App() {
	return (
		<div>
			<h1>To Do List</h1>
			<div>
				<input type='text' placeholder='Search tasks' /> <button>+</button>
			</div>
			<Tasks />
		</div>
	)
}

export default App
