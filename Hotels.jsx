import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { FaHotel } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BiMessageAltDots } from "react-icons/bi";
import { FaConciergeBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFlight } from "react-icons/md";
import { CiStar } from "react-icons/ci";

export const Hotels=()=>{
    return(
        <div style={{backgroundColor:'whitesmoke',width:'350px',height:'800px',display:'flex',flexDirection:'column',borderRadius:'20px'}}>
        
            <div style={{flex:'1',display:'flex',marginLeft:'20px',marginTop:'40px'}}>
                <div style={{flex:'4'}}>
                    <a style={{fontFamily:'Arial,sans serif',fontSize:'25px'}}>Let's</a><br/>
                    <a style={{fontFamily:'Arial,sans serif',fontSize:'30px',fontWeight:'bold'}}>Explore Hotels</a>
                </div>
                <div style={{flex:'1',textAlign:'center',justifyContent:'center',fontSize:'40px',backgroundColor:'white',borderRadius:'20px',margin:'20px',}}>
                    <IoSearch />
                </div>
            </div>
            <div style={{flex:'1',marginLeft:'20px',display:'flex'}}>
                <div style={{backgroundColor:'orange',borderRadius:'20px', flex:'1',display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <div style={{flex:'2',fontSize:'30px',color:'white',paddingTop:'20px'}}><FaHotel /></div>
                    <div style={{flex:'1',fontFamily:'arial,sans serif',textAlign:'center',color:'white'}}>Hotel</div>
                </div>
                <div style={{flex:'0.2'}}></div>
                <div style={{backgroundColor:'white',borderRadius:'20px', flex:'1',display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <div style={{flex:'2',fontSize:'30px',paddingTop:'15px'}}><MdOutlineFlight /></div>
                    <div style={{flex:'1',fontFamily:'arial,sans serif',textAlign:'center'}}>Flight</div>
                </div>
                <div style={{flex:'0.2'}}></div>
                <div style={{backgroundColor:'white',borderRadius:'20px', flex:'1',display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <div style={{flex:'2',fontSize:'30px',paddingTop:'15px'}}><IoLocationOutline /></div>
                    <div style={{flex:'1',fontFamily:'arial,sans serif',textAlign:'center'}}>Place</div>
                </div>
                <div style={{flex:'0.2'}}></div>
                <div style={{backgroundColor:'white',borderRadius:'20px', flex:'1',display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <div style={{flex:'2',paddingTop:'20px',fontSize:'30px'}}><FaConciergeBell /></div>
                    <div style={{flex:'1',fontFamily:'arial,sans serif',textAlign:'center'}}>Food</div>
                </div>
            </div>
            <div style={{flex:'0.5',marginLeft:'20px',display:'flex'}}>
                <div style={{flex:'3'}}>
                    <p style={{fontFamily:'Arial,sans serif',fontSize:'25px',fontWeight:'bolder'}}>Popular Hotels</p>
                </div>
                <div style={{flex:'1',textAlign:'center'}}>
                    <p style={{fontFamily:'Arial,sans serif',fontSize:'15px',fontWeight:'bolder',color:'orange',paddingTop:'15px'}}>See all</p>
                </div>
            </div>
            <img src="https://img.freepik.com/premium-photo/double-bed-ordinary-hotel-room_1036975-258298.jpg"width={''}height={'300'}></img>
            <div style={{flex:'0.5',marginLeft:'20px'}}>
                
               
            
                <p style={{fontFamily:'Arial,sans serif',fontSize:'25px',fontWeight:'bolder'}}>Low Cost Hotels</p>
            </div>
            <div style={{flex:'1',display:'flex',marginLeft:'20px',backgroundColor:'white',borderRadius:'20px'}}>
                <div style={{flex:'1'}}>
                    <div style={{flex:'1',margin:'10px',borderRadius:'30px'}}>
                        <img src="https://i.pinimg.com/736x/53/f2/40/53f240b1941a4d5ecfd179c7091d7d1a.jpg"width={'70px'}height={'70px'}/>
                    </div>
                </div>
                <div style={{flex:'2',fontFamily:'Arial,sans serif'}}>
                    <p>Warwlck Grand Hotels</p>
                    <a><IoLocationOutline />New Yak</a><br/>
                    <a style={{}}><CiStar />5.0 (24k)<a style={{marginLeft:'60px'}}>$480/night</a></a>
                </div>
            </div>
            <div style={{border:'1px solid black',flex:'1.5',display:'flex',flexDirection:'column',marginLeft:'20px'}}>
            <div style={{border:'1px solid black',flex:'1',display:'flex'}}>
                <div style={{border:'1px solid black',flex:'1'}}></div>
                <div style={{border:'1px solid black',flex:'2'}}>
                    <a >Water Garder  Int </a>
                </div>
            </div>
                <div style={{border:'1px solid black',flex:'1',display:'flex'}}>
                    <div style={{border:'1px solid black',flex:'1'}}><IoMdHome /></div>
                    <div style={{border:'1px solid black',flex:'1'}}><FaRegHeart /></div>
                    <div style={{border:'1px solid black',flex:'1'}}><CiViewTimeline /></div>
                    <div style={{border:'1px solid black',flex:'1'}}><BiMessageAltDots /></div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                </div>
            </div>
        </div>
    )
}