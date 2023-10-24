import {TODOStatus} from '../utils/types';

const TodoStatusDisplay = (props: TODOStatus) => (
  <div>
    <h2>Status</h2>
    <p>todo: {props.data.length} - done: {props.n_of_done}</p>
  </div>
)

export default TodoStatusDisplay;
