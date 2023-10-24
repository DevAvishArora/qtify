import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import "./Player.css";
import { Grid, Slider } from "@mui/material";

const Player = () => {

  return (
    <div className="footer">
    <div className="footer__left">
      <img
        className="footer__albumLogo"
        src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt="demo"
        height='50px'
        width='50px'
      />
      
        <div className="footer__songInfo">
          <h4>Memories</h4>
          <p>Maroon 5</p>
        </div>
      
    </div>

    <div className="footer__center">
      <ShuffleIcon className="footer__green" />
      <SkipPreviousIcon className="footer__icon" />
    
        <PlayCircleOutlineIcon
         
          fontSize="large"
          className="footer__icon"
        />
      
      <SkipNextIcon className="footer__icon" />
      <RepeatIcon className="footer__green" />
    </div>
    <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlayIcon />
        </Grid>
        <Grid item>
          <VolumeDownIcon />
        </Grid>
        <Grid item xs>
          <Slider aria-labelledby="continuous-slider" />
        </Grid>
      </Grid>
    </div>
  </div>
  );
};

export default Player;
