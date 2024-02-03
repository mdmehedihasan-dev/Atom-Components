
/* eslint-disable react/prop-types */
const Image = ({url,altText,style}) => {
  return (
    <div>
        <img src={url} alt={altText} className={style} />

    
    </div>
  )
}

export default Image