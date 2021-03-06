import React,{FC} from "react";
import { IState as IProps} from "../App";



const List: FC<IProps> = ({people}) => {


    const renderList = () => {
        return people.map((person) => {
            return (
                <li className="List">
                <div className="List_header">
                    <img className="List-img" src={person.url}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
            
        </ul>
    )
}

export default List