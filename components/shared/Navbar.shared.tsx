import React from 'react';
import {Button} from "@/components/ui/button.ui";
import {menus} from "@/constants/menu.constant";

function NavbarShared() {
    return (
        <div className={`flex items-center w-screen p-2 border border-red-700`}>
            <div className={``}>Logo</div>
            <div className={`flex gap-3 `}>{menus.map(menu=>(
                <div key={menu.name}>
                    <h2 className={`gap-5`}>
                        <a href={menu.url} className={``}>{menu.name}</a>
                    </h2>
                </div>
            ))}
            </div>
            <div className={`flex gap-3 ml-5`}>
                <Button variant={`outline`} size={`lg`}>Join</Button>
                <Button variant={`outline`} size={`lg`}>Login</Button>
                <Button variant={`outline`} size={`lg`}>Request Demo</Button>
            </div>
        </div>
    );
}

export default NavbarShared;