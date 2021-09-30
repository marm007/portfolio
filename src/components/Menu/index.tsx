import React, { useContext, useRef } from "react";
import MenuContext from "../../contexts/menu-context";
import useOnClickOutside from "../../hooks/use-on-click-outside";
import { MenuContainer } from "./styled";

const Menu = (): JSX.Element => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { menu, hideMenu } = useContext(MenuContext);

    useOnClickOutside(ref, () => {
        if (hideMenu) hideMenu!();
    })

    return menu.show ?
        (<MenuContainer
            ref={ref}
            style={{ left: menu.position.left, top: menu.position.top }}
            show={menu.show}>
            <ul>
                {menu.buttons.map(({ name, url }) => {
                    return <li key={name}><a href={url}>{name}</a></li>
                })}
            </ul>
        </MenuContainer>) :
        <></>
}

export default Menu;