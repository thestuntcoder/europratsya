import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../layout/footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const copyrightText = renderer
      .create('© 2022 — All rights reserved.')
      .toJSON();
    expect(copyrightText).toMatchSnapshot();
  });
});
