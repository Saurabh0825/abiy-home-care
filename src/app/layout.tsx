import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Header from '@/Pages/Shared/Header';
import Footer from '@/Pages/Shared/Footer';
import {BACKGROUND_COLOR} from '@/utils/constants.json';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor: BACKGROUND_COLOR}}>
      <AppRouterCacheProvider>
        <Header />
        {children}
        <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
