import React from 'react'
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
import Userliked_img from '../../assets/userliked_img.png'
import bgLiked_img from '../../assets/bgliked_img.png'
import Circle_img from '../../assets/circle_img.png'
import Play_img from '../../assets/Play_img.png'
import Heart_img from '../../assets/Heart_img.png'
import Download_img from '../../assets/Download_img.png'
import Options_img from '../../assets/Options_img.png'
import Arrow_img from '../../assets/arrow_img.png'
import Clock_img from '../../assets/Clock_img.png'
import Waves_img from '../../assets/waves_img.png'
import Pausehover_img from '../../assets/Pausehover_img.png'
import Playhover_img from '../../assets/Playhover_img.png'
import Activeheart_img  from '../../assets/activeheart_img.png'
import Screen_img  from '../../assets/Screen_img.png'
import Down_img  from '../../assets/down_img.png'
import Repeat_img  from '../../assets/Repeat_img.png'
import Random_img  from '../../assets/Random_img.png'
import Component1_img  from '../../assets/Component1_img.png'
import Component2_img  from '../../assets/Component2_img.png'
import Volume_img  from '../../assets/Volume_img.png'

import { Link } from 'react-router-dom'

export default function Liked() {
  return (
    <div className='wrapper'>
    <div className="header">
      <div className="navbar">
          <div className="navbar_links">
                <ul className='navbar_list'>
                  <li className='navbar_item navbar_item1 '>
                    <img src={House_img} alt="home" />
                    <Link to='/'>
                      Home
                    </Link>
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
                  <li className='navbar_item'>
                    <img src={LikedSongs_img} alt="like" />
                    <a href="#">Liked Songs</a>
                  </li>
                </ul>
              <div className="border"></div>
          </div>
          <div className="navbar_playlists">
          <ul className='navbar_nav2'>
                <li className='nav2_item'>
                  <a href="#">Chill Mix</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Insta Hits</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Your Top Songs 2021</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Mellow Songs</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Anime Lofi & Chillhop Music</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">BG Afro “Select” Vibes</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Afro “Select” Vibes</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Happy Hits!</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Deep Focus</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Instrumental Study</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">OST Compilations</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Nostalgia for old souled mill...</a>
                </li>
                <li className='nav2_item'>
                  <a href="#">Mixed Feelings</a>
                </li>
              </ul>
          </div>
      </div>
        <main className='main3'>
            <div className="liked_section">
              <div className="liked_title">
                <div className="liked_button">
                  <img src={Back_img} alt="back" />
                  <img src={Forward_img} alt="back" />
                </div>
                <div className="liked_user">
                  <button className='user_button'>
                    <img className='user_img' src={Userliked_img} alt="user" />
                    <p>davedirect3</p>
                    <img src={Arrow_img} alt="arrow" />
                  </button>
                </div>
              </div>
              <div className="liked_play">
                <div className="liked_img">
                  <img src={bgLiked_img} alt="like" />
                </div>
                <div className="liked_text">
                  <h4>PUBLIC PLAYLIST</h4>
                  <h2>Liked Songs</h2>
                  <p>Julia Wolf, ayokay, Khalid <span>and more</span></p>
                  <p className='text'><span><img src={Userliked_img} alt="user" /></span> davedirect3 <span> <img src={Circle_img} alt="circle" /> </span> 34 songs</p>
                </div>
              </div>
              <div className="liked_playlists">
                  <div className="liked_settings">
                    <div className="settings_img">
                      <img className='play' src={Play_img} alt="play" />
                      <img className='heart' src={Heart_img} alt="heart" />
                      <img src={Download_img} alt="download" />
                      <img src={Options_img} alt="options" />
                    </div>
                    <div className="settings_img2">
                      <img src={Search_img} alt="search" />
                      <p>Custom order</p>
                      <img src={Arrow_img} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="song_playlist">
                  <div className="song_title">
                    <ul className='song_list'>
                      <li className='song_item song_item2'>
                        <p>#</p>
                        <p>TITLE</p>
                      </li>
                      <li className='song_item'>
                        <p>ALBUM</p>
                      </li>
                      <li className='song_item'>
                        <p>DATE ADDED</p>
                      </li>
                      <li className='song_item'>
                        <img src={Clock_img} alt="clock" />
                      </li>
                    </ul>
                  </div>
                  <div className="border2"></div>
                  <div className="song_play">
                    <ul className='play_list'>
                      <li className='play_item1'>
                        <img className='pausehover' src={Pausehover_img} alt="pause" />
                        <img className='playhover' src={Playhover_img} alt="play" />
                        <img className='waves-img' src={Waves_img} alt="waves" />
                        <p>1</p>
                        <img src={Search_img} alt="search" />
                        <span className='item-span'>
                          <h4>Play It Safe</h4>
                          <h5>Julia Wolf</h5>     
                        </span> 
                      </li>
                      <li className='play_item2'>
                        <p>Play It Safe</p>
                      </li>
                      <li className='play_item3'>
                        <img className='heart_img' src={Activeheart_img} alt="heart" />
                        <p>2 : 12</p>
                        <img className='options-img' src={Options_img} alt="options" />
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </main>
        
        <div className="activity">
            <div className="activity_title">
              <div className="title_text">
                  <h3>Friend Activity</h3>
              </div>
              <div className="title_image">
                  <img src={UserPlus_img} alt="userimg" />
                  <img src={Close_img} alt="close" />
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
