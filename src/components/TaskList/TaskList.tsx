import './TaskList.css';
import { Task } from '../Main/Main'
import Panel from '../Panel/Panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

type TaskListProps = {
  removeTask: (taskIndex: number) => void;
  tasks: Task[];
}

function TaskList({removeTask, tasks}: TaskListProps) {

  function severityText(sevLevel: number, strip: boolean = false): string {
    let sevText: string
    switch(sevLevel) {
      case 1:
        sevText = "Relaxed";
        break;
      case 2:
        sevText = "Important";
        break;
      case 3:
        sevText = "!Urgent!";
        break;
      default:
        sevText = `unexpected case of "${sevLevel}" for severityText`
        break; 
    }
    if(strip) {
      sevText = sevText.replace(/\W/gm, "").toLowerCase()
    }
    return sevText;
  }

  return (
    <div className="TaskList">
      {tasks.map((task, index) => {
        const panelStyle = severityText(task.severity, true)
        return (
          <Panel
            key={index}
            className={`tasklist-item ${panelStyle}`}>
            <div style={{flexGrow: "2"}}>
              {task.content}
            </div>
            <div>
              {severityText(task.severity)}
            </div>
            <FontAwesomeIcon
              icon={faX}
              tabIndex={0}
              className="remove-task"
              onClick={() => {removeTask(index)}}
              onKeyDown={(event) => {
                if(event.key === "Enter") {
                  removeTask(index);
                }
              }}/>
          </Panel>
        )
      })}
    </div>
  );
}

export default TaskList;
