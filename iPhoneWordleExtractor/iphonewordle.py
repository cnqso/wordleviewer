import sqlite3
import json
import collections
import os
from reverseWordleSolver import reverseSolveWordle

#Edit this to any 10 digit phone number to receive those texts
phonenumber = "[---> your friend's phone number here <---]"

global conn
global c
conn = sqlite3.connect('3d0d7e5fb2ce288813306e4d4636395e047a3d28.db')
c = conn.cursor()


def textToDatabase(text, is_from_me, date, solutions):
    #Sometimes words are put before the Wordle summary, so offset is the number of characters away from the beginning it is.
    offset = text.find('Wordle')
    wordleNumber = int(text[7+offset:10+offset]) #Selects the wordle Number, which is at position 7 through 9 unless an offset is needed.
                                                #This would work fine for 2-digit wordles, but if you're a day-1 wordle fan, this user1 break
    c.execute("INSERT OR IGNORE INTO final.scores (wordle, solution) VALUES (?, ?)", (str(wordleNumber), solutions[wordleNumber]['Answer']))
    
    
    
    
    score = text[11+offset] #Shouldn't put it into an integer yet because a loss is represented by an "X"

    if score != 'X':
        emojiSquares = text[16+offset:15 + offset + 6*int(score)]
        score = int(score)
    else:
        emojiSquares = text[16+offset : 51+offset]
        score = 7

    textSquares = emojiToString(emojiSquares) #Changes the emojis into a number form easier to transport and read
    # appendDatabase(wordleNumber, "solution", solutions[wordleNumber]['Answer'])


    #Also appends a string for use in displaying the text
    #Entirely optional, just a little ornamentation
    #print(textSquares, solutions[wordleNumber]['Answer'])
    reverseSolution = reverseSolveWordle(textSquares, solutions[wordleNumber]['Answer'], is_from_me) 
    reverseSolution += (" " * (30-len(reverseSolution)))
    #print(reverseSolution)
    

    if is_from_me == 0 :
        appendDatabase(wordleNumber, "user1score", score)
        appendDatabase(wordleNumber, "user1squares", textSquares)
        appendDatabase(wordleNumber, "user1time", date)
        appendDatabase(wordleNumber, "fulltextuser1", text)
        appendDatabase(wordleNumber, "user1reversesolution", reverseSolution)
    elif is_from_me == 1:
        appendDatabase(wordleNumber, "user2score", score)
        appendDatabase(wordleNumber, "user2squares", textSquares)
        appendDatabase(wordleNumber, "user2time", date)
        appendDatabase(wordleNumber, "fulltextuser2", text)
        appendDatabase(wordleNumber, "user2reversesolution", reverseSolution)



def appendDatabase(rowID, column, newValue):
        c.execute("UPDATE final.scores SET " + column + " = :val WHERE wordle = :row", {'row': rowID, 'val': newValue})


def emojiToString(emojis):
#We could just do this in the frontend, but we already transfer the full text so nothing is lost.
    wordArray = ""
    for emoji in emojis:
        match emoji:
            case "🟩":
                wordArray += 'G'
            case "🟨":
                wordArray += 'Y'
            case "⬜":
                wordArray += 'B'
            case "⬛":
                wordArray += 'B'
            case _:
                pass
    return wordArray


#Start


c.execute("SELECT ROWID FROM handle WHERE id LIKE '%" + str(phonenumber) + "%'")
#For whatever reason the handleIDs are returned as a list of tuples with null values. 
#We take in these values and return them 
handleIDtuples = c.fetchall()
handleIDs = [handle[0] for handle in handleIDtuples]
print(f"Handle IDs for {phonenumber}={handleIDs}")


c.execute("ATTACH DATABASE ':memory:' AS new")
try:
    c.execute("""CREATE TABLE new.user2texts (
            ROWID integer,
            text text,
            handle_id integer,
            is_from_me integer,
            date integer
            )""")
    print("Created memory table")
except sqlite3.Error as error:
        print("Couldn't create user2texts because ", error)

try:
    for handleID in handleIDs:
        c.execute("INSERT INTO new.user2texts SELECT ROWID, text, handle_id, is_from_me, date FROM message WHERE handle_id= "+ str(handleID) + " AND text LIKE '%wordle%' AND text LIKE '%/6%' AND text NOT LIKE 'Liked%' AND text NOT LIKE 'Loved%' AND text NOT LIKE 'Emphasized%' AND text NOT LIKE 'Disliked%' AND text NOT LIKE 'Laughed at%'")
    print("Tranferred all relevant texts")
except sqlite3.Error as error:
        print("Could not transfer data because", error)

if os.path.exists("wordle.db"):
  os.remove("wordle.db")

c.execute("ATTACH DATABASE 'wordle.db' AS final")
try:
    c.execute("""CREATE TABLE final.scores (
            wordle integer,
            user1score integer,
            user2score integer,
            user1squares,
            user2squares,
            user1time integer,
            user2time integer,
            fulltextuser1 text,
            fulltextuser2 text,
            solution text,
            user1reversesolution text,
            user2reversesolution text,
            UNIQUE(wordle)
            )""")
    print("Created score database")
except sqlite3.Error as error:
        print("Couldn't create final score database because", error)



#Now that we have a temporary database of wordle score texts, we extract the relevant data
f = open('answers.json')
answers = json.load(f)
c.execute('SELECT * FROM new.user2texts')
rows = c.fetchall()

for row in rows:
    textToDatabase(row[1], row[3], row[4], answers) #Row[1] = text , Row[3] = is_from_me, Row[4] = date

#With all the data trimmed and cleaned, we put everything into a JSON
c.execute("SELECT * FROM final.scores ORDER BY wordle ASC")
wordleObjects = []
rows = c.fetchall()

for row in rows:
    d = collections.OrderedDict()
    d['wordle'] = row[0]
    d['user1score'] = row[1]
    d['user2score'] = row[2]
    d['user1squares'] = row[3]
    d['user2squares'] = row[4]
    d['user1time'] = row[5]
    d['user2time'] = row[6]
    d['fulltextuser1'] = row[7]
    d['fulltextuser2'] = row[8]
    d['solution'] = row[9]
    d['user1reversesolution'] = row[10]
    d['user2reversesolution'] = row[11]
    wordleObjects.append(d)

finaljson = json.dumps(wordleObjects, ensure_ascii=False, indent=4)

with open('../src/wordleScores.json', 'w', encoding='utf-8') as wordleJson:
    wordleJson.truncate(0)
    wordleJson.write(finaljson)

conn.commit()
conn.close()
















