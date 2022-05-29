import {AppProps} from 'next/app'
import ReactQueryClientProvider from "common/contexts/ReactQueryClient";
import 'common/styles/globals.css'

export const App = ({Component, pageProps}: AppProps) => (
    <ReactQueryClientProvider>
        <Component {...pageProps} />
    </ReactQueryClientProvider>
)

export default App