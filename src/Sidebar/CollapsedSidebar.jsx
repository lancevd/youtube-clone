

const CollapsedSidebar = () => {
  return (
    <ul id="collapsed-sidebar" className="d-flex-row justify-content-between list-group">
            <li>
                <a href="#" className="d-flex-column align-items-center justify-content-center text-center">
                    <div className="colsp-nav-icon"><i className='bx bx-home'></i></div>
                    <div className="small">Home</div>
                </a>
            </li>
            <li>
                <a href="#" className="d-flex-column align-items-center justify-content-center text-center">
                    <div className="colsp-nav-icon"><i className='bx bx-film'></i></div><div className="small">Shorts</div>
                </a>
            </li>
            <li>
                <a href="#" className="d-flex-column align-items-center justify-content-center text-center">
                    <div className="colsp-nav-icon"><i className='bx bx-movie'></i></div><div className="small">Subscriptions</div>
                </a>
            </li>
            <li>
                <a href="#" className="d-flex-column align-items-center justify-content-center text-center">
                    <div className="colsp-nav-icon"><i className='bx bx-video'></i></div><div className="small">Library</div>
                </a>
            </li>
                
    </ul>
  )
}

export default CollapsedSidebar