import React from "react";
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const InstaFeed = () => {
  return <InstagramFeed token="your_access_token"  counter="6"/>  
}

export default function About(){
    return(
        <div  style={{

        }}>
        <h1>About Me</h1>
        <div className="m-5 text-justify">
        <p>Eventually, you do plan to have dinosaurs on your dinosaur tour, right? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Just my luck, no ice. Must go faster... go, go, go, go, go! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!</p>
        <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. You know what? It is beets. I've crashed into a beet truck. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! So you two dig up, dig up dinosaurs?</p>
        <p>So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard!</p>
        <p>Must go faster... go, go, go, go, go! This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. I gave it a cold? I gave it a virus. A computer virus.</p>
        </div>
        <h2>My Instagram Feed</h2>

        </div>
    );
}