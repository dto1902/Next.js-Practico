import Head from 'next/head';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from 'hooks/useInitialState';
import Header from '@components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>React Shop dt</title>
            </Head>
            <AppContext.Provider value={useInitialState()}>
                <Header />
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-3GTBYW4VQX"></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-3GTBYW4VQX');
                    `}
                </Script>
                <Component {...pageProps} />
            </AppContext.Provider>
        </>
    );
}

export default MyApp;
