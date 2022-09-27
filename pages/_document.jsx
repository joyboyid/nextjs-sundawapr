import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html className='dark scroll-smooth'>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Poppins:wght@400;500;600;700&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/favicon/apple-touch-icon.png?v=1'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/favicon/favicon-32x32.png?v=1'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/favicon/favicon-16x16.png?v=1'
                    />
                    <link rel='manifest' href='/favicon/site.webmanifest?v=1' />
                    <link
                        rel='mask-icon'
                        href='/favicon/safari-pinned-tab.svg?v=1'
                        color='#5bbad5'
                    />
                    <link rel='shortcut icon' href='/favicon/favicon.ico?v=1' />
                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta name='theme-color' content='#ffffff' />
                </Head>
                <body className='font-sans tracking-tight antialiased'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
