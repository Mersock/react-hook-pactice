// import React, { useReducer } from 'react';
import React from 'react';
import './App.css';
import ParentComponent from './components/useCallback/ParentComponent';
// import ClassCounter from './components/useState/ClassCounter';
// import HookCounter from './components/useState/HookCounter';
// import HookCounterTwo from './components/useState/HookCounterTwo';
// import HookCounterThree from './components/useState/HookCounterThree';
// import ClassCounterTwo from './components/useState/ClassCounterTwo';
// import HookCounterFour from './components/useState/HookCounterFour';
// import ClassCounterOne from './components/useEffect/ClassCounterOne';
// import HookCounterOne from './components/useEffect/HookCounterOne';
// import ClassMouse from './components/useEffect/ClassMouse';
// import HookMouse from './components/useEffect/HookMouse';
// import MouseContainer from './components/useEffect/MouseContainer';
// import IntervalCalssCounter from './components/useEffect/IntervalCalssCounter';
// import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
// import DataFetching from './components/useEffect/DataFetching';
// import ComponentC from './components/useContext/ComponentC';
// import CounterOne from './components/useReducer/CounterOne';
// import CounterTwo from './components/useReducer/CounterTwo';
// import CounterThree from './components/useReducer/CounterThree';
// import ComponentA from './components/useReducerWithuseContext/ComponentA'
// import ComponentB from './components/useReducerWithuseContext/ComponentB'
// import ComponentC from './components/useReducerWithuseContext/ComponentC'
// import DataFetchingOne from './components/useEffect/DataFetchingOne';
// import DataFetchingTwo from './components/useReducer/DataFetchingTwo';

export const CountContext = React.createContext()

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()


// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

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
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}

      <ParentComponent/>
    </div>
  );
}

export default App;
