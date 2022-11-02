import React from 'react'
import CollapsedSidebar from './CollapsedSidebar'
import ExpandedSidebar from './ExpandedSidebar'

const Sidebar = () => {
    
  return (
    <aside className="vh-lg-100 py-2" >
        <CollapsedSidebar />
        <ExpandedSidebar />
    </aside>
  )
}

export default Sidebar