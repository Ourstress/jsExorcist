import { useRef, useEffect } from "react";
import crypto from "crypto-js";
import publicIp from "public-ip";

function useLogs(firestore, firebase, gameState, currentChapterIndex) {
  const sessionKey = useRef(crypto.lib.WordArray.random(16).words.join(""));
  useEffect(() => {
    const inProd = true; // process.env.NODE_ENV !== "development";
    let ip;
    (async () => {
      ip = await publicIp.v4();
      inProd &&
        firestore &&
        firestore
          .collection("logs")
          .doc(sessionKey.current)
          .set({
            ...gameState,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
            ip: ip,
            device: window.navigator.userAgent,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          });
    })();
    // eslint-disable-next-line
  }, [currentChapterIndex, firestore]);

  return {};
}
export default useLogs;
