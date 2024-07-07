import { RxHamburgerMenu } from "react-icons/rx"

const NavigationMobile = ({logonState, setLogonState, sidebar, setSidebar}) => {

    return (
        <>
            <div className="navigation--mobile md:hidden flex justify-center">
                <button className="navigation_hamburguerMenu flex items-center" onClick={() => {setSidebar(!sidebar)}}>
                    <RxHamburgerMenu size={24}/>
                </button>
            </div>

        </>
    )
}

export default NavigationMobile