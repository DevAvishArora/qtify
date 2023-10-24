import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

import FAQ from "./components/FAQ/FAQ";
import Player from "./components/Player/Player";

function App() {
  const [data, setData] = useState([]);
  const [topAlbumsData, setAlbumsData] = useState([]);
  const [NewAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValue, setFilteredDataValue] = useState([]);
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }else if (value === 3) {
      key = "jazz";
    }else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };
  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setAlbumsData(data);
    } catch (e) {
      console.error(e);
    }
  };
  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const data = await fetchSongs();
      setSongsData(data);
      setFilteredDataValue(data);
    } catch (err) {
      console.error(err);
    }
  };
  const filteredData = (val) => {
    setFilteredDataValue(val);
  };
  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongsData();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          data={topAlbumsData}
          type="album"
          title="Top Albums"
          filteredDataValues={data}
        />
        <Section
          data={NewAlbumsData}
          type="album"
          title="New Albums"
          filteredDataValues={data}
        />
        <hr className={styles.app__horizontal} />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValue}
          value={value}
          handleChange={handleChange}
        />
         <hr className={styles.app__horizontal} />
      </div>
      <div>
        <FAQ />
      </div>

      <hr className={styles.player__horizontal}/>
      <Player />
    </div>
  );
}

export default App;
