import { useEffect } from "react";
import VideoJS from "./VideoJS";
import "./index.css";

const VIDEOJS_OPTIONS = {
  controls: true,
  width: 480,
  sources: [
    {
      src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
      type: "application/x-mpegURL"
    }
  ]
};

export default function App() {
  console.log("App.render");
  useEffect(() => {
    console.log("App.mount");
    return () => console.log("App.unmount");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <VideoJS options={VIDEOJS_OPTIONS} />
    </div>
  );
}
