import sqlite3
from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def mainPage():
    return render_template('mainPage.html')

if __name__ == '__main__':
    app.run(debug=True)
