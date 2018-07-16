import sqlite3
from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

roomsList = ['Burrow', 'Worsham', 'Worsham North', 'Worsham South', 'Campbell', 'Campbell North', 'Campbell South', 'East Lobby', 'Tech Cluster 1', 'Tech Cluster 2', 'Tech Cluster 3', 'Tech Cluster 4', 'Tech Cluster 5', 'Tech Cluster 6', 'Tech Cluster 7']

@app.route('/')
def mainPage():
    return render_template('mainPage.html')

@app.route('/admin')
def adminPage():
    c = sqlite3.connect('users.db')
    cur = c.cursor()
    cur.execute("SELECT DISTINCT * FROM users")
    users = cur.fetchall()
    return render_template('adminPage.html', users=users)

@app.route('/new_user', methods=['POST', 'GET'])
def new_user():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        phone = request.form['phone']
        email = request.form['email']
        event = request.form['event']
        date = request.form['date']
        start = request.form['start_time']
        end = request.form['end_time']
        room = request.form['rooms']
        comments = request.form['comments']
        con = sqlite3.connect('users.db')
        cur = con.cursor()
        cur.execute("INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?)", (str(firstname), str(lastname), str(phone), str(email), str(event), str(date), str(start), str(end), str(room), str(comments)))
        con.commit()
        con.close()
        return setupPage(room, event)

@app.route('/setup')
def setupPage(setupRoom, event):
    tables = []
    chairs = []
    couches = []
    other = []
    room = setupRoom
    c = sqlite3.connect('furniture.db')
    c.row_factory = sqlite3.Row
    cur = c.cursor()
    cur.execute("SELECT furniture FROM rooms WHERE name=" + "'" + room + "'")
    furniture = cur.fetchall()
    for row in furniture:
        for member in row:
            newStr = ''.join(member)
            for i in newStr.split(","):
                if "table" in i:
                    tables.append(i)
                elif "chair" in i:
                    chairs.append(i)
                elif "couch" in i:
                    couches.append(i)
                else:
                    other.append(i)
    print(tables)
    print(chairs)
    print(couches)
    print(other)

    if room == "Burrow":
        room = "The Burrow"
    if room == "East Lobby":
        room = "The East Lobby"
    return render_template("setup.html", room=room, event=event, tables=tables, chairs=chairs, couches=couches, other=other)

if __name__ == '__main__':
    app.run(debug=True)
