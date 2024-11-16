import ItemOfList from "./ItemOfList"
import './navbar.css'
import '../footer/footer.css'



interface ListProps{
    items: string[];
    customClassName?: string;
}

export default function List(props: ListProps) {
    return (
        <ul className={props.customClassName}>
            {props.items.map((item, index) => (
                <ItemOfList key={index} itemName={item}/>
            ))}
        </ul>
    )
}