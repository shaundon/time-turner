# Time Turner

Basic Electron app for displaying your current / upcoming appointments using the Office 365 Graph API.

## Warning

This is **very** WIP.

## Instructions

First, install deps with `yarn`.

To run **just** in a browser: `yarn react-start`.
To run in a browser **and** in Electron: `yarn start`.
To build the Electron app for production: `yarn dist`.

## Behaviour

Displays the day's meetings as cards in time order. The topmost card (current / next meeting) will display a link to join the meeting URL if applicable.

Meeting cards are colour coded:

* Red if the meeting is fewer than five minutes away, plus for the first five minutes of the meeting (because sometimes you're running late).
* Yellow if the meeting is more than 15 minutes away.
* Grey otherwise.

## To do

* Settings page
* Actually talk to the API and stop using hard-coded data.
* Get packaging the Electron app working.
* Set up CI or something and maybe some snapshots.
* Truncate long meeting titles
* Figure out how to handle multiple meetings occupying the same timeslot. Maybe make meetings hideable?
