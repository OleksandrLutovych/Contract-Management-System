import React, {useState} from 'react'
import {data} from "../../../users";
import {FaArrowUp, FaArrowDown} from "react-icons/fa";
import { Button, ButtonGroup, Divider, MenuButton, Stack } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";

function App() {
    const [users, setUsers] = useState(data);
    const [sorted, setSorted] = useState({sorted: "id", reversed: false});
    const [searchPhrase, setSearchPhrase] = useState("");
    const sortById = () => {
        setSorted({sorted: "id", reversed: !sorted.reversed});
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            if (sorted.reversed) {
                return userA.id - userB.id;
            }
            return userB.id - userA.id;
        });
        setUsers(usersCopy);
    };


    const sortByNumerKontraktu = () => {
        setSorted({sorted: "numer_kontraktu", reversed: !sorted.reversed});
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            if (sorted.reversed) {
                return userA.numer_kontraktu - userB.numer_kontraktu;
            }
            return userB.numer_kontraktu - userA.numer_kontraktu;
        });
        setUsers(usersCopy);
    };

    
    const renderUsers = () => {
        return users.map((user) => {
            return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.nazwa_kontrahenta}</td>
                    <td>{user.numer_kontraktu}</td>
                    <td>{user.dane_kontaktowe}</td>
                    <td>{user.rodzaj}</td>
                    <td>{user.status}</td>
                    <td>
                        
                        <Stack direction="row" spacing={1} align="center">
                    <Button
                      colorScheme="gray"
                      padding={3}
                      size="sm"
                      borderRadius="xl"
                    >
                      <ViewIcon boxSize={4} color="##fcfced" />
                    </Button>
                    <Button
                      colorScheme="cyan"
                      padding={3}
                      size="sm"
                      borderRadius="xl"
                    >
                      <EditIcon boxSize={4} color="#fcfced" />
                    </Button>
                    <Button
                      colorScheme="telegram"
                      padding={3}
                      size="sm"
                      borderRadius="xl"
                    >
                      <DeleteIcon boxSize={4} color="#fcfced" />
                    </Button>
                  </Stack>
                    </td>
                </tr>
            );
        });
    };

    const renderArrow = () => {
        if(sorted.reversed) {
            return <FaArrowUp/>;
        }
        return <FaArrowDown/>;
    };
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    }
    const onSearch=(searchTerm) => {
        setValue(searchTerm);
        console.log('search', searchTerm);
    }
    return (
    <div className="App">
        
    <div className="table-container">
        
        <div className="search-container2">
            <h4>Wyszukiwanie</h4>
            <div className="search-inner" >
                <input 
                type="text" 
                
                placeholder="Nazwa kontrahenta"   
                value={value} 
                onChange={onChange} />
                <button onClick={()=>onSearch(value)}>Pokaż</button>
            </div>

            <div className="dropdown">
                {data.filter(item => {
                    const searchTerm = value.toLocaleLowerCase();
                    const nazwa_kontrahenta = item.nazwa_kontrahenta.toLocaleLowerCase();
                    return searchTerm && nazwa_kontrahenta.startsWith(searchTerm) && nazwa_kontrahenta !== searchTerm;
                })
                .slice(0,10)
                .map((item) => (
                <div onClick={()=>onSearch(item.nazwa_kontrahenta)} className="dropdown-row"
                key={item.nazwa_kontrahenta}
                >
                    {item.nazwa_kontrahenta}</div>))}
        </div>
        
    </div>
    <Divider/>
   
        <table>
            <thead>
                
                    <tr>
                        <th onClick={sortById}>
                            <span>Id</span>
                            {sorted.sorted === "id" ? renderArrow() : null}
                        </th>

                        <th>
                            <span>Nazwa Kontrahenta</span>
                            
                        </th>

                        <th onClick={sortByNumerKontraktu}>
                        <span>Numer Kontraktu</span>
                            {sorted.sorted === "numer_kontraktu" ? renderArrow() : null}
                        </th>

                        <th>
                            <span>Dane Kontaktowe</span>
                        </th>

                        <th>
                            <span>Rodzaj</span>
                        </th>

                        <th>
                            <span>Status</span>
                        </th>
                        <th>
                            <span>Akcja</span>
            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsers()}
                    
                
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default App;


