import React from 'react';
import {Button} from "@/components/ui/button.ui";
import {menus} from "@/constants/menu.constant";

function NavbarShared() {
    return (
        <div className={`flex items-center w-screen p-2`}>
            <div className={`mr-20`}>Logo</div>
            <div className={`flex gap-3 text-lg space-x-6 mr-10`}>{menus.map(menu => (
                <div key={menu.name}>
                    <h2 className={`gap-5`}>
                        <a href={menu.url} className={`hover:underline`}>{menu.name}</a>
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