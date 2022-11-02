import React from 'react'
import PlayingDetails from './PlayingDetails'

const PostVideoSection = () => {
  return (
    <div className="playing-split p-3">
        <div className="playing-left">
            <PlayingDetails />
        </div>
        <div className="playing-right">
                        <div className="p-right-top">
                            <div className="tags gap-3 py-3 d-flex justify-content-between overflow-hidden">
                                <div className="tag active">All</div>
                                <div className="tag">Scene</div>
                                <div className="tag">Thriller</div>
                                <div className="tag">Martial</div>
                                <div className="tag">Horror</div>
                                <div className="tag">Javascript</div>
                            </div>
                        </div>

                        <div className="playing-right-prevs">
                            <div className="card mb-3" style={{maxWidth: '540px'}}>
                                <div className="row g-0">
                                  <div className="col-md-4">
                                    {/* <img src={} alt="..."> */}
                                  </div>
                                  <div className="col-md-8">
                                    <div className="card-body">
                                      <h5 className="card-title">Card title</h5>
                                      <p className="card-text">Channel Name</p>
                                      <p className="card-text"><small className="text-muted">20k Views • 1 year ago</small></p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default PostVideoSection