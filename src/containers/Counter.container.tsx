import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../common/interfaces/root-state";
import { Counter } from "../components";
import { counterAdd, counterSub } from "../store/reducers/counter/action";
import { counterSelector } from "../store/selectors/counter";

function CounterContainer() {
  const dispatch = useDispatch();

  const counter = useSelector((state: IRootState) => counterSelector(state));

  const onAdd = () => {
    dispatch(counterAdd());
  };

  return (
    <Counter
      onAdd={onAdd}
      onSubstract={() => {
        dispatch(counterSub());
      }}
      value={counter}
    />
  );
}

export default CounterContainer;
