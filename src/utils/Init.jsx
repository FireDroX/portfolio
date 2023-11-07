import { useLayoutEffect } from "react";

const Init = () => {
    useLayoutEffect(() => {
        // Retire la fonction draggable des images
        document.querySelectorAll("img").forEach((image) => {
            image.setAttribute("draggable", false);
        });
    }, []);
}

export default Init;