// app/layout.tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../../lib/theme';
import React from 'react';

export const metadata = {
  title: 'Quần Short Shop',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
