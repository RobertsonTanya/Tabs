import Headers from './components/Headers';
import Tab from './components/Tab';
import './styles/App.css';
import { useState } from 'react';

const tabsContent = [
  {
    bodyText: "This is Tab Geometry",
    tabText: "Geometry"
  },
  {
    bodyText: "This is Tab Biology",
    tabText: "Biology"
  },
  {
    bodyText: "This is Tab Chemistry",
    tabText: "Chemistry"
  },
];

function App() {
  const [tabs, setTabs] = useState(tabsContent);
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <div className='tabs-container'>
        <Headers tabIndex={index} setCurrentIndex={setIndex} allTabs={tabs} />
        <Tab tabIndex={index} allTabs={tabs} />
      </div>
    </div>
  )
}

export default App;
