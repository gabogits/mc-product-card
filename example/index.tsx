import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../.';
const product = {
  id: '1',
  title: 'Coffee',
  //img: './coffee-mug.png',
};
const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
