import React from "react";
import ChannelBar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";
import Router from "./components/Router";
import TopNavigation from "./components/TopNavigation";
import "./index.css";
import SideBar from "./SideBar";
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
  // return <ToDos />;
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
  return (
    <div className="flex">
      <SideBar />
      <ContentContainer />
    </div>
  );
}

export default App;
