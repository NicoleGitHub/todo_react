import './App.css';
import ToDoList from './component/ToDoList';
import DoneList from './component/DoneList';
import UndoneList from './component/UndoneList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { INIT_TODO } from "./constants/constants";
import { getTodos } from './apis/todos';
import { Menu } from 'antd';
import { CheckSquareOutlined, SmileOutlined } from '@ant-design/icons';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      getTodos().then((response) => {
          dispatch({type: INIT_TODO, payload: response.data});
      })
  });

  return (
    <Router>

    <div className="App">

      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<CheckSquareOutlined />}>
          <Link class="active" to="/">ToDo</Link>
        </Menu.Item>
        <Menu.Item key="app" icon={<SmileOutlined />}>
          <Link to="/todo">Done</Link>
        </Menu.Item>
        <Menu.Item key="alipay" icon={<SmileOutlined rotate={180}/>}>
          <Link to="/done">Undone</Link>
        </Menu.Item>
      </Menu>


      <Switch>
        <Route exact path="/todo">
            <Done />
          </Route>
          <Route exact path="/done">
            <Undone />
          </Route>
          <Route exact path="/">
            <ToDo />
          </Route>
      </Switch>

    </div>
    </Router>
  );
}

function ToDo() {
  return <ToDoList/>;
}

function Done() {
  return <DoneList/>;
}

function Undone() {
  return <UndoneList/>;
}

export default App;
