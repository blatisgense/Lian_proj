/* home_back-main_filter */
let filters = document.querySelectorAll('div[data-filter]');
for (let filter of filters) {
    filter.addEventListener('click', function (e) {
        e.preventDefault();

        let catId = filter.getAttribute('data-filter');
        let workCat = document.querySelectorAll('.main_content li');

        workCat.forEach(function (c) {

            if (catId === 'all') {
                c.classList.add('filter-show-animation');
            } else {
                if (c.getAttribute('data-cat') !== catId) {
                    c.classList.remove('filter-show-animation');
                    c.classList.add('filter-hide-animation');
                } else {
                    c.classList.remove('filter-hide-animation');
                    c.classList.add('filter-show-animation');
                }
            }

        })

    });
}

/*load more*/
function loadMoreFunck() {
    let loadMoreObjects = document.querySelectorAll('li[load-more]');
    loadMoreObjects.forEach(el => {
        let LOADmoreId = el.getAttribute('load-more');
        if (LOADmoreId === 'true') {
            el.classList.remove('before_loadMore');
        }
    });
}