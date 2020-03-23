# Time Turner

Basic Electron app for displaying your current / upcoming appointments using the Office 365 Graph API.

## Warning

This is **very** WIP.

## Instructions

1. Install deps with `yarn`.
1. Make a copy of `config.example.json` named `config.json` and put your client ID in there.
1. Run it with `yarn react-start`.
1. Go to `http://locahost:3000`.
1. Log in.
1. Once it says you're logged in (you'll see your name), go to `http://localhost:3000/events`

## Behaviour

Displays the day's meetings as cards in time order. The topmost card (current / next meeting) will display a link to join the meeting URL if applicable, as well as the location of it.

Meeting cards are colour coded:

* Red if the meeting is fewer than five minutes away, plus for the first five minutes of the meeting (because sometimes you're running late).
* Yellow if the meeting is more than 15 minutes away.
* Grey otherwise.

Currently refreshes every two minutes.

## To do

* The log out button doesn't work.
* Proper Electron support including packaging.
* Settings page.
* Set up CI or something and maybe some snapshots.
* Truncate long meeting titles.
* Figure out how to handle multiple meetings occupying the same timeslot. Maybe make meetings hideable?
