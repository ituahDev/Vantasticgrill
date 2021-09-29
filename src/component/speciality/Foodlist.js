const Foodlist = (props) => {
    return ( 
        <div className="box">
                <img className="image"src={props.img1bg} alt="" />
                 <div className="content">
                    <img src={props.img2} alt="" />
                    <h3>{props.title}</h3>
                 
                    <ol>
                        {props.content.map((each)=>(
                            <li>{each}</li>
                        ))}

                    </ol>
                   
                </div>
            </div>
     );
}
 
export default Foodlist;