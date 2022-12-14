# Wordle Viewer

Wordle Viewer is a Christmas gift which takes in an iPhone backup and displays all sent or received Wordle scores in one text conversation. The display is built with React, and the "backend" is a Python script using the SQLite, JSON, and wordfreq libraries. 

## Features

### Gallery
The gallery gives a scrollable list of all visualization options which sends data to the display component on the right. The display is just a box for displaying arbitrary content, and the scroller can theoretically hold any data loaded through a JSON, so if this seems like it could work well for your project then feel free to copy and modify.
The wordle displays are grids of css components animated with the framer-motion library. The messages below the wordle displays show the original texts messages which the data above were pulled from.

### Stats
Nothing notable here, just some math run on the data.

### Backup to Wordle data
The Python script first runs through the user's iMessage SQLite database to find all texts from the desired recipient which contain the unbroken strings "Wordle" and "/6" and which do not begin with a reaction message (Liked, Emphasized, Laughed at, etc). It then organizes the date, wordle sequence, score, and full text of each player in an SQL database. Each row is organized by the Wordle number, and the correct answer for each day is grabbed from a seperate JSON I organized. The script outputs the completed data in .db and .json formats.

### Reverse Solutions
Solutions are not included in the wordle data, so the display initially only showed the day's answer in all squares. To solve this, I made an alogrithm which takes in the day's answer and the wordle grid then returns all possible combinations of words to reach those answers ordered by the likelihood of usage. Likelihood is determined by the frequency of each word's usage in the english language (huge thanks to the [wordfreq library](https://pypi.org/project/wordfreq/) by Robyn Speer) as well as "biased words" for each user (common starting words, common second guesses, etc). This project only makes use of the most likely solution. 

## Demo

Forthcoming

## Customizing

To use your own wordle scores, you need:
* An unencrypted iPhone backup (Accomplishable via iTunes or a 3rd-party alternative like [iMazing](https://imazing.com/)). It will almost certainly be named "3d0d7e5fb2ce288813306e4d4636395e047a3d28.db". Search this file name in your appdata (PC) or your Application Support (Mac) folder.
* A way of reading SQLite data ([I used DB Browser](https://sqlitebrowser.org/))

1. Place your text backup file it in the "SQLWordle" folder.
2. Find the handle_id of the conversation you're interested in. This will be in the "messages" table of your text backup. If you're having trouble, try searching strings from texts you have exchanged with this person.
3. Run the python script. It will output a file called "wordleScores.db" and "wordleScores.json".
4. Place "wordleScores.json" into the "src" folder of wordleviewer
5. Launch the app via the index.html file!



If anything doesn't work perfectly right out of the box, please let me know. 


## Plan to implement

* Finish the webapp and upload a python script with an anonymized example file.
* Rename all proper nouns to "user1" and "user2"
*  An automatically updating and publicly accessible database of all wordle answers in JSON, .db, CSV, and text formats (somehow was not able to find anything other than plaintext websites).
* Integrate the python script and react app in a more "plug and play" way.
* A feature in the python script which allows users to enter a phone number rather than a handle id, which would allow a better "plug and play" experience.
* Codepen-friendly showcases of the animations, CFAbsolute Time -> Date, and reverse solution modules
* Automatic database updating functionality (longshot).
