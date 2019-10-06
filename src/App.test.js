import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("test app", ()=> {
  test("App componet render no child", () => {
      shallow(<App />);
  });
  test("App componet render with child component", () => {
      mount(<App />);
})
});

