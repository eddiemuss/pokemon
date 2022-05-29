import {QueryClient, QueryClientProvider} from "react-query";
import {Children} from "../interfaces/props";

const queryClient = new QueryClient()

const Provider = ({children}: Children) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)

export default Provider