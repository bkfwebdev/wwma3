import React from 'react';

function CommunityComponent() {
  return (
    <div className="caveat">
     <h2>Join our online community!</h2>
     <p>
        Click the wisdom flower to join our exclusive online community where you can interact with Sifu Bryant and other Warrior Wisdom Students.
     </p>
     <a href = "https://warrior-wisdom-arts.mn.co/share/E2Zhmk-26d5birkI?utm_source=manual">
     <img src = {require("../images/wisdomflower.jpg")} alt = "wisdom flower"></img>
     </a>
    </div>
  );
}

export default CommunityComponent;
