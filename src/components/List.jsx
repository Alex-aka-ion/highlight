import React from 'react';
import Video from "./Video";
import Article from "./Article";
import withWrapper from "../hoc/withWrapper";

const VideoWrapped = withWrapper()(Video);
const ArticleWrapped = withWrapper()(Article);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoWrapped {...item} />
                );

            case 'article':
                return (
                    <ArticleWrapped {...item} />
                );
        }
    });
};
