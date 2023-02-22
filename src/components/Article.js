function Article({ title, date, preview ,minutes}) {

    return (
        <article>
            <h3 className="title">{title}</h3>
            <small>{date} {minutes}</small>
            <p>{preview} </p>
        </article>
    );
}

export default Article;