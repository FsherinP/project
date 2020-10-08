import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function Generator() {

    const classes = useStyles();


    return (
      <div >
        <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.name}
      style={{ width: "40%", marginLeft:"30%"}}
      renderInput={(params) => <TextField style={{marginTop:"5%"}} {...params} label="Enter name" variant="outlined" />}
    />

<List className={classes.root}>
    {data.map((data,i)=>(
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{color:"#FFFFFF",background:a[i]}}>
            {data.color}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={data.name} />
      </ListItem>
      ))}
    </List>
      </div>
    );
  }

  const a = [
      "#ff00ff","#ffff00","#00ffff"
  ]
  const data = [
    { name: 'Sherin', color: "#000005" },
    { name: 'Sumayya', color: "#00ff00" },
    { name: 'Sreerag', color: "#ff00ff" }
  ]
  
  export default Generator;
  