import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';

/**
 * The function `renderWithTheme` renders children components with a specified theme using a
 * ThemeProvider from the `styled-components` library.
 * @param children - The `children` parameter in the `renderWithTheme` function is of type
 * `React.ReactNode`, which means it can accept any valid React node as its value. This can include JSX
 * elements, strings, numbers, arrays, fragments, etc., that are valid children for a React component.
 */
export default function renderWithTheme(
  children: React.ReactNode,
): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
