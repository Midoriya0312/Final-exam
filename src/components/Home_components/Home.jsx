import React, { useEffect, useState } from 'react'
import House_img from '../../assets/House_img.png'
import Library_img from '../../assets/Library_img.png'
import LikedSongs_img from '../../assets/LikedSongs_img.png'
import Search_img from '../../assets/Search_img.png'
import Subtract_img from '../../assets/Subtract_img.png'
import UserPlus_img from '../../assets/UserPlus_img.png'
import Close_img from '../../assets/Close_img.png'
import Union_img from '../../assets/Union_img.png'
import User_img from '../../assets/User_img.png'
import Forward_img from '../../assets/Forward_img.png'
import Back_img from '../../assets/Back_img.png'
import Play_img  from '../../assets/Play_img.png'
import Group_img  from '../../assets/Group_img.png'
import Activeheart_img  from '../../assets/activeheart_img.png'
import Screen_img  from '../../assets/Screen_img.png'
import Down_img  from '../../assets/down_img.png'
import Repeat_img  from '../../assets/Repeat_img.png'
import Random_img  from '../../assets/Random_img.png'
import Volume_img  from '../../assets/Volume_img.png'
import Component1_img  from '../../assets/Component1_img.png'
import Component2_img  from '../../assets/Component2_img.png'
import { Link } from 'react-router-dom'





export default function Home() {
  const [dataFetch, setDataFetch] = useState([]);
  const [newPlaylist, setnewPlaylist] = useState([]);
  const [secondPlaylist, setsecondPlaylist] = useState([]);
  const [thirdPlaylist, setthirdPlaylist] = useState([]);
  const [fourthPlaylist, setfourthPlaylist] = useState([]);
  const [fifthPlaylist, setfifthPlaylist] = useState([]);
  const CLIENT_ID = 'b969730243574b2fb268cc6606f275c0';
  const CLIENT_SECRET = 'a01d98443da74dad9333138e1292194a';
  const ACCESS_TOKEN = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const response =  await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
      })
      const auth = await response.json()
      localStorage.setItem('token', `${auth.token_type} ${auth.access_token}`);
    }
    fetchData()




  
  }, [])

    const getTitles = async () => {
      try {
          let response = await fetch("https://api.spotify.com/v1/browse/featured-playlists",
          {
            headers: {
              "Authorization" : ACCESS_TOKEN
            }
          }
        );
        let {playlists} = await response.json();
        setDataFetch(playlists.items);        
        // console.log(playlists.items);
        let array = playlists.items;
        } catch (error) {
         console.log(error);
       }
  }

  const getPlaylists = async () => {
    try {
        let response = await fetch("https://api.spotify.com/v1/browse/categories/toplists/playlists/?limit=6",
        {
          headers: {
            "Authorization" : ACCESS_TOKEN
          }
        }
      );
      let {playlists} = await response.json();
      setnewPlaylist(playlists.items);        
      // console.log(playlists.items);
      let array = playlists.items;
      } catch (error) {
       console.log(error);
     }
}

const secondPlaylists = async () => {
  try {
      let response = await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists/?limit=4",
      {
        headers: {
          "Authorization" : ACCESS_TOKEN
        }
      }
    );
    let {playlists} = await response.json();
    setsecondPlaylist(playlists.items);        
    // console.log(playlists.items);
    let array = playlists.items;
    } catch (error) {
     console.log(error);
   }
}

const thirdPlaylists = async () => {
  try {
      let response = await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists/?limit=4",
      {
        headers: {
          "Authorization" : ACCESS_TOKEN
        }
      }
    );
    let {playlists} = await response.json();
    setthirdPlaylist(playlists.items);        
    // console.log(playlists.items);
    let array = playlists.items;
    } catch (error) {
     console.log(error);
   }
}

const fourthPlaylists = async () => {
  try {
      let response = await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists/?limit=4",
      {
        headers: {
          "Authorization" : ACCESS_TOKEN
        }
      }
    );
    let {playlists} = await response.json();
    setfourthPlaylist(playlists.items);        
    // console.log(playlists.items);
    let array = playlists.items;
    } catch (error) {
     console.log(error);
   }
}

const fifthPlaylists = async () => {  
  try {
      let response = await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists/?limit=4",
      {
        headers: {
          "Authorization" : ACCESS_TOKEN
        }
      }
    );
    let {playlists} = await response.json();
    setfifthPlaylist(playlists.items);        
    // console.log(playlists.items);
    let array = playlists.items;
    } catch (error) {
     console.log(error);
   }
}

  useEffect(() => {
    getTitles()
    getPlaylists()
    secondPlaylists()
    thirdPlaylists()
    fourthPlaylists()
    fifthPlaylists()
  },[])



  return (  
    <div className='wrapper'>
      <div className="header">
        <div className="navbar">
            <div className="navbar_links">
                  <ul className='navbar_list'>
                    <li className='navbar_item navbar_item1 '>
                      <img src={House_img} alt="home" />
                      <a className='home' href="#">Home</a>
                    </li>
                    <li className='navbar_item'>
                      <img src={Search_img} alt="search" />
                      <a href="#">Search</a>
                    </li>
                    <li className='navbar_item navbar_item2'>
                      <img src={Library_img} alt="library" />
                      <a href="#">Your Library</a>
                    </li>
                    <li className='navbar_item'>
                      <img src={Subtract_img} alt="subtract" />
                      <a href="#">Create Playlist</a>
                    </li>
                    <Link to='/liked' className='liked'>
                      <li className='navbar_item'>
                        <img src={LikedSongs_img} alt="like" />
                        <p>Liked Songs</p>
                        
                    </li>
                    </Link>
                  </ul>
                <div className="border"></div>
            </div>
            <div className="navbar_playlists">
            <ul className='navbar_nav2'>
                    {dataFetch?.map((item) => {
                      // console.log(item);
                      return(
                        <li key={item.id} className='nav2_item'>
                          <a href="#">{item.name}</a>
                        </li>
                      ) 
                    })}
                </ul>
            </div>
        </div>
          <main>
              <section className='good_section'>
                <div className="good_button">
                  <img src={Back_img} alt="back" />
                  <img src={Forward_img} alt="back" />
                </div>
                <div className="good_title">
                  <h1>Good afternoon</h1>
                </div> 
                <div className="good_playlists">
                  <ul className='good_list'>
                        {newPlaylist?.map((item) => {
                          console.log(item);
                          return (
                            <Link to='/playlist/${item.id}'> 
                            <li key={item.id} className='good_item'>
                              <img className='good_img' src={item.images[0].url} alt="house" />
                              <h3>{item.name}</h3>
                              <div className="play_hover">
                                <img className='play_img' src={Group_img} alt="play" />
                              </div>
                            </li>
                            </Link>
                          )
                        })}
                  </ul>
                </div>
              </section>
              <section className='playlists_section'>
                <div className="playlist_title">
                  <h2 className='text1'>Your top mixes</h2>
                  <p className='text2'>SEE ALL</p>
                </div>
                <div className="playlist_examples">
                  <ul className='playlist_list'>
                    <Link to='/playlist/${item.id}'>
                      {secondPlaylist?.map((item) => {
                        return(
                          <li key={item.id} className='playlist_item'>
                            <div className="item_img">
                              <img className='play-img' src={Play_img} alt="play" />
                              <img className='image' src={item.images[0].url} alt="house" />
                            </div>
                            <h4 className='text1'>{item.description}</h4>
                            <p className='text2'>{item.name}</p>
                          </li>
                        )
                      })}      
                    </Link>
                  </ul>
                </div>

                <div className="playlist_title">
                  <h2 className='text1'>Made for you</h2>
                  <p className='text2'>SEE ALL</p>
                </div>
                <div className="playlist_examples">
                  <ul className='playlist_list'>
                  <Link to='/playlist/${item.id}'>
                      {thirdPlaylist?.map((item) => {
                        return(
                          <li key={item.id} className='playlist_item'>
                            <div className="item_img">
                              <img className='play-img' src={Play_img} alt="play" />
                              <img className='image' src={item.images[0].url} alt="house" />
                            </div>
                            <h4 className='text1'>{item.description}</h4>
                            <p className='text2'>{item.name}</p>
                          </li>
                        )
                      })}                     
                    </Link>
                  </ul>
                </div>

                <div className="playlist_title">
                  <h2 className='text1'>Jump back in</h2>
                  <p className='text2'>SEE ALL</p>
                </div>
                <div className="playlist_examples">
                  <ul className='playlist_list'>
                  <Link to='/playlist/${item.id}'>
                      {fourthPlaylist?.map((item) => {
                        return(
                          <li key={item.id} className='playlist_item'>
                            <div className="item_img">
                              <img  className='play-img' src={Play_img} alt="play" />
                              <img className='image' src={item.images[0].url} alt="house" />
                            </div>
                            <h4>{item.description}</h4>
                            <p>{item.name}</p>
                          </li>
                        )
                      })}                   
                    </Link>
                  </ul>
                </div>
                
                <div className="playlist_title">
                  <h2 className='text1'>Uniquely yours</h2>
                  <p className='text2'>SEE ALL</p>
                </div>
                <div className="playlist_examples">
                  <ul className='playlist_list'>
                  <Link to="/playlist/${item.id}">
                      {fifthPlaylist?.map((item) => {
                        return(
                          <li key={item.id} className='playlist_item'>
                            <div className="item_img">
                              <img className='play-img' src={Play_img} alt="play" />
                              <img className='image' src={item.images[0].url} alt="house" />
                            </div>
                            <h4>{item.description}</h4>
                            <p>{item.name}</p>
                          </li>
                        )
                      })}                    
                    </Link>
                  </ul>
                </div>
              </section>
          </main>
          
          <div className="activity">
              <div className="activity_title">
                <div className="title_text">
                    <h3>Friend Activity</h3>
                </div>
                <div className="title_image">
                    <img src={UserPlus_img} alt="userimg" />
                    <img className='close_img' src={Close_img} alt="close" />
                </div>
              </div>
              <span className="friend-text">
                    <p>Let friends and followers on Spotify see what you’re listening to.</p>
              </span>
              <div className="activity_images">
                <ul className='activity_list'>
                  <li className='activity_item'>
                      <img src={User_img} alt="user" />
                      <img src={Union_img} alt="union" />
                  </li>
                  <li className='activity_item'>
                      <img src={User_img} alt="user" />
                      <img src={Union_img} alt="union" />
                  </li>
                  <li className='activity_item'>
                      <img src={User_img} alt="user" />
                      <img src={Union_img} alt="union" />
                  </li>
                  <li className='activity_item'>
                    <p>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
                  </li>
                </ul>
                <div className="activity-button">
                  <button className='activity_btn'>
                    <p>SETTINGS</p>
                  </button>
                </div>
              </div>
          </div>
      </div>
      <div className="audio_section">
            <div className="audio_name">
              <span>
                <img className='audio-image1' src={Screen_img} alt="screen" />
                <img className='audio-image2' src={Down_img} alt="down" />
              </span>
              <span className='audio_span2'>
                <h4>Play It Safe</h4>
                <p>Julia Wolf</p>
              </span>
              <img className='audio-heart' src={Activeheart_img} alt="heart" />
            </div>
            <div className="audio_controls">
              <div className="topcontrols">
                <img src={Random_img} alt="random" />
                <img className='com1' src={Component1_img} alt="com1" />
                <img className='com2' src={Component2_img} alt="com2" />
                <img src={Repeat_img} alt="repeat" />
              </div>
              <div className="botcontrols">
                <p>2:39</p>
                <div className="border3"></div>
                <p>4:22</p>
              </div>
            </div>
            <div className="audio_voice">
              <img src={Volume_img} alt="volume" />
              <div className="border4"></div>
            </div>
            <audio src="" controls></audio>
      </div>
    </div>
  )
}
