import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../../assets/logo/booking_hub_logo_semfundo.png";

const NavigationDesktop = ({ logonState, setLogonState }) => {
  // const logonState = {isLoggedIn: false}
  return (
    <>
      {!logonState.isLoggedIn ? (
        <div className="navigation--desktop hidden md:flex justify-between items-center gap-6">
          <Link className="no-underline" href={"/register"}>
            <button className="btn btn-secondary w-52">Registrar</button>
          </Link>
          <Link className="no-underline" href={"/login"}>
            <button className="btn btn-secondary w-52">Login</button>
          </Link>
        </div>
      ) : (
        "<aqui mostrar a navbar quando o usuario estiver logado -versão desktop>"
      )}
    </>
  );
};

export default NavigationDesktop;
