import { setWindowSize } from "@/redux/features/utils-slice";
import { useAppDispatch } from "@/redux/hooks/use-dispatch";
import { useEffect } from "react";

export default function ReduxWrapper(props: ReactChildren) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setWindowSize({width: window.innerWidth, height: window.innerHeight}))
    },[]) //eslint-disable-line
  return props.children
}
