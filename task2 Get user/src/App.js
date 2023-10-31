
import './App.css';
import Header from './Header';
import Getuser from './Getuser';

import React , {useState} from 'react'
const App=()=>{
  const [users, setUsers] = useState([]);
const loadUsers  = async ()=>{
  console.log('before');
  const response= await fetch ("https://api.github.com/users");
  const jsonResponse = await
  response.json();
  setUsers(jsonResponse);
};
  return (
    <div className="App">
     <Header/>  
<div class="buton">
  <button onClick={loadUsers}>Get user</button>
</div>

     <div className="main">
     { 
      users.map((element) =>{
return(
  <Getuser 
  id={element.id}
  login={element.login}
  node_id = {element.node_id}
  avatar= {element.avatar_url}
  starred_url = {element.starred_url}
  subscriptions_url={element.subscriptions_url}
  organizations_url={element.organizations_url}
  repos_url = {element.repos_url}
  events_url= {element.events_url}
  received_events_url = {element.received_events_url}
  type= {element.type}
  site_admin = {element.site_admin}

  




  />
)
}  
 )
}

     </div>
    </div>

  );
}

export default App;
