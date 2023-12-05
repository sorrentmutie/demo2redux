import { useRef, useState } from "react";
import { useAppDispatch } from "../store/features/store";
import { addPerson } from "../store/features/personSlice";

const Add = () => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>("")
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            dispatch(addPerson({name: name}))}}>
           <label htmlFor="name">Person Name</label>
           <input type="text" name ="name" id="name" 
                 onChange={(e) => (setName(e.target.value)) }/>
           <button type="submit" >Add Person</button>
        </form>
    )
}
export default Add