'use strict';

class Cookie {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;
    }

    cookieData() {
        this.people = [];
        for(let i = 0; i < 15; i++) {
            let tempAvg = Math.random() * (parseInt(this.max) - parseInt(this.min)) + parseInt(this.min);
            this.people.push(tempAvg);
        }
        this.cookies = [this.location];
        for(let i = 0; i < this.people.length; i++) {
            this.cookies.push(parseInt(this.people[i] * this.avg));
        }
    }

    renderMe() {
        render(this.cookies, 'body', 'body-data');
    }

}