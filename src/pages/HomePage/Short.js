import React,{useState,useEffect,useCallback} from 'react';
import {
    CardsContainer,
    CardsCardshort,
    CardsCardInfo,
    CardsCardIcon
  } from './../../components/Cards/Cards.elements';
  import { Button } from '../../globalStyles';


function Short() {

    const [URL, setURL] = useState("");
    const [result,setResult]=useState("");
    const [allFetched, setAllFetched ]=useState(false);
    

    async function handleSubmit(){
        await fetch("https://api.shrtco.de/v2/shorten?url=" + URL)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setResult(data.result.short_link);
            setAllFetched(true);
        });

        console.log("here" , result);
    }

    useEffect(() => {
        console.log("check");
    }, [result]);
    return (
        <div>
            <CardsContainer >
            <CardsCardshort style={{width:"90%",height:"20%",margin:"-4%"}}>
              <CardsCardInfo>
                <CardsCardIcon style={{backgroundColor:"#232127"}}>
                </CardsCardIcon>
                <form>
                <input 
                type="text" 
                placeholder="Shorten a link here" 
                style={{height:"44px", width:"600px",borderRadius:"10px",marginRight:"10px"}}
                id="URL"
                name="URL"
                value={URL}
                onChange={e => setURL(e.target.value)}
                autoFocus

                    />
                <Button style={{ borderRadius: "5px"}} onClick={handleSubmit}>
                    Shorten it!
                </Button>
                </form>
                Short Link:<a style={{textDecoration:"none"}} href={result}>{result}</a>
                </CardsCardInfo>
            </CardsCardshort>
            </CardsContainer>
        </div>
    )
}

export default Short;
