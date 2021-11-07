


    export const getAllBlogs=(callback)=>{

        let headers = new Headers();

            headers.append('Content-Type', 'application/json'); 
            headers.append('accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Credentials', 'true');
            headers.append('Access-Control-Allow-Origin', 'no-cors')

            headers.append('cross-origin-resource-policy', 'cross-origin')
            headers.append('Access-Control-Request-Headers', 'Content-Type, Accept')


            fetch('https://jeamshiv.blogspot.com/feeds/posts/default?alt=json-in-script&callback=latestPost',{
                method: 'GET',
                headers,
            })
            .then((response)=>callback(response))
            .catch((error)=>{console.error(error)})
 
    }