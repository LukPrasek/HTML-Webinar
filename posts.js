{

    const postsContainer = document.querySelector('main');

    const insertPosts = (posts) => {
        posts.forEach((post) => {
            postsContainer.insertAdjacentHTML(
                'beforeend',
                `<section>
                    <h2>${post.title}</h2>
                    <div>
                        <img src="images/mercedes.jpg" alt="Mercedes">
                        <p>
                            ${post.body}
                            <a href="mercedes.html" class="see-more">Kliknij i zobacz więcej</a>
                        </p>
                    </div>
                </section>`
            )
        });
    }


    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
        //   .then(function(response) {
        //       return response.json();
        //   })
    .then(json => {
        insertPosts(json);
    });

    {

        const postsContainer = document.querySelector('main');
    
        const insertPosts = (posts) => {
            posts.forEach((post) => {
                postsContainer.insertAdjacentHTML(
                    'beforeend',
                    `<section>
                        <h2>${post.title}</h2>
                        <div>
                            <img src="images/mercedes.jpg" alt="Mercedes">
                            <p>
                                ${post.body}
                                <a href="mercedes.html" class="see-more">Kliknij i zobacz więcej</a>
                            </p>
                        </div>
                    </section>`
                )
            });
        }
    
    
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
            //   .then(function(response) {
            //       return response.json();
            //   })
        .then(json => {
            insertPosts(json);
        });
    
    }
}