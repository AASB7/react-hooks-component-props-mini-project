import Article from "./Article";

function ArticleList({ posts }) {
console.log(posts)
const pas= posts.map((post) => 
                <Article  key={post.id} 
                title={post.title}
                 date={post.date ||"January 1, 1970"} 
                 preview={post.preview} 
                 minutes={post.minutes}/> 
    )
return (
    <main>
{pas}
    </main>
);
}

export default ArticleList;