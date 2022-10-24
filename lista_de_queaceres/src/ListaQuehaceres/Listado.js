import React, {useState} from "react";

const Listado = () => { 

    const textStyle = {
        textDecoration: 'line-through',
    };

    const [lista, setLista] = useState ([])
    const [input, setInput] = useState ([])
    const [checkedBoxes,setCheckedBoxes ] = useState([]);                                                                

    const agregarActividad = (actividad) => {
        const nuevaActividad = {
            id: Math.random(),
            actividad:actividad
        }

    setLista ([...lista, nuevaActividad]) 
    setInput("");   
    }


    const checkeds = (index, value) => {
        let copy = checkedBoxes;
        if (value) {
            copy.push(index);
        }

        else {
            copy = copy.filter(item => item !== index);
        }

        setCheckedBoxes ([...copy]);
        console.log(copy);
    }

    const deleteactividad = (id) => {
        const nuevaLista = lista.filter((actividad) => actividad.id !== id); 
        setLista (nuevaLista);
    }


    return (
        <div>
            <ul>
                <h1> Todos los pendientes !!!</h1>
                <input type= "text" value={input} onChange = {(e) => setInput(e.target.value)}></input>
                <button onClick={() => agregarActividad(input)}>Add</button>                
           
            </ul>
            <ul>
            {lista.map((actividad) => (
                <li key= {actividad.id}>

                    <label style={
                        checkedBoxes.includes(actividad.id)?
                        textStyle:null
                    }>{actividad.actividad}</label>
                    <input type= "checkBox" onChange ={(e) =>checkeds(actividad.id, e.target.checked)}></input>
                    <button onClick={()=> deleteactividad(actividad.id)}>delete</button>
                </li>
            )) 
        }
            </ul>
        </div>
    )
}

export default Listado