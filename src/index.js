import React, {Component} from 'react'; //get react library
import ReactDOM from 'react-dom'; //ger reactDom library
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBgheybYmLkcEZmsw_AnS75BnNlWzE1qrU'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            }); //this.setState({videos: videos}) when key and values are the same
        })
    }
    render() { //this function will not wait for server response
    return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />  
            {/* passing data (aka props) from parent element APP to child element Videolist */}
        </div>
        );
    };
}



ReactDOM.render(<App/>, document.querySelector('.container')); //go find the div with container class, and put (render) App component there.



//NOTES:

//Create a new component that produces HTML

// const App = function() { 
//     return <div>Hi!</div>; //jsx - dialect of JS- babel translates for browser
// } //this is a type/class of component - not an instance

//Take this comoponent's HTML and put it on the DOM

// React.render(App);  //produces React is not defined, must excplicitly as for it. See line 1
                //after adding Line 1 still get the following: "ReactDOM.render(): Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement."

//after adding line 2
// ReactDOM.render(App); // now we get: "Uncaught Error: ReactDOM.render(): Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement."

//To fix - create instance and pass through render method:

// ReactDOM.render(<App />); //new error: _registerComponent(...): Target container is not a DOM element. inw - doesn't know where to put it.
                            //needs place as 2nd arguement

// above App function in ES6 syntax: