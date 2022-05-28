import {createContext, useContext, useMemo, useState} from "react";
import CardContent from "@mui/material/CardContent";
import {Children} from "common/interfaces/props";

const ContentContext = createContext({expanded: false})

const Content = ({children}: Children) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded((prevExpanded) => !prevExpanded)

    const value = useMemo(() => ({
            expanded,
        })
        , [expanded])

    return (
        <ContentContext.Provider value={value}>
            <CardContent onClick={toggleExpanded}>{children}</CardContent>
        </ContentContext.Provider>
    )
}

const ContentOnExpanded = ({children}: Children) => {
    const {expanded} = useContext(ContentContext)
    return Boolean(expanded) && children
}

const ContentOnCollapsed = ({children}: Children) => {
    const {expanded} = useContext(ContentContext)

    return !expanded && children
}

Content.onExpanded = ContentOnExpanded
Content.onCollapsed = ContentOnCollapsed

export default Content