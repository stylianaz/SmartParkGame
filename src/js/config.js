const config = {
    images: {
        distMap: "../../../imgs/bars/pivo/pivoDist.png",
        map: {
            src: "../../../imgs/bars/pivo/level1pivo.png",
            areas: [
                { alt: "park1", title: "park1", coords: "128,194,45", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park2", title: "park2", coords: "244,6,45", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park3", title: "park3", coords: "345,70,40", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park4", title: "park4", coords: "407,53,40", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park5", title: "park5", coords: "426,98,40", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park6", title: "park6", coords: "523,212,45", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park7", title: "park7", coords: "384,333,45", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park8", title: "park8", coords: "296,300,45", shape: "circle", onClick: "javascript:correctAnswer()" }
            ]
        },

        correctMap: "../../../imgs/bars/pivo/pivoAnswer.png",
        backButton: "../../../imgs/back-button.png",
        logo: "../../../imgs/logo-SmartPark.png",
        successPic: "../../../imgs/random/beer.png",
        loosePic: "../../../imgs/random/sad.png"
    },
    translations: {
        en: {
            Heading: "Parking Information",
            PickText2: "Look at this picture and memorize the information needed!",
            levelHeading: {
                "levelHeading1": "Level 1",
                "levelHeading2": "Level 2"
            },
            PickText: "Click on the parking that you believe is closest to Pivo Brewery. Easy!",
            correctAnswerHeading: "Correct Answer!",
            correctAnswerMessage: "You can move on to the next level",
            wrongAnswerHeading: "Wrong Answer!",
            wrongAnswerMessage: "The parkings are ranked with 1 being the best on the map above.",
            outOfTimeMessage: "You ran out of time, you lose!"
        },
        gr: {
            Heading: "Πληροφορίες Στάθμευσης",
            PickText2: "Κοιτάξτε αυτή την εικόνα και απομνημονεύστε τις πληροφορίες που χρειάζονται!",
            levelHeading: {
                "levelHeading1": "Επίπεδο 1",
                "levelHeading2": "Επίπεδο 2"
            },
            PickText: "Κάντε κλικ στο πάρκινγκ που πιστεύετε ότι είναι το πιο κοντινό στο Pivo Brewery. Εύκολο!",
            correctAnswerHeading: "Σωστή Απάντηση!",
            correctAnswerMessage: "Μπορείτε να προχωρήσετε στο επόμενο επίπεδο.",
            wrongAnswerHeading: "Λάθος Απάντηση!",
            wrongAnswerMessage: "Τα πάρκινγκ κατατάσσονται με το 1 να είναι το καλύτερο στον πιο πάνω χάρτη.",
            outOfTimeMessage: "Έληξε ο χρόνος, χάσατε!"
        }
    }, 
    levels: {
        nextLevel1: "../../infoScreen/info1.html",
        nextLevel2: "../../infoScreen/info2.html"
    }
};

// Export the config object to be accessible from other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = config;
}
