import React from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import { useReducer } from 'react';
import reducer, { initialState } from './store/reducers/reducers.jsx';
import {
  changeOperation,
  typeScreen,
  equalsDisplay,
  clearDisplay,
  memoryPlus,
  memoryMr,
  memoryMc,
} from './store/actions/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = (event) => {
    dispatch(typeScreen(event.target.value));
  };
  const handleChangeClick = (prop) => {
    dispatch(changeOperation(prop.target.value));
  };

  const handleResetClick = () => {
    dispatch(clearDisplay());
  };

  const handleEqualsClick = () => {
    dispatch(equalsDisplay());
  };

  const handleMemoryPlus = () => {
    dispatch(memoryPlus());
  };

  const handleMemoryMr = () => {
    dispatch(memoryMr());
  };

  const handleMemoryMc = () => {
    dispatch(memoryMc());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleMemoryPlus} />
              <CalcButton value={'MR'} onClick={handleMemoryMr} />
              <CalcButton value={'MC'} onClick={handleMemoryMc} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleButtonClick} />
              <CalcButton value={2} onClick={handleButtonClick} />
              <CalcButton value={3} onClick={handleButtonClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleButtonClick} />
              <CalcButton value={5} onClick={handleButtonClick} />
              <CalcButton value={6} onClick={handleButtonClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleButtonClick} />
              <CalcButton value={8} onClick={handleButtonClick} />
              <CalcButton value={9} onClick={handleButtonClick} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleChangeClick} />
              <CalcButton value={0} onClick={handleButtonClick} />
              <CalcButton value={'-'} onClick={handleChangeClick} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleChangeClick} />
              <CalcButton value={'/'} onClick={handleChangeClick} />
              <CalcButton value={'CE'} onClick={handleResetClick} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleEqualsClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
