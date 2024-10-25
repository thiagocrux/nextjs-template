import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading with the right text and backgroudn color', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /hello, world!/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toHaveStyle({
      'background-color': '#ffffff',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
