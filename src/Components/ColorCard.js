

function ColorCard(props) {
  return (
    <div 
    style={{
        height:"280px",
        width:"17%",
        border:"1px solid black",
        marginBottom:"40px",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start"
    }}
    >
      <div
      style={{
        height:"220px",
        width:"100%",
        backgroundColor:props.colorCode,
      }}
      ></div>
      <h2
      style={{
        paddingLeft:"10px"
      }}
      >{props.colorCode}</h2>
      <span
      style={{

        paddingLeft:"10px",
        color:props.colorCode
      }}
      >{props.colorName}</span>
    </div>
  );
}
export default ColorCard;
