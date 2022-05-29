import * as LocalStorageUtil from "../utils/localStorageUtil";
import {useEffect} from "react";

const useFirstVisit = () => {
   const firstVisit = !LocalStorageUtil.getItem(LocalStorageUtil.KEYS.hasVisitBefore)

   useEffect(() => {
      LocalStorageUtil.setItem(LocalStorageUtil.KEYS.hasVisitBefore, 'true')
   }, [])

   return firstVisit
}

export default useFirstVisit