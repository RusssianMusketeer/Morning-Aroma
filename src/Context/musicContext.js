import { createContext} from "react";
import useSound from "use-sound";
import music from "../Assets/Jazz.mp3";
import { useState } from "react";

const MusicContext= createContext();

export const MusicProvider =({children}) => {
    const [play,{stop}] = useSound(music, {interrupt: true});
    const [checked, setChecked] = useState(false);

    return (
        <MusicContext.Provider value={{play,stop,checked,setChecked}}>
            {children}
        </MusicContext.Provider>
    )

};

export default MusicContext;