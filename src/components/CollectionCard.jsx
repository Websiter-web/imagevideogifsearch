import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item)=>{
        // dispatch(removeCollection(item))
        dispatch(removeCollection(item.id)) // dispatch id because we wrote item.id != action.payload so diaptch id of item
        dispatch(removeToast())
        
    }

  return (
     <div className='w-[18vw] min-w-50 h-80 relative bg-white rounded-xl overflow-hidden'>

        <a target='_blank' href={item.url} className='h-full'>
            {item.type == 'photo' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}

            {item.type == 'video' ?<video className=' h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}

            {item.type == 'gif' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}
        </a>

        <div id='bottom' className=' w-full px-4 py-6  text-white absolute bottom-0 flex justify-between  items-center gap-2'>
            <h2 className=' text-[16px] md:text-[18px] lg:text-[20px] font-semibold capitalize h-14 overflow-hidden '>{item.title}</h2>  

            <button
            onClick={()=>{
                // console.log('removed')
                removeFromCollection(item)
            }}
             className=' bg-indigo-600 text-white rounded px-2 py-2 cursor-pointer font-medium text-[14px] '>remove</button>         
        </div>

    </div>
  )
}

export default CollectionCard