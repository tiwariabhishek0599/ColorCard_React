import logo from "./logo.svg";
import "./App.css";
// import Header from "./Header";
// import Content from "./Content";
import ColorCard from "./Components/ColorCard";

function App() {
  // let userName = "Abhishek";
  return (
    <div className="App">
      {/* <Header /> */}
      {/* {Header()} */}
      {/* <h1>Heading 1</h1> */}
      {/* {userName} */}
      {/* <Content
        a="10"
        b="20"
        c="30"
        d={40}
        hasDL={true}
        marks={[10, 20, 30, 40]}
        DOB={{day:15,month:"feb",year:2000}}
      /> */}
      {/* <Content a="30" b="40" hasDL={false} />
      <Content a="50" b="60" /> */}




      {/* Card */}


      <div
      style={{
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"wrap",
        margin:"30px"
      }}>
      <ColorCard colorCode="#FF6663" colorName="PINK"/>
      <ColorCard colorCode="#333333" colorName="GRAY"/>
      <ColorCard colorCode="#000000" colorName="BLACK"/>
      <ColorCard colorCode="#38BB14" colorName="GREEN"/>
      <ColorCard colorCode="#C90B0B" colorName="RED"/>
      <ColorCard colorCode="#FF8000" colorName="ORANGE"/>
      <ColorCard colorCode="#FFF500" colorName="YELLOW"/>
      <ColorCard colorCode="#CCCCCC" colorName="LIGHT GRAY"/>
      <ColorCard colorCode="#7E41A2" colorName="PURPLE"/>
      <ColorCard colorCode="#C14911" colorName="BROWN"/>
  
      </div>



    </div>
  );
}

export default App;
