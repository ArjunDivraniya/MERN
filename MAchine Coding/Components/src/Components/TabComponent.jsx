import React , {useState} from 'react'



const TabComponent = () => {
   const [activeTab,setActiveTab] = useState("Home");
   const tabs = ["Home" , "About" , "Services" , "Contact"];

const HandleTabClick = (t)=> {

setActiveTab(t);
}
  return (
    <>
    <div>
       {tabs.map((t) => (
        <button key={t} onClick={() => HandleTabClick(t)} style={activeTab === t ? {fontWeight: 'bold', color:'red'} : {}}>{t}</button>
       ))}
    </div>
    <div>
        <div>{`This is ${activeTab} Content`}</div>
        
    </div>
    </>
  )
}

export default TabComponent