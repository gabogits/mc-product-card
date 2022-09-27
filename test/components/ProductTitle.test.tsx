import React from 'react';
import { ProductTitle } from '../../src/components/ProductTitle';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/product';

describe('ProductTitle', () => {
  test('debe de mostrar el componente con el titulo personalizado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostar el componente con el nombre', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle className="custom-class" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
