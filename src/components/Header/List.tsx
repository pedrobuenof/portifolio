import ItemOfList from "./ItemOfList"
import './navbar.css'



interface ListProps{
    customClassName?: string;
}

export default function List(props: ListProps) {
    return (
        <ul className={props.customClassName}>
            <ItemOfList itemName="About"/>
            <ItemOfList itemName="Certifications"/>
            <ItemOfList itemName="Projects"/>
        </ul>
    )
}