import { useEffect } from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import { useAppDispatch } from './store/features/store';
import { fetchPeople } from './store/features/personSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <Add></Add>
        <List></List>
      </header>
    </div>
  );
}

export default App;
