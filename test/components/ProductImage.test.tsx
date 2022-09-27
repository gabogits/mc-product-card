import React from 'react';

import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/product';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
  test('debe de mostrar el componente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="./image.png" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostar el componente conla imagen del pruducto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
