import airbnbLogo from './airbnb-logo.png'
function Navbar(){
    return(
        <nav>
            <img src={airbnbLogo} alt="Airbnb Logo" className='airbnblogo' />
        </nav>
    )
}
export default Navbar;