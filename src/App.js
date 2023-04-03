import {Blog} from "./Blog";
import {Title} from "./Title";
import { blogData } from './mock';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <Title/>
     <Blog data={blogData}/>
    </div>
  );
}
