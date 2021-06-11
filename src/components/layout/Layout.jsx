import Navbar from "../navbar/Navbar"
import "./layoutStyles.scss"

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className='sale'>discount for every 3 kilograms</div>
            {children}
        </div>
    )
}
