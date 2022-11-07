import React from "react";
import { useEffect } from "react";
import SampleContext from "./components/CreateContext";
import FetchApi from "./components/FetchAPI";
import FetchApiWithAwait from "./components/FetchAPI/fetchWithAwait";
import FetchWithCustomHook from "./components/FetchAPI/fetchWithCustomHook";
import ProxyFetch from "./components/FetchAPI/proxyFetch";
import Router from "./components/Router";
import AddArray from "./components/UpdatingArrays/addToAnArray";
import RemoveFromAnArray from "./components/UpdatingArrays/removeFromAnArray";
import ReverseAnArray from "./components/UpdatingArrays/reverseAnArray";
import UpdateShoppingCartItem from "./components/UpdatingArrays/updateShoppingCartItem";
import UpdatingObjectsSimple from "./components/UpdatingObjects";
import SingleHandler from "./components/UpdatingObjects/singleHandler";
import UpdatingNestedObject from "./components/UpdatingObjects/updatingNestedObject";
import UseMemoExample from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseTransition from "./components/UseTransition";
import UseTransitionCore from "./components/UseTransition/coreReactExample";
// import RemoveShoppingCartItems from './components/RemoveShoppingCartItems'

function App() {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // return <NumberList numbers={numbers} />
  // return <Counter />;
  // return <UpdateShoppingCartItems />
  // return <MultipleSelection />
  // return <FilteringAList />
  // return <ResetADetailForm />
  // return <TaskAppWithState />;
  // return <TaskAppWithUseReducer />
  /*   const [name, setName] = useLocalStorage('name', '')
  useUpdateLogger(name)
  return (
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
  ) */
  // return <UseTransition />;
  // return <WDS />
  // return <ToDos />;f
  // return <HackerNewsAsync />;
  // return <HackerNewsPromise />;
  // return <FruitsCombobox />;
  // return <FruitsComboboxSuspense />;
  // return <UseFetchData />;
  // return <FetchApi />;
  // return <FetchApiWithAwait />;
  // return <FetchWithCustomHook />;
  // return <SampleContext />;
  // return <PortalExample />;
  // return <Router />;
  // return <ProxyFetch />;
  // return <UseTransitionCore />;
  // return <UseReducer />;
  // return <UpdatingObjectsSimple />;
  // return <SingleHandler />;
  // return <UpdatingNestedObject />;
  // return <AddArray />;
  // return <RemoveFromAnArray />;
  // return <ReverseAnArray />;
  // return <UpdateShoppingCartItem />;
  return <UseMemoExample />;
}

export default App;
