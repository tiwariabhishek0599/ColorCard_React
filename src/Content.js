function Content(props){
    let user="Abhishek";
    console.log(props);
    return(
        
        <section>
            <article>
                {/* lorem ipsum dor sit amet */}
                <p>value of a={props.a}</p>
                
                <p>value of b={props.b}</p>

                <p>has Driving Lisc.={String(props.hasDL)}</p>

                <p>marks={props.marks + " "}</p>

                <p>marks={props.marks[2]}</p>

                <p>DOB={JSON.stringify(props.DOB)}</p>

                <p>Day={props.DOB.day}</p>
                <hr></hr>
                
            </article>
            {/* {user} */}
        </section>
    );
}
export default Content;