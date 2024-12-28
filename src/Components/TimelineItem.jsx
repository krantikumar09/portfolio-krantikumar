import {  faCalendarAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TimelineItem = ({ title, place, duration, type }) => {

  return (
    <div  className='mb-6 pb-2 border-b border-gray-200 reveal-up'>
        <div className='flex items-center justify-between gap-2 mb-2'>
            <h4 className='heading4 max-w-[70%] w-full'>{title}</h4>
            <span className="badge">{type}</span>
        </div>
        <div className='flex flex-items-center justify-between flex-col sm:flex-row items-start sm:items-center gap-2'>
            <p className='small-text'><FontAwesomeIcon icon={faLocationDot}/> {place}</p>
            <p className='small-text'><FontAwesomeIcon icon={faCalendarAlt}/> {duration}</p>
        </div>
    </div>
  )
}

export default TimelineItem