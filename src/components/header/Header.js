import React from 'react'
import './Header.css';
import { TextField , createTheme, ThemeProvider, MenuItem} from '@material-ui/core';
import categories from '../../data/categories';

const Header = ({setCategory, category, word, setWord, LightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary :{
                main :LightMode ? "#000":'#fff'
            },
          type: LightMode ? 'light' : 'dark',
        },
      });

      const handleChange = (language) => {
            setCategory(language)
            setWord('')
      }

    return (
        <div className= 'header'>
         <span className = 'title'>{word ? word : 'Word Hunt'}</span>   
            <div className = 'input'>
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" className= 'search' label="Search a Word" 
                        value ={word} onChange ={e =>setWord(e.target.value)} />
                    <TextField
                    select
                    className = 'select'
                    label = 'language'
                    value= { category }
                    onClick = { e => handleChange(e.target.value)}
                    
                    helperText="Please select the language">
                        {
                            categories.map((option) => (
                                <MenuItem key ={option.label} value ={option.label}>
                                {option.value}
                                </MenuItem>
                             ))
                        }
                    
                        
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
