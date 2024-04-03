import '../app/globals.css';
import RootLayout from "@/Components/RootLayout";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (

        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}
