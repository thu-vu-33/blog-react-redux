import React, { useEffect } from "react";
import "../../styles/Audio.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/postAction";
import { useParams } from "react-router-dom";
import { Player } from "webvtt-player";
// import TranscriptEditor from "@bbc/react-transcript-editor";

const Post = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const { id } = useParams();
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = () => {
    dispatch(getPost(id));
  };

  if (!post) {
    return <h1>loading..</h1>;
  }
  console.log("#DEBUG data ", post.title)
  return (
    <div>
      <img
        src={`https://source.unsplash.com/collection/${post.id}/1920x700`}
        alt={post.title}
        className="img-fluid"
      />
      <div className="container">
        <div className="py-5">
          <h1 className="display-4 mb-3">{post.title}</h1>
          <p className="lead">{post.body}</p>

          <Player
            audio={post.audio}
            transcript={post.transcript}
          />
          
          {/* <TranscriptEditor
            transcriptData={"https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt"}
            mediaUrl={
              "https://download.ted.com/talks/KateDarling_2018S-950k.mp4"
            }
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
