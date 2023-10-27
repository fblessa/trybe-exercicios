import { useDispatch, useSelector } from 'react-redux';
import { actionCreator, clickCounter } from './redux/store/actions';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  }
};

function App() {
  // const rootState = useSelector((state: RootState) => state);
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const clicks = useSelector((state: RootState) => state.counterReducer.clicks);
  const dispatch = useDispatch();

  const handleClick = (count = 1) => {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }
  return (
    <div>
      <h1>Contador</h1>
      <h2>{ count }</h2>
      <h1>Clicks</h1>
      <h2>{ clicks }</h2>
      <button onClick={ () => handleClick() } >Incrementa 1</button>
      <button onClick={ () => handleClick(5) }>Incrementa 5</button>
    </div>
  );
}

export default App;
