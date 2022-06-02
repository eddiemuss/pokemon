import * as LocalStorageUtil from "../utils/localStorageUtil";
import {useEffect, useState} from "react";

const useFirstVisit = () => {
    const [firstVisit, setFirstVisit] = useState(false)

    useEffect(() => {
        // I need to put it within the useEffect because the window object is only available on the client side.
        const storedValue = !LocalStorageUtil.getItem(LocalStorageUtil.KEYS.hasVisitBefore)

        setFirstVisit(storedValue)
        if (!storedValue) LocalStorageUtil.setItem(LocalStorageUtil.KEYS.hasVisitBefore, 'true')
    }, [])

    return Boolean(firstVisit)
}

export default useFirstVisit