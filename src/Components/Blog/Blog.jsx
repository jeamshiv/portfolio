import React, { useEffect, useState } from 'react'

export default function Blog() {

    const[blogData, setBlogData] = useState()

    useEffect(() => {
        window.latestPost = function (json) {
            setBlogData(json.feed.entry)
            // console.log("getting response here at blog Wale section", json.feed.entry);
            for (let index = 0; index < json.feed.entry.length; index++) {
                const element = json.feed.entry[index];
                //updating 72 image size to 300
                element.media$thumbnail["url"] = element?.media$thumbnail.url?.replace("s72-c", "s300")
            }
          };
          console.log('getting blog data from state', blogData)
    }, [blogData])
    

  return (
    <div>Blog</div>
  )
}
