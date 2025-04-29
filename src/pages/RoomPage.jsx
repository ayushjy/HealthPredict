import React, { useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import e from 'cors';

function Roompage() {
  
  const myMeeting = async(element) =>{
    const appID = 1982616284; 
    const serverSecret = "21223ad2b8426c4a8193e10ab5cae66c"; 
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, 'ayush', Date.now().toString(), "Ayush");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks:[
        {
          name:'Copy Link',
          url : `http://localhost:3000/room`
        }
      ],
      scenario:{
        mode:ZegoUIKitPrebuilt.OneONoneCall,
      } ,
      showScreenSharingButton:false
    });
  }
   

   
  return (
    <div>
      <div ref={myMeeting}></div>
    </div>
  );
}

export default Roompage;
