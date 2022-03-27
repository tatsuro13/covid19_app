 import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchAsyncGetCountry } from '../covidSlice';
 
// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       marginBottom: theme.spacing(3),
//       minWidth: 320,
//     },
//   }));

 const SwitchCountry:React.VFC = () => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const countries = [
        "japan",
        "china",
        "us",
        "france",
        "italy",
        "spain",
        "united kingdom",
        "germany",
        "russia",
        "brazil",
        "taiwan",
        "thailand",
        "new zealand",
        "sweden",
        "india",
      ];


   return (
    <FormControl sx={{width: '300px', margin: '20px'}}>
         <NativeSelect
         onChange={(e:React.ChangeEvent<HTMLSelectElement>) => dispatch(fetchAsyncGetCountry(e.target.value))}>
             {countries.map((country, i) => (
               <option key={i} value={country}>
                 {country}
               </option>
        ))}
         </NativeSelect>
     </FormControl>
   );
 }
 
 export default SwitchCountry

function theme(theme: any) {
    throw new Error('Function not implemented.');
}
