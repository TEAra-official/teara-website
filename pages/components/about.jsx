import { BrowserRouter, Route, Link } from 'react-router-dom'
import AboutDetail from '../about.js' 

export default function About() {
  return (
      <BrowserRouter>
        <div>
            <Link to='../about'>About</Link>
            <Route path='../about' component={AboutDetail} />
        </div>
      </BrowserRouter>
  );
}
