let playerNames = [ ]

let playersNameInput = document.getElementById('players-name-input')
let addPlayerName = document.getElementById('add-player-name')
let noOfTeamsInput = document.getElementById('no-of-teams-input')
let createNoOfTeams = document.getElementById('create-no-of-teams')
let waitingListArea = document.getElementById('waiting-list')

const triggerClickWithEnter = (input, btn) => {
    input.onkeyup = e => {
        if (e.keyCode === 13) {
            e.preventDefault()
            btn.click()
        }
    }
}

triggerClickWithEnter(playersNameInput, addPlayerName)

const addPlayer = () => {
    playerNames.push(playersNameInput.value)
    console.log(playerNames)
    playersNameInput.value = ''
}


addPlayerName.addEventListener('click', addPlayer)
