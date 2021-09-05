import React from 'react'
import "./Definiton.css"
 

const Definiton = ({word, meanings, category,LightMode}) => {
    return (
        <div className = " meanings">
            {
                meanings[0] && word && category === "en" && (
                    <audio 
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} style={{backgroundColor:"pink", borderRadius:"10"
                        }}
                        controls>
                        "your browser doesnt support audio component"
                    </audio>
                )
                }
            { word == " " ?
                (<span className = "subtitle" >start searching a word in search</span> )
                :(
                    meanings.map((mean) =>(
                        mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div className="singlemeaning" style ={{backgroundColor:LightMode?"#3b5360":'white', 
                            color:LightMode?"white":"black"}}>
                              <b> {def.definition}</b> 
                              <hr style= {{backgroundColor:"black", width:"100%"}}/>{
                                  def.example && (
                                      <span >
                                          Example : {def.example}
                                      </span>
                                  )
                              }
                              {def.synonyms && (
                                  <span>
                                      Synonyms : {def.synonyms.map((syn) => `${syn}, `)}
                                  </span>
                              )
                              }
                            </div>
                        )))
                        ))
                    )
                       
                )
            
            }
        </div>
    )
}

export default Definiton
