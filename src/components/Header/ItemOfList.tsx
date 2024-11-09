interface ItemOfListProps{
    itemName: string;
    customClassName?: string;
}
export default function ItemOfList(props: ItemOfListProps) {
    return (
        <li><a href="">{props.itemName}</a></li>
    )
}