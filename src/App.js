 import React, { useEffect } from "react"
import "./App.css";
import SearchNavbar from "./Components/SearchNavbar/SearchNavbar";
import Data from "./Components/Data";
import  {useState} from "react";
import List from "./Components/List/List";
import Description from "./Description/Description";
import { Route ,Switch } from "react-router-dom";
import { Fragment } from "react";


function App() {
  const [List,setMList] =useState(Data);
  const [searchInput,setSearchInput] = useState(""); 
  const [searchRating,setSearchRating]=useState(0);
  const[newM,setM] = useState({});
  const[firstRender,setFirstRender]= useState(true);

  useEffect(() => {
    !firstRender
    ? setMList([...List,newM])
         : console.log("this is the firstrender")
   // eslint-disable-next-line‏
  }, [newM]);
  
  return (
    <div className="App">
      <Switch>
        <Route
        exact
        path="/"
        render={() => (
        <Fragment>
    <SearchNavbar
     setSearchInput= {setSearchInput}
     setSearchRating= {setSearchRating} 
     />
    <List
     mList= {mList}
     searchInput={searchInput}
     searchRating ={searchRating}
     setN={setN}
     setFirstRender={setFirstRender}
     />
     </Fragment>
     )}
     />
     <Route 
      path="/m/:id"
      render={({match})=> (
       <Description match={match}  List={List}/> 
      )}
      />
     </Switch>
   </div>
 );
        }
export default App;