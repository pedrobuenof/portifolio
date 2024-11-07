import ItemOfList from "./ItemOfList"

export default function List() {
    return (
        <ul>
            <ItemOfList itemName="About"/>
            <ItemOfList itemName="Certifications"/>
            <ItemOfList itemName="Projects"/>
        </ul>
    )
}