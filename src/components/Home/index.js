import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-page">
      <h1 className="home-page-heading">Find The Job That Fits Your Life</h1>
      <p className="home-para">
        Millions of people are searching for jobs, salary information company
        reviews. Find the job that fit your abilities and potential.
      </p>
      <Link to="/jobs">
        <button type="button" className="logout-btn">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)
export default Home
