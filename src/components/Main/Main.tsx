import './Main.css';
import Panel from '../Panel/Panel';
import Form from '../Form/Form';
import TaskList from '../TaskList/TaskList';
import { useLocalStorage } from '@mantine/hooks';

export type Task = {
  content: string;
  severity: 1|2|3; //our code is unionized
}

function Main() {
  const [tasks, setTasks] = useLocalStorage<Task[]>({key: 'tasks', defaultValue: []})

  function handleForm(values: Task) {
    setTasks([...tasks, values]);
  }

  function removeTask(taskIndex: number) {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  }

  return (
    <div className="Main">
      <Panel inHeader="New Tasks">
        <Form handleForm={handleForm}/>
      </Panel>
      <Panel inHeader="Task List">
        <TaskList removeTask={removeTask} tasks={tasks} />
      </Panel>
    </div>
  );
}

export default Main;
