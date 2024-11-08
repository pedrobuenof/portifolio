interface ItemOfListProps{
    itemName: string;
    customClassName?: string;
}
export default function ItemOfList(props: ItemOfListProps) {
    return (
        <li>{props.itemName}</li>
    )
}