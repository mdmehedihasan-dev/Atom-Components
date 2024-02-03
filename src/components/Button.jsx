/* eslint-disable react/prop-types */

const Button = ({text,style,link,iconaligment}) => {
  return (
    <a href={link} className={style}>
 {iconaligment == "left"  && <span> &</span>}
    {iconaligment == "both"  && <span>&</span>}

        {text}
        {iconaligment == "right"  && <span>&</span>}
    {iconaligment == "both"  && <span>&</span>}
        
    </a>
  )
}

export default Button