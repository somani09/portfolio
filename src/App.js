import './App.scss';
import React, {useState ,Suspense, useEffect } from 'react';
import loading from './assets/images/loading.svg'
import Main from './components/Main'

const SideBarNav = React.lazy(() => import('./components/nav/SideBarNav'));
const DropDownNav = React.lazy(() => import('./components/nav/DropDownNav'));


function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    document.addEventListener("touchstart", function() {},false);

    return () => {
      document.removeEventListener("touchstart", function() {},false);
    }
  }, [])

  return (
    <div className="App">
      {loaded?null:<div className="BackgroundImageLoader center w100 "><img src={loading} height="50px" alt="loading" /></div>}
      <Suspense fallback={<div className=""></div>}>
        <DropDownNav />
        <SideBarNav />
      </Suspense>
      <Main 
          setLoaded={setLoaded} />
    </div>
  );
}

export default App;
