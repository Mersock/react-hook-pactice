import React from 'react';
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import ClassCounterTwo from './components/useState/ClassCounterTwo';
import HookCounterFour from './components/useState/HookCounterFour';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';
import ClassMouse from './components/useEffect/ClassMouse';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';
import IntervalCalssCounter from './components/useEffect/IntervalCalssCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import DataFetching from './components/useEffect/DataFetching';
import ComponentC from './components/useContext/ComponentC';
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <ClassCounterTwo />
      <HookCounter />
      <HookCounterTwo/>
      <HookCounterThree />
      <HookCounterFour/>
      <ClassCounterOne/>
      <HookCounterOne/>
      <ClassMouse/>
      <HookMouse/>
      <MouseContainer/>
      <IntervalCalssCounter/>
      <IntervalHookCounter/>
      <DataFetching/> */}

      {/* <UserContext.Provider value={'Phumthawan'}>
        <ChannelContext.Provider value={'Nokun'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne/> */}

      <CounterTwo/>
    </div>
  );
}

export default App;
