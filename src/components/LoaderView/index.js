import {TailSpin} from 'react-loader-spinner'
import './index.css'

const LoaderView = () => (
  <div className="loader-div">
    <TailSpin
      height="80"
      width="80"
      color="#0074D9"
      ariaLabel="loading"
      className="loader"
    />
    <h1 className="loader-text">Loading...</h1>
  </div>
)

export default LoaderView
