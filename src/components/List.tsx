import { useAppSelector } from "../store/features/store"

const List = () => {
    const people = useAppSelector(state => state.person.people)
    return (
        <div>
           {
             people.map((person) => 
                 <p key={person.id}>{person.id} {person.name}</p>)
           }
        </div>
    )
}
export default List