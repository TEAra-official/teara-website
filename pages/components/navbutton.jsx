import { Container } from 'react-bootstrap'
import {Link as Scroll} from "react-scroll"

export default function Navbutton({index}) {
    return (
        <button>
            <Scroll to="contact" smooth={true} duration={600} offset={100}>{index}</Scroll>
        </button>
    )
}  