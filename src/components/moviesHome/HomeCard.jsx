// import cardPoster from '../../images/Extraction-2-poster.jpg'
import { useNavigate, Link } from "react-router-dom"

const HomeCard = (props) => {
  const navigate = useNavigate();

  const cardTitle = document.getElementsByClassName('card-title');
  
  function sliceTitle() {
    
    for (let i=0; i<cardTitle.length; i++ ) {
     let newTitle = cardTitle[i].textContent.slice(0, 30)+'...'
     if (cardTitle[i].textContent.length > 20) {
      cardTitle[i].textContent = newTitle
    }
    }

  }

  sliceTitle()

    // console.log(props)
    const Title = props.movieTitle
    const Poster = props.moviePoster
    const Type = props.type
    const Year = props.year
    const id = props.id
  return (
    <div className="card">
        <a href="playing.html">
        <Link to={`/watch?watchid=${props.id}`}><img src={Poster} className="card-img-top" alt="Movie poster" /></Link>
        </a>
        <div className="card-body">
            <Link to= {`/watch?watchid=${props.id}`}> <h6 className="card-title"> {Title} </h6> </Link>
            <p className="card-text d-flex gap-2 align-items-center">{Type} <i className="bx bx-check-circle"></i> </p>
          <p className="card-text">{props.views} views • <span className="upload-date">{new Date(Year).toLocaleString('en-Us', {day: 'numeric', month: 'long', year: 'numeric'} )}</span></p>
        </div>
    </div>
  )
}

export default HomeCard