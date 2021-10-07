import React from "react";
import { ProjectLinksWebsites } from "../components/Project/types";

type MenuContextProps = {
    menu: {
        show: boolean;
        position: {
            top: number;
            left: number;
        }
        buttons: ProjectLinksWebsites[];

    };
    showMenu?: (elementRef: React.MutableRefObject<HTMLButtonElement | null>, buttons: ProjectLinksWebsites[]) => void;
    hideMenu?: () => void;
}

const defaultState = {
    menu: {
        show: false,
        buttons: [],
        position: {
            top: 0,
            left: 0
        }
    },
};


const MenuContext = React.createContext<MenuContextProps>(defaultState);

export default MenuContext;
