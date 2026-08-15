import { tasks } from '../../data/tasks'
import cls from './Tasks.module.css'

const Tasks = () => {
	{
		return (
			<div className={cls.tasks}>
				{tasks.map(item => {
					return (
						<div key={item.id}>
							<input type='checkbox' name='isComplited' />
							{item.name}
						</div>
					)
				})}
			</div>
		)
	}
}

export default Tasks
