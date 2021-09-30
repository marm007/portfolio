import React from "react";
import { RepositoryURL } from "../components/Project/types";

type MenuContextProps = {
    menu: {
        show: boolean;
        position: {
            top: number;
            left: number;
        }
        buttons: RepositoryURL[];

    };
    showMenu?: (elementRef: React.MutableRefObject<HTMLButtonElement | null>, buttons: RepositoryURL[]) => void;
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
