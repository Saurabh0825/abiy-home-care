import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/components/Shared/Header';
import Footer from '@/components/Shared/Footer';
import {BACKGROUND_COLOR} from '@/utils/constants.json';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <body style={{ backgroundColor: BACKGROUND_COLOR, margin: 0, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppRouterCacheProvider>
        <Header />
        <main style={{ flex: 1 }}>{children}</main> {/* Ensures content expands */}
        <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
