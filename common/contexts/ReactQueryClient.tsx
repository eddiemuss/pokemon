import {Children} from "../interfaces/props";
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import {useState} from "react";

interface Props extends Children {
    dehydratedState: any
}

const Provider = ({children, dehydratedState}: Props) => {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                {children}
            </Hydrate>
        </QueryClientProvider>
    )
}

export default Provider