'use client'

import Header from "./components/Header";
import NavigationDesktop from "./components/NavigationDesktop";
import NavigationMobile from "./components/NavigationMobile";
import Image from "next/image"
import Link from "next/link"
import logo from "../../../../assets/logo/booking_hub_logo_semfundo.png"
import { LogonStateContext } from "@/hooks/contexts/LogonStateContext";
import { useContext } from "react";


const Navigation = ({sidebar, setSidebar}) => {
  const {logonState, setLogonState} = useContext(LogonStateContext)
  return (
    <>
      <Header>
      <nav className="navigation_header flex justify-between w-full h-full">
            <article className="h-full">
                <Link 
                    className="inline-flex h-full no-underline"
                    href={"/"}
                >
                <Image 
                    style={{alignSelf: "flex-start"}}
                    src={logo}
                    height={64}
                    width={64}
                    alt="Bookinghub Logo"
                />
                <span className="text-lg self-end text-slate-500 hidden lg:block">Seu conforto em primeiro lugar</span>
                </Link>
            </article>
        <NavigationDesktop logonState={logonState} setLogonState={setLogonState} />
        <NavigationMobile logonState={logonState} setLogonState={setLogonState} sidebar={sidebar} setSidebar={setSidebar} />
        </nav>
      </Header>
    </>
  );
};

export default Navigation;
