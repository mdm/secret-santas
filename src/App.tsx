import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Styled from './styles';
import Participants from './views/Participants';
import Constraints from './views/Constraints';
import Assignments from './views/Assignments';

const App: React.FC = () => {
  return (
    <Styled.Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Participants />} />
          <Route path="constraints" element={<Constraints />} />
          <Route path="assignments" element={<Assignments />} />
        </Routes>
      </BrowserRouter>
    </Styled.Wrapper>
  );
};

export default App;
