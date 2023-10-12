
import { useState } from 'react';
import './home.css';

function Home() {
    const [ showBlog , setBlog] = useState(false);
    const handleBlog= () => {
        setBlog(true);
        setHome(false);
    };
    const [home, setHome]= useState(true);
    if(home){
        return (
           
            <div className="homepage">
              <header className="App-header">
                <div class="Title">
                  Rohin Khanapure
                </div>
                <div class = "button-container">
                <button class="homepage-button" onClick={handleBlog}>
                    Blog
                </button>
                <button class="homepage-button" onClick={handleBlog}>
                    About
                </button>
                <button class="homepage-button" onClick={handleBlog}>
                    Resume
                </button>

                </div>
                
              </header>
            </div>
          );
    }
    else if(showBlog){
        const blogStyles = {
            color: 'white',
        };
        return(<div style={blogStyles} className="blogpage">
        This is a blog
      </div>);
    }

}

export default Home;
