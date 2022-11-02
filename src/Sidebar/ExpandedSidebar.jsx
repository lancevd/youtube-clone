import React from 'react'

const ExpandedSidebar = () => {
  return (
    <ul id="expanded-sidebar" className="hidden d-flex-row justify-content-between gap-3 px-4 list-group">
                <li className="active">
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-home"></i></div>
                        <div className="exp-sidebar-link-text">Home</div>
                    </a>
                </li>
                <li>
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-film"></i></div>
                        <div className="exp-sidebar-link-text">Shorts</div>
                    </a>
                </li>
                <li>
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-movie"></i></div>
                        <div className="exp-sidebar-link-text">Subscriptions</div>
                    </a>
                </li>
                <li>
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-video"></i></div>
                        <div className="exp-sidebar-link-text">Library</div>
                    </a>
                </li>
                <li>
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-history"></i></div>
                        <div className="exp-sidebar-link-text">History</div>
                    </a>
                </li>
                <li>
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-video-plus"></i></div>
                        <div className="exp-sidebar-link-text">Your Videos</div>
                    </a>
                </li>
                <li>
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-time"></i></div>
                        <div className="exp-sidebar-link-text">Watch later</div>
                    </a>
                </li>
                <li>
                    <a href="#" className="d-flex align-items-center justify-content-around gap-3">
                        <div className="expd-icon"><i className="bx bx-like"></i></div>
                        <div className="exp-sidebar-link-text">Liked Videos</div>
                    </a>
                </li>
            </ul>
  )
}

export default ExpandedSidebar