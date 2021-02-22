import React,{useState,useEffect,useCallback} from 'react';
import {
    CardsContainer,
    CardsCardshort,
    CardsCardInfo,
    CardsCardIcon
  } from './../../components/Cards/Cards.elements';
  import { Button,Search } from '../../globalStyles';
  import * as firebase from "firebase";
  import firebaseConfig from './firebase.config';


  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Short() {

    const [URL, setURL] = useState("");
    const [result,setResult]=useState("");
    const [res,setRes]=useState("");
    const [copy,setCopy]=useState("");
    const [allFetched, setAllFetched ]=useState(false);
    

    async function handleSubmit(){
        await fetch("https://api.shrtco.de/v2/shorten?url=" + URL)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setResult(data.result.full_short_link);
            setRes(data.result.original_link);
            data = {
                'url': URL,
                'shortened': data.result.full_short_link
            }
            const db = firebase.database().ref().child("folks").push(data);
            setAllFetched(true);
        });

        console.log(result);
    }

    useEffect(() => {
        console.log("check");
    }, [result]);


    /*function handlecopy(){
        setCopy={result};
    }*/

    return (
        <div>
            <CardsContainer stly={{backgroundColor:"#fff"}}>
            <CardsCardshort style={{width:"90%",height:"20%",margin:"-4%"}}>
              <CardsCardInfo >
              <Search style={{border: "none"}}>
                <form style={{ display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                <input 
                type="text"
                placeholder="Shorten a link here" 
                style={{borderRadius:"10px",width:"100%",border:"none"}}
                id="URL"
                name="URL"
                value={URL}
                onChange={e => setURL(e.target.value)}

                    />
                
                </form>
                </Search>
                <Button style={{ borderRadius: "5px"}} onClick={handleSubmit}>
                    Shorten it!
                </Button>
                
                </CardsCardInfo>
            </CardsCardshort>
            </CardsContainer><br></br><br></br><br></br>
            <CardsContainer style={{backgroundColor:"#fff"}}>
            <CardsCardshort style={{width:"90%",height:"20%",margin:"4%",}}>
            <CardsCardInfo style={{textDecoration:"none", marginLeft:"0",backgroundColor:"#fff"}}>
            <div style={{width:"90%",display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                <p>
                <a href={res}>{res}</a>
                </p>
                <p>
                <a href={result}>{result}</a>
                </p>
                <Button style={{ alignItems: "right",borderRadius: "5px",marginLeft:"10px", }} /*onClick={handlecopy}*/>
                    Copy
                </Button>    
            </div>
                
            </CardsCardInfo>
            </CardsCardshort>
            </CardsContainer><div></div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
           
        </div>
    )
}

export default Short;
