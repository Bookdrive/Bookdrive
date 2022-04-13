let book = document.getElementsByTagName('div');
let bookNum = book.length
//book.onclick
for (var i = 0; i < bookNum; i++) {
    book[i].addEventListener("click", getBookId, false);
}

function getBookId(e) {
    if (e.target.className === 'bookcard') {
        let bookId = e.target.children[0].innerText;
        fetch(`http://localhost:3000/posts/${bookId}`, { headers: { 'Access-Control-Allow-Origin': `*` } })
            .then(function (res) {
                return res.json();
            })
            .then(function (posts) {
                appendData(posts);
            })
            .catch(function (err) {
                console.log('fetchError:' + err);
            });
        document.getElementById("posts-overlay").style.display = "flex";
        document.getElementById("posts-popup").style.display = "block";
    }
    else { return }
}

function appendData(posts) {
    let obj = posts[0];
    document.getElementById("image").src = obj.image;
    document.getElementById("userId").innerText = obj.userId;
    document.getElementById("bookId").innerText = obj.bookId;
    document.getElementById("title").innerText = obj.Title;
    document.getElementById("price").innerText = obj.price;
    document.getElementById("type").innerText = obj.Type;
    document.getElementById("username").innerText = obj.username;
    document.getElementById("fileUrl").href = obj.fileUrl;
    document.getElementById("author").innerText = obj.Author;
    document.getElementById("pages").innerText = obj.Pages;
    document.getElementById("address").innerText = obj.address;
    document.getElementById("city").innerText = obj.city;
    document.getElementById("email").innerText = obj.email;
    document.getElementById("phoneNo").innerText = obj.phoneNo;

}
