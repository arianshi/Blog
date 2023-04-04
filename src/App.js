import {Blog} from "./Blog";
import {Title} from "./Title";
import {ImageProfile} from './ImageProfile';
import { blogData } from './mock';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <Title/>
     <ImageProfile/>
     <Blog data={blogData}/>
    </div>
  );
}
