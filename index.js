const express=require("express");
const _=require("lodash");
const axios=require("axios");
const app=express();
let blogData=null;
async function fetchBlogData() {
    try {
      const response = await axios.get(
        'https://intent-kit-16.hasura.app/api/rest/blogs',
        {
          headers: {
            'x-hasura-admin-secret':
              '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
          },
        }
      );
      blogData = response.data;
    } catch (error) {
      console.error('error fetching blog data: ', error.message);
      throw error; // Propagate the error
    }
  }

//step 4 se karna he....try ejs and body parser maybe. line 13
app.get("/",function(req,res){
    res.send("<h1>Just set up my appliation for assignment</h1>");
})

app.get("/api/blog-search",function(req,res){
    const query=req.query.query;
    if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: 'Invalid query parameter' });
      }
    
      if (blogData) {
        // If blogData is available, use it for searching
        const matchingBlogs = blogData.blogs.filter((blog) =>
          blog.title.toLowerCase().includes(query.toLowerCase())
        );
        res.json(matchingBlogs);
      } else {
        //if blog data not available, fetch it and then do the search functionality
        fetchBlogData();
        res.redirect('/api/blog-search?query='+query);
      }
})

app.get("/api/blog-stats",async(req,res)=>{
    try{
        const response=await axios.get(
            'https://intent-kit-16.hasura.app/api/rest/blogs',
            {
                headers:{
                    'x-hasura-admin-secret':
                    '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
                },
            }
        );
        blogData=response.data;
        //data analysis using lodash
        const totalBlogs = _.size(blogData.blogs); //getting total number of blogs
        const longestBlog = _.maxBy(blogData.blogs, function(l){return _.size(l.title)}); //finding the blog with the longest title
        const blogsWithPrivacy = _.filter(blogData.blogs, (blog) => {
            if (typeof blog.title === 'string') {
              return _.includes(blog.title.toLowerCase(), 'privacy');
            }
            return false;
          }); //getting blogs that contain 'privacy' in its title

        const uniqueBlogTitles = _.uniqBy(blogData.blogs, 'title');//creating an array of unique blog titles

        //response with analytics data
        res.json({
            totalBlogs,
            longestBlog,
            blogsWithPrivacy: _.size(blogsWithPrivacy), //getting size of blogs with privacy
            uniqueBlogTitles,
          });
    }catch(error){
        console.error("error : ",error.message);
        //error handling and sending response accordingly
        res.status(500).json({error:'error occured while fetching blog data'});
    }
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
})