import { Toaster } from 'react-hot-toast';
import Layout from '@/components/views/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster
          toastOptions={{
            style: {
              color: 'white'
            },
            success: {
              iconTheme: {
                primary: '#B0EACD',
                secondary: '#21BF73',
              },
              style: {
                background: '#21BF73',
              },
            },
            error: {
              style: {
                background: '#F38181',
              },
            },
          }}
      />
    </Layout>
  );
}

export default MyApp;
