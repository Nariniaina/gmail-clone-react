import React from 'react'
import './SidebarOption.css'

// To do front condition
// {(!number) ? (
//     <p>0</p>
// ) : (
//  <p>{number}</p>
// )} 

// old code
// function SidebarOption({Icon, title, number}) {
//     return (
//         <div className='sidebarOption'>
//             <Icon />
//             <h3>{title}</h3>
//             {(number) ? (
//                 <p>0</p>
//             ) : (
//              <p>{number}</p>
//             )
//             } 
//         </div>
//     )
// }

// we need to add some props in our selected
function SidebarOption({Icon, title, number, selected}) {
    return (
        // Active if selected is true
        <div className={`sidebarOption ${selected && `sidebarOption--active`}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
