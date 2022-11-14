import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Counter from "../Counter";
import Toggle from "../handlingEvents";
import HackerNewsAsync from "../AsyncAwait";
// import HackerNewsAsync from "./components/AsyncAwait";
import NumberList from "../numberList";
// import Toggle from "../handlingEvents";
// import useLocalStorage from "./hooks/useLocalStorage";
// import useUpdateLogger from "./hooks/useUpdateLogger";
import UseReducer from "../UseReducer";
// import Counter from "../Counter";
import UpdateShoppingCartItems from "../UpdateShoppingCartItems";
import MultipleSelection from "../MultipleSelection";
import FilteringAList from "../FilteringAList";
import ResetADetailForm from "../ResetADetailForm";
import TaskAppWithState from "../TaskAppWithState";
import TaskAppWithUseReducer from "../TaskAppWithUseReducer";
import UseTransition from "../UseTransition";
import WDS from "../UseTransitionWDS";
import ToDos from "../ToDos";
import HackerNewsPromise from "../Promise";
// import FruitsCombobox from "./accessibility/basic";
// import FruitsComboboxSuspense from "./accessibility/basic-suspense";
import UseFetchData from "../useFetch";
import FetchApi from "../FetchAPI";
import FetchApiWithAwait from "../FetchAPI/fetchWithAwait";
import FetchWithCustomHook from "../FetchAPI/fetchWithCustomHook";
import SampleContext from "../CreateContext";
import PortalExample from "../Portals";
import TodoList from "../UseState/createInitialTodos";
import ClassStateExample from "../UseState/ClassComponent";
import FunctionStateExample from "../UseState/FunctionComponent";
import UpdateShoppingCartItem from "../UpdatingArrays/updateShoppingCartItem";
import JokeSampleApp from "../../sampleapps/jokes";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usestate">Passing the initializer function</Link>
          </li>
          <li>
            <Link to="/classstate">
              State example from Class Based Components
            </Link>
          </li>
          <li>
            <Link to="/functionstate">
              State example from Function Based Components
            </Link>
          </li>
          <li>
            <Link to="/updatecart">Update Shopping Cart</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/async">Async Await Example</Link>
          </li>
          <li>
            <Link to="/context">Create Context</Link>
          </li>
          <li>
            <Link to="/fetchapi">Fetch API</Link>
          </li>
          <li>
            <Link to="/fetchapiawait">Fetch API with Await</Link>
          </li>
          <li>
            <Link to="/fetchwithcustomhook">Fetch API with Custom Hook</Link>
          </li>
          <li>
            <Link to="/listfilter">Filtering List</Link>
          </li>
          <li>
            <Link to="/multiselect">Multiple Selection</Link>
          </li>
          <li>
            <Link to="/simplepromise">Simple Promise</Link>
          </li>
          <li>
            <Link to="/sampleapp/joke">Joke Sample App</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Toggle />} />
        <Route path="/usestate" element={<TodoList />} />
        <Route path="/classstate" element={<ClassStateExample />} />
        <Route path="/functionstate" element={<FunctionStateExample />} />
        <Route path="/updatecart" element={<UpdateShoppingCartItem />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/async" element={<HackerNewsAsync />} />
        <Route path="/context" element={<SampleContext />} />
        <Route path="/fetchapi" element={<FetchApi />} />
        <Route path="/fetchapiawait" element={<FetchApiWithAwait />} />
        <Route path="/fetchwithcustomhook" element={<FetchWithCustomHook />} />
        <Route path="/portals" element={<PortalExample />} />
        <Route path="/listfilter" element={<FilteringAList />} />
        <Route path="/simplepromise" element={<HackerNewsPromise />} />
        <Route path="/sampleapp/joke" element={<JokeSampleApp />} />
        <Route path="/multiselect" element={<MultipleSelection />} />
      </Routes>
    </BrowserRouter>
  );
}
