import {
    useEffect,
    useRef
} from "react";

export let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
        let maybeHandler = (event) => {
            if (domNode.current !== null) {
                if (!domNode.current.contains(event.target)) {
                handler();
            }
            } 
        }
        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("moussedown", maybeHandler)
        }
    });
    return domNode
}