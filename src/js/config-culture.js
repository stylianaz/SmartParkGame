const config2 = {
    images: {
        distMap: "../../../imgs/culture/aquadect/aquadectDist.png",
        map: {
            src: "../../../imgs/culture/aquadect/level1aquadect.png",
           
            areas: [
                { alt: "park1", title: "park1", coords: "45,112,51", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park2", title: "park2", coords: "42,207,51", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park3", title: "park3", coords: "84,309,51", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park4", title: "park4", coords: "273,236,51", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park5", title: "park5", coords: "391,310,51", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park6", title: "park6", coords: "401,194,51", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park7", title: "park7", coords: "395,83,51", shape: "circle", onClick: "javascript:correctAnswer()" },
                { alt: "park8", title: "park8", coords: "564,231,51", shape: "circle", onClick: "javascript:wrongAnswer()" }
            ]

        },
        correctMap:  "../../../imgs/culture/aquadect/aquadectAnswer.png",
       // backButton: "../../../imgs/back-button.png",
        logo: "../../../imgs/logo-SmartPark.png",
        successPic: "../../../imgs/random/aquadect.png",
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
            PickText: "Click on the parking that you believe is closest to the Nicosia Aquadect. Easy!",
            correctAnswerHeading: "Correct Answer!",
            correctAnswerMessage: "You can move on to the next level",
            wrongAnswerHeading: "Wrong answer! You have one life remaining.",
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
            PickText: "Κάντε κλικ στο πάρκινγκ που πιστεύετε ότι είναι το πιο κοντινό στο Nicosia Aquadect. Εύκολο!",
            correctAnswerHeading: "Σωστή Απάντηση!",
            correctAnswerMessage: "Μπορείτε να προχωρήσετε στο επόμενο επίπεδο.",
            wrongAnswerHeading: "Λάθος Απάντηση! Σου απομένει μια ζωή.",
            wrongAnswerMessage: "Τα πάρκινγκ κατατάσσονται με το 1 να είναι το καλύτερο στον πιο πάνω χάρτη.",
            outOfTimeMessage: "Έληξε ο χρόνος, χάσατε!"
        }
    }, 
    levels: {
        nextLevel1: "../../infoScreen/info1.html",
        nextLevel2: "../../infoScreen/info2.html"
    }
};


const config3 = {
    images: {
        distMap: "../../../imgs/culture/famagusta/famagustaDist.png",
        map: {
            src: "../../../imgs/culture/famagusta/level1famagusta.png",
           
            areas: [
                { alt: "park1", title: "park1", coords: "28,227,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park2", title: "park2", coords: "236,339,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park3", title: "park3", coords: "26,326,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park4", title: "park4", coords: "372,299,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park5", title: "park5", coords: "362,183,50", shape: "circle", onClick: "javascript:correctAnswer()" },
                { alt: "park6", title: "park6", coords: "534,336,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park7", title: "park7", coords: "140,84,50", shape: "circle", onClick: "javascript:wrongAnswer()" }
            ]
        },
        correctMap:  "../../../imgs/culture/famagusta/famagustaAnswer.png",
      //  backButton: "../../../imgs/back-button.png",
        logo: "../../../imgs/logo-SmartPark.png",
        successPic: "../../../imgs/random/success.png",
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
            PickText: "Click on the parking that you believe is closest to the Famagusta Gate. Easy!",
            correctAnswerHeading: "Correct Answer!",
            correctAnswerMessage: "You can move on to the next level",
            wrongAnswerHeading: "Wrong answer! You have one life remaining.",
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
            PickText: "Κάντε κλικ στο πάρκινγκ που πιστεύετε ότι είναι το πιο κοντινό στη Πύλη Αμμοχώστου. Εύκολο!",
            correctAnswerHeading: "Σωστή Απάντηση!",
            correctAnswerMessage: "Μπορείτε να προχωρήσετε στο επόμενο επίπεδο.",
            wrongAnswerHeading: "Λάθος Απάντηση! Σου απομένει μια ζωή.",
            wrongAnswerMessage: "Τα πάρκινγκ κατατάσσονται με το 1 να είναι το καλύτερο στον πιο πάνω χάρτη.",
            outOfTimeMessage: "Έληξε ο χρόνος, χάσατε!"
        }
    }, 
    levels: {
        nextLevel1: "../../infoScreen/info1_new.html",
        nextLevel2: "../../infoScreen/info2_new.html"
    }
};

const config4 = {
    images: {
        distMap: "../../../imgs/culture/cyprusMuseum/cyprusMuseumDist.png",
        map: {
            src: "../../../imgs/culture/cyprusMuseum/level1cyprusMuseum.png",
           
            areas: [
                { alt: "park1", title: "park1", coords: "123,151,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park2", title: "park2", coords: "244,251,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park3", title: "park3", coords: "286,318,50", shape: "circle", onClick: "javascript:correctAnswer()" },
                { alt: "park4", title: "park4", coords: "398,186,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park5", title: "park5", coords: "398,342,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park6", title: "park6", coords: "466,280,50", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park7", title: "park7", coords: "494,357,50", shape: "circle", onClick: "javascript:wrongAnswer()" }
            ]
        },
        correctMap:  "../../../imgs/culture/cyprusMuseum/cyprusMuseumAnswer.png",
       // backButton: "../../../imgs/back-button.png",
        logo: "../../../imgs/logo-SmartPark.png",
        successPic: "../../../imgs/random/cyprus.png",
        loosePic: "../../../imgs/random/sad.png",
        gameOverImg: "../../../imgs/gameOver4.png"
    },
    translations: {
        en: {
            Heading: "Parking Information",
            PickText2: "Look at this picture and memorize the information needed!",
            levelHeading: {
                "levelHeading1": "Level 1",
                "levelHeading2": "Level 2"
            },
            PickText: "Click on the parking that you believe is closest to the Cyprus Museum. Easy!",
            correctAnswerHeading: "Correct Answer!",
            correctAnswerMessage: "You can move on to the next level",
            wrongAnswerHeading: "Wrong answer! You have one life remaining.",
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
            PickText: "Κάντε κλικ στο πάρκινγκ που πιστεύετε ότι είναι το πιο κοντινό στο Κυπριακό Μουσείο. Εύκολο!",
            correctAnswerHeading: "Σωστή Απάντηση!",
            correctAnswerMessage: "Μπορείτε να προχωρήσετε στο επόμενο επίπεδο.",
            wrongAnswerHeading: "Λάθος Απάντηση! Σου απομένει μια ζωή.",
            wrongAnswerMessage: "Τα πάρκινγκ κατατάσσονται με το 1 να είναι το καλύτερο στον πιο πάνω χάρτη.",
            outOfTimeMessage: "Έληξε ο χρόνος, χάσατε!"
        }
    }, 
    levels: {
        nextLevel1: "../../infoScreen/info1.html",
        nextLevel2: "../../infoScreen/info2.html"
    }
};

const config5 = {
    images: {
        distMap: "../../../imgs/culture/byzantine/byzantineDist.png",
        map: {
            src: "../../../imgs/culture/byzantine/level1byzantine.png",
           
            areas: [
                { alt: "park1", title: "park1", coords: "238,29,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park2", title: "park2", coords: "112,203,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park3", title: "park3", coords: "194,255,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park4", title: "park4", coords: "34,311,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park5", title: "park5", coords: "328,119,52", shape: "circle", onClick: "javascript:correctAnswer()" },
                { alt: "park6", title: "park6", coords: "544,220,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park7", title: "park7", coords: "554,329,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park8", title: "park8", coords: "194,352,52", shape: "circle", onClick: "javascript:wrongAnswer()" }
            ]
        },
        correctMap:  "../../../imgs/culture/byzantine/byzantineAnswer.png",
       // backButton: "../../../imgs/back-button.png",
        logo: "../../../imgs/logo-SmartPark.png",
        successPic: "../../../imgs/random/museum.png",
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
            PickText: "Click on the parking that you believe is closest to the Byzantine Museum. Easy!",
            correctAnswerHeading: "Correct Answer!",
            correctAnswerMessage: "You can move on to the next level",
            wrongAnswerHeading: "Wrong answer! You have one life remaining.",
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
            PickText: "Κάντε κλικ στο πάρκινγκ που πιστεύετε ότι είναι το πιο κοντινό στο Βυζαντινό Μουσείο. Εύκολο!",
            correctAnswerHeading: "Σωστή Απάντηση!",
            correctAnswerMessage: "Μπορείτε να προχωρήσετε στο επόμενο επίπεδο.",
            wrongAnswerHeading: "Λάθος Απάντηση! Σου απομένει μια ζωή.",
            wrongAnswerMessage: "Τα πάρκινγκ κατατάσσονται με το 1 να είναι το καλύτερο στον πιο πάνω χάρτη.",
            outOfTimeMessage: "Έληξε ο χρόνος, χάσατε!"
        }
    }, 
    levels: {
        nextLevel1: "../../infoScreen/info1.html",
        nextLevel2: "../../infoScreen/info2.html"
    }
};

const config6 = {
    images: {
        distMap: "../../../imgs/culture/leventis/leventisDist.png",
        map: {
            src: "../../../imgs/culture/leventis/level1leventis.png",
           
            areas: [
                { alt: "park1", title: "park1", coords: "40,228,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park2", title: "park2", coords: "240,144,52", shape: "circle", onClick: "javascript:correctAnswer()" },
                { alt: "park3", title: "park3", coords: "294,302,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park4", title: "park4", coords: "322,40,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park5", title: "park5", coords: "408,90,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park6", title: "park6", coords: "406,176,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park7", title: "park7", coords: "444,282,52", shape: "circle", onClick: "javascript:wrongAnswer()" },
                { alt: "park8", title: "park8", coords: "86,302,52", shape: "circle", onClick: "javascript:wrongAnswer()" }
            ]
        },
        correctMap:  "../../../imgs/culture/leventis/leventisAnswer.png",
      //  backButton: "../../../imgs/back-button.png",
        logo: "../../../imgs/logo-SmartPark.png",
        successPic: "../../../imgs/random/museum.png",
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
            PickText: "Click on the parking that you believe is closest to the Leventis Museum. Easy!",
            correctAnswerHeading: "Correct Answer!",
            correctAnswerMessage: "You can move on to the next level",
            wrongAnswerHeading: "Wrong answer! You have one life remaining.",
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
            PickText: "Κάντε κλικ στο πάρκινγκ που πιστεύετε ότι είναι το πιο κοντινό στο Λεβέντειο Μουσείο. Εύκολο!",
            correctAnswerHeading: "Σωστή Απάντηση!",
            correctAnswerMessage: "Μπορείτε να προχωρήσετε στο επόμενο επίπεδο.",
            wrongAnswerHeading: "Λάθος Απάντηση! Σου απομένει μια ζωή.",
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

