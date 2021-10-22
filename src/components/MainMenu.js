import Home from "./mainmenu/Home"
import Logo from "./mainmenu/Logo"
import SearchBox from "./mainmenu/SearchBox"
import UserAccount from "./mainmenu/UserAccount"

function MainMenu () {
    return (
        <section className="Menu">
            <Logo />
            <SearchBox/>
            <UserAccount/>
            <Home />
        </section>
    )
}

export default MainMenu