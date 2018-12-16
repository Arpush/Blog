const BlogApi = {
    posts: [
        {
            number: 1,
            title: ' Donec elementum dusi semper,pretium dui quis, pretium nisl.',
            date: '11 September 2016 |',
            dateLink:'John Doe',
            src: 'Layer4',
            article:'Nature',
            postInfo:'\n' +
            'The words nature and natural are used for all the things that are normally not made by humans. Things like weather,' +
            ' celestial bodies and much more are part of nature. Scientists study the way the parts of nature work. Things that have ' +
            'been made by people are said to be man-made or called artifacts.',
            type:'Nature',
            className:'nature'
        },
        {
            number: 2,
            title: 'Vestibulum ante ipsum primis in faucibus orciluctus et ultirces posuere cubilia.',
            date: '11 September 2016 |',
            dateLink:'John Doe',
            src: 'Layer5',
            article:'People',
            postInfo:'A people is a plurality of persons considered as a whole, as is the case with an ethnic group ' +
            'or nation. Collectively, for example, the contemporary Frisians and Danes are two related Germanic peoples,' +
            ' while various Middle Eastern ethnic groups are often linguistically categorized as Semitic peoples.',
            type:'People',
            className:'people'
        },
        {
            number: 3,
            title: 'Sed arcu ipsum,convallis quis portitor bi- ben dum,convallis non enim.',
            date: '11 September 2016 |',
            dateLink:'John Doe',
            src: 'Layer6',
            article:'High Buildings',
            postInfo:'A high-rise building is a tall building, as opposed to a low-rise building and is defined by its ' +
            'height differently in various jurisdictions. It is used as a residential, office building ' +
            ', or other functions including hotel.',
            type:'Tech',
            className:'tech '
        },
        {
            number: 1,
            title: 'Donec elementum dusi semper,pretium dui quis, pretium nisl.',
            date: '11 September 2016 |',
            dateLink:'John Doe',
            src: 'Layer7',
            article:'Cognitive camps',
            postInfo:'Scientists think that such activities may protect the brain by establishing "cognitive reserve." ' +
            'They may help the brain become more adaptable in some mental functions, so it can compensate for age–related' +
            ' brain changes and health conditions that affect the brain.',
            type:'Trips',
            className:'camps'
        },


        {
            number: 5,
            title: 'Vestibulum ante ipsum primis in faucibus orciluctus et ultirces posuere cubilia.',
            date: '11 September 2016 |',
            dateLink:'John Doe',
            src: 'Layer8',
            article:'Discovering new cities',
            postInfo:'Whether you’re looking for off-the-beaten-path adventures or to hit up the classic tourist ' +
            'destinations, we’ve put together the ultimate guide for how to find awesome things to do while visiting a ' +
            'new city. Gone are the days when we had nothing but maps and guidebooks to rely on for travel tips.',
            type:'Cities',
            className:'discover_cities'
        },
        {
            number: 6,
            title: 'Sed arcu ipsum,convallis quis portitor bi- ben dum,convallis non enim.',
            date: '11 September 2016 |',
            dateLink:'John Doe',
            src: 'Layer4',
            article:'Live Healthy',
            postInfo:'Federal guidelines recommend that all adults get at least 150 minutes of physical activity each' +
            ' week. Aim to move about 30 minutes on most days. Walking is a good start. You can also join programs that' +
            ' teach you to move safely and prevent falls.',
            type:'Health',
            className:'live_healthy'
        }
    ],
    all: function () {
        return this.posts
    },

    get: function (id) {
        const isPost = p => p.number === id;
        return this.posts.find(isPost)
    }
};


export default BlogApi;