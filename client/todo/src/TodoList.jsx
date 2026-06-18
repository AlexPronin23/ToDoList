import Empty from './assets/Empty.png'
import Edit from './assets/Edit.svg'
import Delete from './assets/Delete.svg'
import { useState } from 'react'

const TodoList = ({post}) => {

    const[open,setOpen] = useState(false)

    return ( <>
    <h1 className="todo__content__title">Ваши задачи:</h1>

    {post.length > 0 ? (
        <ul className="todo_list">
           {post.map(({title,descr}) => (
            <li className="todo_items">

                <div className="todo_text">

                <p className="todo_title"> Название: {title}</p>
                <p className="todo_descr"> Что нужно сделать: {descr}</p>

                </div>
            
                <div className="todo_btn">

                    <input type="checkbox" className='todo_check' />

                    <button className="todo_edit">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0091 9.32736L14.4018 6.93468L14.4025 6.93398C14.7324 6.60414 14.8974 6.43916 14.9592 6.24885C15.0136 6.08133 15.0136 5.90088 14.9592 5.73337C14.8973 5.54292 14.7321 5.37769 14.4018 5.04738L12.9506 3.59625C12.6217 3.26735 12.4569 3.10257 12.2669 3.04082C12.0993 2.98639 11.9189 2.98639 11.7514 3.04082C11.5612 3.10261 11.3962 3.26759 11.0669 3.59695L11.0654 3.59837L8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736ZM8.67272 5.99106L12.0091 9.32736" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </button>
                    
                    <button className="todo_delete">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD"/>
<path d="M14.625 3.75H3.375" stroke="#CDCDCD" stroke-linecap="round"/>
<path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"/>
<path d="M10.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
<path d="M7.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
                        </svg>

                    </button>

                </div>

            </li>
           ))}
        </ul>
    ) : (
       <div className="todo_empty">
            <img src={Empty} alt="Empty" />
       </div>
    )}
     
     <div className="todo_content_btn" >
        <button className="todo_add" onClick={() => setOpen(true)}>
           <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_18_253)">
            <circle cx="29" cy="29" r="25" fill="#6C63FF"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 38.8916C27.5 39.2891 27.658 39.6704 27.9393 39.9514C28.2206 40.2325 28.6022 40.3904 29 40.3904C29.3978 40.3904 29.7794 40.2325 30.0607 39.9514C30.342 39.6704 30.5 39.2891 30.5 38.8916V29.8988H39.5C39.8978 29.8988 40.2794 29.7409 40.5607 29.4598C40.842 29.1787 41 28.7975 41 28.4C41 28.0025 40.842 27.6213 40.5607 27.3402C40.2794 27.0591 39.8978 26.9012 39.5 26.9012H30.5V17.9084C30.5 17.5108 30.342 17.1296 30.0607 16.8485C29.7794 16.5675 29.3978 16.4095 29 16.4095C28.6022 16.4095 28.2206 16.5675 27.9393 16.8485C27.658 17.1296 27.5 17.5108 27.5 17.9084V26.9012H18.5C18.1022 26.9012 17.7206 27.0591 17.4393 27.3402C17.158 27.6213 17 28.0025 17 28.4C17 28.7975 17.158 29.1787 17.4393 29.4598C17.7206 29.7409 18.1022 29.8988 18.5 29.8988H27.5V38.8916Z" fill="#F7F7F7"/>
            <defs>
            <filter id="filter0_d_18_253" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_253"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_253" result="shape"/>
            </filter>
            </defs>
        </svg>
        </button>
     </div>

     <div className={`todo_modal ${open ? 'open' : ''}`}>

        <div className="todo_modal_content">

            <h2 className="todo_modal_title">NEW NOTE</h2>

            <form className="todo_form">
                
                <div className="todo_form_content">

                    <input type="text"  placeholder='Input name note' className='todo_form_input' />
                    <input type="text" placeholder='Input descr note' className='todo_form_input' />

                </div>
            </form>

            <div className="todo_modal_btn">

                <button className="todo_modal_cancel" onClick={() => {setOpen(false)}}>Cancel</button>
                <button type='submit' className="todo_modal_apply">Apply</button>

            </div>

        </div>

     </div>

    </> );
}
 
export default TodoList;