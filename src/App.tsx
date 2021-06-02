import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Main from './components/Main';
import Spinner from './components/Spinner';
import Summary from './components/Summary';
import { SummaryData } from './components/Summary/types';

function App() {
    const [summary, setSummary] = useState<SummaryData>();
    const [isLoading, setIsLoading] = useState(false);

    return (
    <Main>
      <Header title='Insurance React App' />

      <Form setSummary={setSummary} setIsLoading={setIsLoading} />

      {isLoading && <Spinner />}

      <Summary summary={summary} />

    </Main>
  );
}

export default App;
