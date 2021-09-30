import React, { useState } from "react";
import MenuContext from "../contexts/menu-context";
import { RepositoryURL } from "../components/Project/types";

const MenuProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const [menu, setMenu] = useState<{
        show: boolean;
        position: {
            top: number;
            left: number;
        }
        buttons: RepositoryURL[];
    }>({
        show: false,
        position: {
            top: 0,
            left: 0
        },
        buttons: []
    })

    const showMenu = (elementRef: React.MutableRefObject<HTMLButtonElement | null>, buttons: RepositoryURL[]) => {
        console.log("Element", elementRef.current);
        const position = elementRef.current?.getBoundingClientRect();
        console.log(position)
        if (position) {
            const top = position.top + window.scrollY + position.height;
            const left = position.left + window.scrollX - 15;

            setMenu({ buttons: buttons, position: { top: top, left: left }, show: true })
        }
    }

    const hideMenu = () => {
        setMenu({
            show: false,
            position: {
                top: 0,
                left: 0
            },
            buttons: []
        })
    }

    return <MenuContext.Provider value={{ menu, showMenu, hideMenu }}>{children}</MenuContext.Provider>;
}

export default MenuProvider;