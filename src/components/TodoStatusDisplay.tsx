import {TODOStatus} from '../utils/types';

const TodoStatusDisplay = (props: TODOStatus) => (
  <div>
    <h2>Stats</h2>
    <ul>
      <li>todo: {props.data.length}</li>
      <li>done: {props.n_of_done}</li>
    </ul>
  </div>
)

export default TodoStatusDisplay;
