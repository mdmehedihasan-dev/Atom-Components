/* eslint-disable react/prop-types */



const Heading = (props) => {
  return (
    props.as 
    ? 
    <props.as className={props.style}>
    {props.iconaligment == "left"  && <span>@</span>}
    {props.iconaligment == "both"  && <span>@</span>}
        {props.text}
        {props.iconaligment == "both"  && <span>@</span>}
        {props.iconaligment == "right"  && <span>@</span>}
    </props.as>
    : 
    <h1 className={props.style}>
        {props.iconaligment == "left"  && <span>@</span>}
        {props.iconaligment == "both"  && <span>@</span>}
        {props.text}
        {props.iconaligment == "right"  && <span>@</span>}
        {props.iconaligment == "both"  && <span>@</span>}
        </h1>
  )
}

export default Heading