function Movie(img, title, rate, lastUpdate, runTime) {
    this.img = img
    this.title = title
    this.rate = rate
    this.lastUpdate = lastUpdate
    this.runTime = runTime
}

const moviesInfo = [];
moviesInfo.push(new Movie('img/avengers.jpg', 'Avengers: Endgame', '8.8', 'SUN 8 SEPT - 10:00PM', '2HR 09MIN'));
moviesInfo.push(new Movie('img/hobbs-and-shaw.jpg', 'Hobbs & Shaw', '9.7', 'TUE 4 JULY - 05:00PM', '2HR 13MIN'));
moviesInfo.push(new Movie('img/john-wick-3.jpg', 'John Wick 3', '9.8', 'WED 16 Aug - 07:00PM', '2HR 33MIN'));
moviesInfo.push(new Movie('img/deadpool-2.jpg', 'Deadpool2', '7.3', 'MON 16 OCT - 10:00PM', '2HR 0MIN'));
moviesInfo.push(new Movie('img/the-lion-king.jpg', 'The Lion King', '8.1', 'SUN 8 SEPT - 10:00PM', '2HR 36MIN'));
moviesInfo.push(new Movie('img/mad-max.jpg', 'Mad Max: Fury Road', '7.4', 'TUE 4 JULY - 05:00PM', '2HR 19MIN'));
moviesInfo.push(new Movie('img/aquaman.jpg', 'Aquaman', '8.1', 'WED 16 Aug - 07:00PM', '2HR 14MIN'));
moviesInfo.push(new Movie('img/mission-impossible.jpg', 'Mission Impossible', '7.8', 'MON 16 OCT - 10:00PM', '2HR 33MIN'));


const cardView = (cardInfo) => {
    return `
<div class="card-view">
     <div class="card">
     
        <!--card image-->
        <div class="card__image" style="background-image: url(${cardInfo.img}); background-size: cover ">
            <a href="#">
            <i class="material-icons card__playIcon">play_arrow</i>
            </a>
        </div>
        
        <!--card content -->
        <div class="card__content">
            <div class="card__content--head">
                <a href="#">
                   <h3 class="card__content--title">${cardInfo.title}</h3>
                </a>
                <div class="card__content--rate"><span>${cardInfo.rate}</span>/10</div>
            </div>
            <div class="card__content--info">
                <div class="movie-lastUpdate">
                    <label>Last update</label>
                        <span>${cardInfo.lastUpdate}</span>
                </div>
                <div class="movie-lastUpdate">
                    <label>Running time</label>
                        <span>${cardInfo.runTime}</span>
                </div>
            </div>
        </div>
    </div>
</div> 
`
}

const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    })
}


const cardContainer = document.getElementById('container')
cardContainer.innerHTML = generateCards(moviesInfo)


function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = moviesInfo.filter(card => {
        return card.title.includes(searchTerm) || card.rate.includes(searchTerm) || card.lastUpdate.includes(searchTerm) || card.runTime.includes(searchTerm)
    })
    cardContainer.innerHTML = generateCards(filteredCards)
}