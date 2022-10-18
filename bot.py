import datetime
import random
import asyncio
import json
import sys
import sqlite3

# attempt to import discord stuff, catch ImportError.
try:
    import discord
    from discord.ext.commands import Bot
    from discord.ext import commands
    import xml.etree.ElementTree as ET

except ImportError:
    print("Something went wrong whilst importing discord modules. \n"
          "Please consult the README.md file for more information \n"
          "regarding the necessary import modules. README.md can \n"
          "be found at: https://github.com/Cobihopkins/ceejae-bot/blob/main/README.md")

def load_creds():
    """
    Idea of loading credentials from a json file
    comes from CarlGroth: Carl-Bot owner.
    Credit: https://github.com/CarlGroth
    """
    with open('creds.json') as f:
        return json.load(f)

credentials = load_creds()
print(credentials)

class CeeJaeBot(commands.Bot):
    def __init__(self):
        self.bot_id = ""
        self.token = credentials["token"]


if __name__=="__main__":
    ceejaebot = CeeJaeBot()
    ceejaebot.run()
