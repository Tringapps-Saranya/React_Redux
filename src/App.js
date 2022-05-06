import  Content from './layout/Content';
import  Header from './layout/Header';
import  Footer from './layout/Footer';
import  Sidebar from './layout/Sidebar';


function App() {
  return (
    <div>
       <Header />
       <div className='main-content'>    
       <Sidebar />
       <div>
       <Content /> </div>
       </div>     
       <Footer />
    </div>
  );
}

export default App;
