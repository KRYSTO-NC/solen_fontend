import './Tag.css'
function Tag({txt, backgroundColor, textColor}) {
  return (
    <div className='tag' style={{ backgroundColor: backgroundColor, color: textColor }}>
      {txt}
    </div>
  )
}

export default Tag
