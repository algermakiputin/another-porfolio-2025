import { useCallback, useEffect } from "react";

const Webchat = () => {
    const loadWebchat = useCallback(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
        script.async = true;
        script.onload = () => {
            loadWebchatContent();
        }
        document.body.append(script);
    }, []);

    const loadWebchatContent = () => {
        const script = document.createElement("script");
        script.src = "https://files.bpcontent.cloud/2025/06/02/08/20250602080552-T2L3FEPS.js";
        script.async = true;
        script.onload = () => {
            console.log("external script loaded");
        }
        document.body.append(script);
    }
    useEffect(() => {
        loadWebchat();
    }, [loadWebchat]);
    return null;
}

export default Webchat;