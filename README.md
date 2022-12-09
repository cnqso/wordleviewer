# Wordle Viewer

Wordle Viewer is a Christmas gift which takes in an iPhone backup and displays all sent or received Wordle scores in one text conversation. The display is built with React, and the "backend" is a Python script with SQLite and JSON libraries. 

## Features

### Gallery
The gallery gives a scrollable list of all visualization options which sends data to the display component on the right. The component visualizes that data using 

### Stats
Nothing notable here, just some math run on the data

### Backup to Wordle data
The Python script first runs through the user's iMessage SQLite database to find all texts from the desired recipient which contain the unbroken strings "Wordle" and "/6" and which do not begin with a reaction message (Liked, Emphasized, Laughed at, etc). It then organizes the date, wordle sequence, score, and full text of each player in an SQL database. Each row is organized by the Wordle number, and the correct answer for each day is grabbed from a seperate JSON I organized. The script outputs the completed data in .db and .json formats.

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
* Integrate the python script and react app in a more "plug and play" way.
* A feature in the Python script which "guesses" at the words users would have guessed using word frequency analysis and word biases (consistent starting words, consistent second words, etc.)
* A feature in the python script which allows users to enter a phone number rather than a handle id, which would allow a better "plug and play" experience.
* Codepen-friendly showcases of the animations and CFAbsolute Time -> Date modules
* An automatically updating and publicly accessible database of all wordle answers in JSON, .db, CSV, and text formats (somehow was not able to find anything other than plaintext websites).
* Automatic database updating functionality (longshot).

## License

None, do whatever you want.
