import './CardsTec.css'
import { HiOutlineCodeBracket as Icon} from "react-icons/hi2";





export const CardsTec = ({ text }) => {
    return (
        <>
            <div className='card'>
                <Icon
                id='icon'
                fontSize={20}
                />
                {text}
            </div>

        </>
    )
}
