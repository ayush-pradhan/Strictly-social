function loadArticles() {
    $.get('/api/posts', (posts) => {
        for( let p of posts){
            // console.log(p)
                // $('.card-title').text(p.title)
                // $('.card-text').text(p.body)
            $('#posts-container').append(
                $(` 
                    <div class="col-4">
                        <div class="card m-2" style=" z-index: -1;">
                            <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <div class="card-info">
                                    <h6 class="card-subtitle mb-2 text-muted">
                                        ${p.user.username}
                                    </h6>
                                    <p class="card-text">
                                        ${p.body.substr(0, 200)}<a href="#">...read more</a>
                                    </p>
                                </div>
                                <a href="#" class="card-link">Comment</a>
                                <a href="#" class="card-link">Like</a>
                            </div>
                        </div>
                    </div>
                `)
            )
        }
    })
}
