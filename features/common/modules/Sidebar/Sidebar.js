import { useContext, useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "./sidebar.css";
import Link from "next/link";
import { LogonStateContext } from "@/hooks/contexts/LogonStateContext";

const Sidebar = ({sidebar, setSidebar}) => {
    const {logonState, setLogonState} = useContext(LogonStateContext)
    console.log(logonState)
  const handleLogout = () => {};

  return (
    <div
      className={
        sidebar
          ? "md:hidden sidebar_overlay--opened w-full h-full top-0 fixed z-20 bg-white text-md font-bold right-[-0]"
          : "md:hidden sidebar_overlay--closed w-full h-full top-0 fixed z-20 bg-white text-md font-bold right-[-100%]"
      }
    >
      <section className="sidebar_loginState flex justify-between bg-[#1DBEB4] w-full h-44 sidebar_state text-white text-center p-2">
        <button
          className="sidebar_state--close font-bold self-start"
          onClick={() => {
            setSidebar(false);
          }}
        >
          X
        </button>
        {!logonState ? (
          <h2 className="sidebar_loginState--off self-end">MENU</h2>
        ) : (
          <div className="sidebar_loginState--on flex fle-col justify-end">
            <div>AVATAR</div>
            <div>Olá,</div>
            <div>{logonState}</div>
          </div>
        )}
      </section>
      <section className="sidebar_navigation p-2">
        <ul className="sidebar_navigation--options flex flex-col text-end align-middle">
          {!logonState ? (
            <>
              <li className="navigation_option--register my-4">
                <Link href="/register" onClick={() => {setSidebar(false)}}>Registrar</Link>
              </li>
              <hr className="border-0 h-px bg-slate-700" />
              <li className="navigation_option--login my-4">
                <Link href="/login" onClick={() => setSidebar(false)}>Login</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/" onClick={handleLogout}>
                  Deseja{" "}
                  <span className="text-[#1DBEB4]">encerrar a sessão</span>?
                </Link>
              </li>
              <hr className="border-0 h-px bg-slate-700" />
            </>
          )}
        </ul>
      </section>
      <section className="sidebar_socialMedia absolute bottom-0 w-full">
        <ul className="flex justify-end items-center gap-4 my-8 mx-2">
          <li>
            <Link href="/">
              <BsFacebook size={24} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaLinkedin size={24} />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsTwitter size={24} />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsInstagram size={24} />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
