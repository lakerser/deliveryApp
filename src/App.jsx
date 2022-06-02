/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cardIsShown, setCardIsShown] = useState(false);

  const showCardHandles = () => {
    setCardIsShown(true);
  };
  const hideCardHandles = () => {
    setCardIsShown(false);
  };
  return (
    <>
      {cardIsShown && <Cart onHide={hideCardHandles} />}
      <Header onHide={hideCardHandles} onShow={showCardHandles} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
